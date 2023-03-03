import { PrismaClient } from "@prisma/client";
import { distributionData } from "../routes/distribuicoes";

const prisma = new PrismaClient();

export type distribution = {
	data: Date | string;
	produto_id: number;
	unidade_id: number;
};

export const getDistributions = async (filter?: distributionData) => {
	const data = await prisma.distribuicoes.findMany({
		where: {
			...filter,
			produto_id: filter?.produto_id ? parseInt(filter?.produto_id) : undefined,
			unidade_id: filter?.unidade_id ? parseInt(filter?.unidade_id) : undefined,
		},
	});

	return data;
};

export const deleteDistribution = async (id: number) => {
	const data = await prisma.distribuicoes.deleteMany({
		where: { id },
	});

	return data;
};

export const registerDistributions = async (data: distribution[]) => {
  try {
    const newDistributionsData: distribution[] = data.map(el => ({...el, data: new Date(el.data)})) 

		const createMany = await prisma.distribuicoes.createMany({
			data: newDistributionsData,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};

export const updateDistribution = async (id: number, updateData: distributionData) => {
	const data = await prisma.distribuicoes.update({
		where: { id },
		data: {
			...updateData,
			data: updateData?.data ? new Date(updateData?.data) : undefined,
			produto_id: updateData?.produto_id
				? parseInt(updateData?.produto_id)
				: undefined,
			unidade_id: updateData?.unidade_id
				? parseInt(updateData?.unidade_id)
				: undefined,
		},
	});

	return data;
};
