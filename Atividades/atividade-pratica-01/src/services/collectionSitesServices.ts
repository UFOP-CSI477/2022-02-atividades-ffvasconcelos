import { PrismaClient } from "@prisma/client";
import { collectionSiteData } from "../routes/locais_coleta";

const prisma = new PrismaClient();

export type collectionSite = {
	nome: string;
  numero: string;
  rua: string;
	complemento: string;
	cidade_id: number;
};

export const getSites = async (filter?: collectionSiteData) => {
	const data = await prisma.locais_coleta.findMany({
		where: {
			...filter,
			cidade_id: filter?.cidade_id ? parseInt(filter?.cidade_id) : undefined,
		},
	});

	return data;
};

export const deleteSite = async (id: number) => {
	const data = await prisma.locais_coleta.deleteMany({
		where: { id },
	});

	return data;
};

export const registerSites = async (data: collectionSite[]) => {
	try {
		const createMany = await prisma.locais_coleta.createMany({
			data: data,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};

export const updateSite = async (id: number, updateData: collectionSiteData) => {
	const data = await prisma.locais_coleta.update({
		where: { id },
		data: {
			...updateData,
			cidade_id: updateData?.cidade_id
				? parseInt(updateData?.cidade_id)
				: undefined,
		},
	});

	return data;
};
