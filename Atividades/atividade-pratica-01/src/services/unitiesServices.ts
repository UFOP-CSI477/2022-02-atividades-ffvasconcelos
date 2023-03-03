import { PrismaClient } from "@prisma/client";
import { unityData } from "../routes/unidades";

const prisma = new PrismaClient();

export type unity = {
	nome: string;
	numero: string;
	complemento: string;
	cidade_id: number;
};

export const getUnities = async (filter?: unityData) => {

	const data = await prisma.unidades.findMany({
		where: {
			...filter,
			cidade_id: filter?.cidade_id ? parseInt(filter?.cidade_id) : undefined,
		}
	});

	return data;
};

export const deleteUnity = async (id: number) => {
	const data = await prisma.unidades.deleteMany({
		where: {id},
	});

	return data;
};

export const registerUnity = async (data: unity[]) => {
	try {
		const createMany = await prisma.unidades.createMany({
			data: data,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};

export const updateUnity = async (id: number, updateData: unityData) => {
	const data = await prisma.unidades.update({
		where: { id },
		data: {
			...updateData,
			cidade_id: updateData?.cidade_id ? parseInt(updateData?.cidade_id) : undefined,
		},
	});

	return data;
};
