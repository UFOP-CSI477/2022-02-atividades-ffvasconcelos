import { PrismaClient } from "@prisma/client";
import { bloodTypeData } from "../routes/tipos_sanguineos";

const prisma = new PrismaClient();

export type bloodType = {
	tipo: string;
	fator: string;
};

export const registerBloodType = async (data: bloodType[]) => {
	try {
		const createMany = await prisma.tipos_sanguineos.createMany({
			data: data,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};

export const deleteBloodType = async (id: number) => {
	const data = await prisma.tipos_sanguineos.delete({
		where: { id },
	});

	return data;
};

export const getBloodType = async (filter?: bloodTypeData) => {
	const data = await prisma.tipos_sanguineos.findMany({
		where: filter,
	});

	return data;
};

export const updateBloodType = async (
	id: number,
	updateData: bloodTypeData
) => {
	const data = await prisma.tipos_sanguineos.update({
		where: { id },
		data: updateData,
	});

	return data;
};
