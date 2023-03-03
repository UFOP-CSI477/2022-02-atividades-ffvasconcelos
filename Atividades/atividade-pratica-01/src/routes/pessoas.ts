import {
	registerPersons,
	updatePerson,
	deletePerson,
	getPersons,
} from "../services/personService";
import { Router } from "express";

const router = Router();

export type personData = {
	nome?: string;
	numero?: string;
	rua?: string;
	complemento?: string;
	cidade_id?: string;
	documento?: string;
	tipo_id?: string;
	id?: number;
};

router.post("/", async (request, response) => {
	const data = await registerPersons(request.body);

	response.status(201).json(data);
});

router.get("/", async ({ query }, response) => {
	const filter: personData = query;

	const data = await getPersons(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id);
	const data = await getPersons({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id: number = parseInt(params.id);

	const updateData = await updatePerson(id, body);

	response.status(200).json(updateData);
});

router.delete("/:id", async ({ params }, response) => {
	const id: number = parseInt(params.id);

	const deleted = await deletePerson(id);

	response.status(204).send(deleted);
});

export default router;
