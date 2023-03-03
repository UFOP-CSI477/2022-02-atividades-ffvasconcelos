import { PrismaClient } from "@prisma/client";
import { stateData } from "../routes/estados";
import axios from "axios";

const prisma = new PrismaClient();

export type state = {
	sigla: string;
	nome: string;
};

export const getStates = async (filter?: stateData) => {
	const data = await prisma.estados.findMany({
		where: filter,
	});

	return data;
};

export const deleteStates = async () => {
	const data = await prisma.estados.deleteMany({
		where: {},
	});

	return data;
};

export const registerStates = async () => {
	try {
		const { data } = await axios.get(
			"https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
		);

		const statesData: Array<state> = data.map((state: any) => ({
			sigla: state.sigla,
			nome: state.nome,
		}));

		const createMany = await prisma.estados.createMany({
			data: statesData,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};


export const updateState = async (id: number, updateData: stateData) => {
	const data = await prisma.estados.update({
		where: { id },
		data: updateData,
	});

	return data;
};

