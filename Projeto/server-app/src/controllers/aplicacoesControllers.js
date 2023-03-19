import { PrismaClient } from "@prisma/client";
import { Router, response } from "express";

const prisma = new PrismaClient();
const router = new Router();

router.get("/verify", async (req, res) => {
	try {
		const { doc, code, unityId } = req.query;

		const [patient, vaccine, unity] = await Promise.all([
			prisma.patient.findFirst({ where: { doc } }),
			prisma.vaccine.findFirst({ where: { code } }),
			prisma.unity.findFirst({
				where: { id: parseInt(unityId ? unityId : "0") },
			}),
		]);

		res.status(200).send({
			patient: !!patient,
			unity: !!unity,
			vaccine: !!vaccine,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
});

router.get("/unityRegister/:id", async (req, res) => {
	try {
		const unityId = parseInt(req.params.id);

		const aplicationsList = await prisma.aplication
			.findMany({
				where: { unityId },
				include: {
					vaccine: true,
					patient: true,
				},
			})
			.then((response) =>
				response.map((el) => ({
					id: el.id,
					patient: el.patient.name,
					doc: el.patient.doc,
					vaccine: el.vaccine.name,
					code: el.vaccine.code,
					date: el.created_at
				}))
			);

		res.status(200).send(aplicationsList);
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
});

router.post("/newAplication", async (req, res) => {
	try {
		const { doc, code, unityId } = req.body;

		const [patient, vaccine, unity] = await Promise.all([
			prisma.patient.findFirst({ where: { doc } }),
			prisma.vaccine.findFirst({ where: { code } }),
			prisma.unity.findFirst({
				where: { id: parseInt(unityId ? unityId : "0") },
			}),
		]);

		await prisma.aplication.create({
			data: {
				patientId: patient.id,
				unityId: unity.id,
				vaccineId: vaccine.id,
			},
		});

		res.status(201).send();
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
});

export default router;
