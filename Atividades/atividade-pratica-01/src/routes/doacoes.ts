import {
  registerDonations,
  updateDonation,
  getDonations,
  deleteDonation
} from "../services/donationsService"
import { Router } from "express";

const router = Router();

export type donationData = {
	data?: string;
	pessoa_id?: string;
	local_id?: string;
	id?: number;
};

router.post("/", async (request, response) => {
	const data = await registerDonations(request.body);

	response.status(201).json(data);
});

router.get("/", async ({ query }, response) => {
	const filter: donationData = query;

	const data = await getDonations(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id);
	const data = await getDonations({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id: number = parseInt(params.id);

	const updateData = await updateDonation(id, body);

	response.status(200).json(updateData);
});

router.delete("/:id", async ({ params }, response) => {
	const id: number = parseInt(params.id);

	const deleted = await deleteDonation(id);

	response.status(204).send(deleted);
});

export default router;
