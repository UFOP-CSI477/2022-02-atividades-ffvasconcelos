import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const router = new Router();

router.get("/", async (req, res) => {
	try {
		const data = await prisma.unity.findMany()

		res.status(200).send(data)
	} catch (error) {
		res.status(500).send()
	}
});

router.post("/", async (req, res) => {
	try {
		const created = await prisma.unity.create({
			data: req.body,
		});

		res.status(201).send(created)
	} catch (error) {
		console.log(error)
		res.status(500).send();
	}
});

router.put("/:id", async (req, res) => {
	try {
		const updated = await prisma.unity.update({
			where: { id: req.params.id },
			data: { ...req.body }
		})

		res.status(200).send(updated)
	} catch (error) {
		res.status(500).send();
	} 
})

router.delete("/:id", async (req, res) => {
	try {
		const deleted = await prisma.unity.delete({
			where: { id: req.params.id }
		});

		res.status(200).send(deleted);
	} catch (error) {
		res.status(500).send();
	} 
})

export default router;
