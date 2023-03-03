import { PrismaClient } from "@prisma/client";
import { cityData } from "../routes/cidades";
import axios from "axios";

const prisma = new PrismaClient();

export type city = {
	nome: string;
	estado_id: number;
};

export const deleteCity = async (id: number) => {
	const data = await prisma.cidades.deleteMany({
		where: { id },
	});

	return data;
};

export const getCities = async (filter?: cityData) => {
	const data = await prisma.cidades.findMany({
		where: filter,
	});

	return data.length > 1 ? data : data[0];
};

export const registerCities = async () => {
	try {
		const states = (
			await axios.get(
				"https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
			)
		).data;

		const statesDB = await prisma.estados.findMany();

		const relationStates = statesDB.map((state) => {
			const relatedState = states.find((el: any) => state.sigla === el.sigla);

			return {
				sigla: state.sigla,
				idBD: state.id,
				idIBGE: relatedState.id,
			};
		});

		console.log(relationStates);

		const citiesArray = [];

		for (const state of relationStates) {
			const cities = (
				await axios.get(
					`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.idIBGE}/municipios`
				)
			).data;

			const citiesData = cities.map((city: any) => ({
				nome: city.nome,
				estado_id: state.idBD,
			}));

			citiesArray.push(...citiesData);
		}

		const created = await prisma.cidades.createMany({
			data: citiesArray,
		});

		return created;
	} catch (error) {
		console.log(error);
	}
};

export const updateCity = async (id: number, updateData: cityData) => {
	const data = await prisma.cidades.update({
		where: { id },
		data: updateData,
	});

	return data;
};
