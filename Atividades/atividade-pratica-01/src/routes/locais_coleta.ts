import {
	registerSites,
	getSites,
	updateSite,
	deleteSite,
} from "../services/collectionSitesServices";
import { Router } from "express";

const router = Router();

export type collectionSiteData = {
	nome?: string;
  numero?: string;
  rua?: string,
	complemento?: string;
	cidade_id?: string;
	id?: number;
};

router.post("/", async (request, response) => {
	const data = await registerSites(request.body);

	response.status(201).json(data);
});

router.get("/", async ({ query }, response) => {
	const filter: collectionSiteData = query;

	const data = await getSites(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id);
	const data = await getSites({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id: number = parseInt(params.id);

	const updateData = await updateSite(id, body);

	response.status(200).json(updateData);
});

router.delete("/:id", async ({ params }, response) => {
	const id: number = parseInt(params.id);

	const deleted = await deleteSite(id);

	response.status(204).send(deleted);
});

export default router;
