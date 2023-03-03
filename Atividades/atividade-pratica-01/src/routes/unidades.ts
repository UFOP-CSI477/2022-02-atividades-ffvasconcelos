import {
  registerUnity,
  getUnities,
  updateUnity,
  deleteUnity
} from "../services/unitiesServices"
import { Router } from "express";

const router = Router();

export type unityData = {
	nome?: string;
	numero?: string;
	complemento?: string;
	cidade_id?: string;
	id?: number;
};

router.post("/", async (request, response) => {
	const data = await registerUnity(request.body);

	response.status(201).json(data);
});

router.get("/", async({ query }, response) => {
  const filter: unityData = query;

	const data = await getUnities(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
  const id = parseInt(params.id);
	const data = await getUnities({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id: number = parseInt(params.id);

	const updateData = await updateUnity(id, body);

	response.status(200).json(updateData);
});

router.delete("/:id", async ({ params }, response) => {
	const id: number = parseInt(params.id);

	const deleted = await deleteUnity(id);

	response.status(204).send(deleted);
});

export default router;

