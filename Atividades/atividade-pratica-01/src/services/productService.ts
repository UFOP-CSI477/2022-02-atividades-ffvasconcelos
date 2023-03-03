import { PrismaClient } from "@prisma/client";
import { productData } from "../routes/produtos";

const prisma = new PrismaClient();

export type product = {
	etiqueta: string;
	validade: Date | string;
	doacao_id: number;
};

export const getProducts = async (filter?: productData) => {
	const data = await prisma.produtos.findMany({
		where: {
			...filter,
			doacao_id: filter?.doacao_id ? parseInt(filter?.doacao_id) : undefined,
		},
	});

	return data;
};

export const deleteProduct = async (id: number) => {
	const data = await prisma.produtos.deleteMany({
		where: { id },
	});

	return data;
};

export const registerProducts = async (data: product[]) => {
  try {
    const newProducts: product[] = data.map(el => ({...el, validade: new Date(el.validade)})) 

		const createMany = await prisma.produtos.createMany({
      data: newProducts,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (id: number, updateData: productData) => {
	const data = await prisma.produtos.update({
		where: { id },
		data: {
			...updateData,
			validade: updateData?.validade
				? new Date(updateData?.validade)
				: undefined,
			doacao_id: updateData?.doacao_id
				? parseInt(updateData?.doacao_id)
				: undefined,
		},
	});

	return data;
};
