import { PrismaClient } from "@prisma/client";
import { donationData } from "../routes/doacoes";

const prisma = new PrismaClient();

export type donation = {
	data: Date | string;
	pessoa_id: number;
	local_id: number;
};

export const getDonations = async (filter?: donationData) => {
	const data = await prisma.doacoes.findMany({
		where: {
			...filter,
			pessoa_id: filter?.pessoa_id ? parseInt(filter?.pessoa_id) : undefined,
			local_id: filter?.local_id ? parseInt(filter?.local_id) : undefined,
		},
	});

	return data;
};

export const deleteDonation = async (id: number) => {
	const data = await prisma.doacoes.deleteMany({
		where: { id },
	});

	return data;
};

export const registerDonations = async (data: donation[]) => {
	try {
		const newDonationsData: donation[] = data.map(el => ({...el, data: new Date(el.data)}))

		const createMany = await prisma.doacoes.createMany({
			data: newDonationsData,
		});

		return createMany;
	} catch (error) {
		console.log(error);
	}
};

export const updateDonation = async (id: number, updateData: donationData) => {
	const data = await prisma.doacoes.update({
		where: { id },
		data: {
			...updateData,
			data: updateData?.data ? new Date(updateData?.data) : undefined,
			pessoa_id: updateData?.pessoa_id
				? parseInt(updateData?.pessoa_id)
				: undefined,
			local_id: updateData?.local_id
				? parseInt(updateData?.local_id)
				: undefined,
		},
	});

	return data;
};
