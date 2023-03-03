import { Router } from "express";
import {
	deleteCity,
	getCities,
	registerCities,
	updateCity
} from "../services/citiesServices";

const router = Router();

export type cityData = {
  nome?: string
  estado_id?: number,
  id?: number
}

router.post("/", async (request, response) => response.status(201).json(await registerCities()))


router.get("/", async ({ query }, response) => {
  const filter: cityData = {}

  if (query.nome) filter.nome = query.nome?.toString();
  if (query.estado_id) filter.estado_id = parseInt(query.estado_id?.toString());

	const data = await getCities(filter);

	response.status(200).json(data);
});

router.get("/:id", async ({ params }, response) => {
	const id = parseInt(params.id);

	const data = await getCities({ id });

	response.status(200).json(data);
});

router.put("/:id", async ({ params, body }, response) => {
	const id = parseInt(params.id);

	const newData: cityData = body;

	const updated = await updateCity(id, newData);

	response.status(200).json(updated);
});

router.delete("/:id", async (request, response) => {
	await deleteCity(parseInt(request.params.id));

	response.status(204).send();
});

export default router;
