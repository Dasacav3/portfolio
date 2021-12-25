const express = require("express");
const router = express.Router();

const project = require("../models/project");

let arrayProjects;

router.get("/", async (req, res) => {
	try {
		arrayProjects = await project.find({});
		console.log(arrayProjects);
	} catch (e) {
		console.log("Error: " + e);
	}
	res.render("projects", {
		arrayProjects: arrayProjects,
	});
});

router.post("/", async (req, res) => {
	const body = req.body;
	try {
		const projectDB = new project(body);
		await projectDB.save();

		//await project.create(body);

		res.redirect("/");
	} catch (e) {
		console.log(e);
	}
});

router.get("/project/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const projectDB = await project.findOne({ _id: id });
		console.log(projectDB);

		res.render("detail", {
			project: projectDB,
			error: false,
		});
	} catch (error) {
		console.log(error);
		res.render("detail", {
			error: true,
			message: "No se encuentra el id seleccionado",
		});
	}
});

router.delete("/project/delete/:id", async (req, res) => {
	const id = req.params.id;

	try {
		const projectDB = await project.findByIdAndDelete({ _id: id });
		console.log(projectDB);

		if (projectDB) {
			res.json({
				status: true,
				message: "Eliminado",
			});
		} else {
			res.json({
				status: false,
				message: "Fallo eliminar",
			});
		}
	} catch (error) {
		console.log(error);
	}
});

router.put("/project/edit/:id", async (req, res) => {
	const id = req.params.id;
	const body = req.body;

	try {
		const projectDB = await project.findByIdAndUpdate(id, body, { useFindAndModify: false });
		console.log(projectDB);
		res.json({
			status: true,
			message: "Editado",
		});
	} catch (e) {
		console.log(e);
		res.json({
			status: false,
			message: "Fallo la edición",
		});
	}
});

module.exports = { router };
