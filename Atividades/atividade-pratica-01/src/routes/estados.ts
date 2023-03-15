import { Router } from "express";
import {
	deleteStates,
	getStates,
	registerStates,
	updateState,
} from "../services/statesServices";

const router = Router();

export type stateData = {
	nome?: string;
	sigla?: string;
	id?: number;
};

router.post("/teste", async (request, response) =>
	response
		.status(201)
		.json({ nome: request.body.nome, sigla: request.body.sigla })
);

router.post("/", async (request, response) =>
	response.status(201).json(await registerStates())
);

router.get("/", async ({ query }, response) => {
	const filter = query;

	const data = await getStates(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id);

	const data = await getStates({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id = parseInt(params.id);

	const newData: stateData = body;

	const updated = await updateState(id, newData);

	response.status(200).json(updated);
});

router.delete("/", async (request, response) => {
	await deleteStates();

	response.status(204).send();
});

export default router;
