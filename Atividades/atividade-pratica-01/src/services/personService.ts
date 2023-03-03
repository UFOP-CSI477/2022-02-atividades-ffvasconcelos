import { PrismaClient } from "@prisma/client";
import { personData } from "../routes/pessoas";

const prisma = new PrismaClient();

export type person = {
	nome: string;
	numero?: string;
	rua?: string;
	complemento?: string;
	cidade_id: number;
	documento: string;
	tipo_id: number
};

export const getPersons = async (filter?: personData) => {
	const data = await prisma.pessoas.findMany({
		where: {
			...filter,
			cidade_id: filter?.cidade_id ? parseInt(filter?.cidade_id) : undefined,
			tipo_id: filter?.tipo_id ? parseInt(filter?.tipo_id) : undefined,
		},
	});

	return data;
};

export const deletePerson = async (id: number) => {
	const data = await prisma.pessoas.deleteMany({
		where: { id },
	});

	return data;
};

export const registerPersons = async (data: person[]) => {
	try {
		const createMany = await prisma.pessoas.createMany({
			data: data,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};

export const updatePerson = async (
	id: number,
	updateData: personData
) => {
	const data = await prisma.pessoas.update({
		where: { id },
		data: {
			...updateData,
			cidade_id: updateData?.cidade_id ? parseInt(updateData?.cidade_id) : undefined,
			tipo_id: updateData?.tipo_id ? parseInt(updateData?.tipo_id) : undefined,
		},
	});

	return data;
};
