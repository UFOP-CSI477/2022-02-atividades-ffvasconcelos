import { 
	registerDistributions,
	updateDistribution,
	getDistributions,
	deleteDistribution
} from "../services/distributionService"
import { Router } from "express";

const router = Router();

export type distributionData = {
	data?: string;
	produto_id?: string;
	unidade_id?: string;
	id?: number;
};

router.post("/", async (request, response) => {
	const data = await registerDistributions(request.body);

	response.status(201).json(data);
});

router.get("/", async ({ query }, response) => {
	const filter: distributionData = query;

	const data = await getDistributions(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id);
	const data = await getDistributions({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id: number = parseInt(params.id);

	const updateData = await updateDistribution(id, body);

	response.status(200).json(updateData);
});

router.delete("/:id", async ({ params }, response) => {
	const id: number = parseInt(params.id);

	const deleted = await deleteDistribution(id);

	response.status(204).send(deleted);
});

export default router;
