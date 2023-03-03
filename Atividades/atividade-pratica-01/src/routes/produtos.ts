import {
	registerProducts,
	updateProduct,
	deleteProduct,
	getProducts,
} from "../services/productService";
import { Router } from "express";

const router = Router();

export type productData = {
	etiqueta?: string;
	validade?: string;
	doacao_id?: string;
	id?: number;
};

router.post("/", async (request, response) => {
	const data = await registerProducts(request.body);

	response.status(201).json(data);
});

router.get("/", async ({ query }, response) => {
	const filter: productData = query;

	const data = await getProducts(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id);
	const data = await getProducts({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id: number = parseInt(params.id);

	const updateData = await updateProduct(id, body);

	response.status(200).json(updateData);
});

router.delete("/:id", async ({ params }, response) => {
	const id: number = parseInt(params.id);

	const deleted = await deleteProduct(id);

	response.status(204).send(deleted);
});

export default router;
