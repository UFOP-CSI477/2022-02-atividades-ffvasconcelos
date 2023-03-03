import { Router } from 'express'
import {
	registerBloodType,
	deleteBloodType,
	getBloodType,
	updateBloodType,
} from "../services/bloodTypeServices";

const router = Router()

export type bloodTypeData = {
	tipo?: string;
	fator?: string;
	id?: number
};

router.post("/", async (request, response) => {
	const data = await registerBloodType(request.body)

	response.status(201).json(data)
});

router.get("/", async ({ query }, response) => {
	const filter = query
	const data = await getBloodType(filter)

	response.status(200).json(data)
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id)
	const data = await getBloodType({ id })

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id: number = parseInt(params.id)
	
	const updateData = await updateBloodType(id, body)

	response.status(200).json(updateData)
});

router.delete("/:id", async ({ params }, response) => {
	const id: number = parseInt(params.id)

	const deleted = await deleteBloodType(id)

	response.status(204).send(deleted)
});

export default router