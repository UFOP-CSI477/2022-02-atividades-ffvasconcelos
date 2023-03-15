import { useEffect, useState } from "react";
import api from "../../services/api";

interface unity {
	id: number;
	name: string;
	city: string;
	state: string;
	created_at: string;
	updated_at: string;
}

const Unidades = () => {
	const [openDialog, setOpenDialog] = useState<boolean>(false);

	const [allUnities, setAllUnities] = useState<unity[]>([]);
	const [selectedUnity, setSelectedUnity] = useState<unity | null>(null);

	useEffect(() => {
		try {
			api.get("/unidade").then((response) => {
				setAllUnities(response.data);
			});
		} catch (error) {
			console.log(error);
		}
	}, [openDialog]);

	const showDialog = () => {
		setOpenDialog(true);
	};
	const closeDialog = () => {
		setSelectedUnity(null);

		setOpenDialog(false);
	};

	const handleDelete = async (id: number) => {
		try {
			await api.delete(`/unidade/${id}`).then((response) => {
				api.get("/unidade").then((response) => {
					setAllUnities(response.data);
				});
			});
		} catch (error) {
			console.log(error);
		}
	};

	const DialogUnidade = (props: { open: boolean }) => {
		const [name, setName] = useState<string>(
			selectedUnity ? selectedUnity.name : ""
		);
		const [city, setCity] = useState<string>(
			selectedUnity ? selectedUnity.city : ""
		);
		const [state, setState] = useState<string>(
			selectedUnity ? selectedUnity.state : ""
		);

		const handleSave = async () => {
			if (selectedUnity) {
				await api
					.put(`/unidade/${selectedUnity.id}`, { name, city, state })
					.then((response) => {
						setOpenDialog(false)
						setSelectedUnity(null)
					});
			} else {
				await api
					.post("/unidade/", { name, city, state })
					.then((response) => setOpenDialog(false));
			}
		};

		return (
			<dialog
				open={props.open}
				className='border-solid border-2 border-slate-500-500 rounded-xl'>
				<div>Insira os dados da nova unidade:</div>

				<div className='grid justify-items-stretch mt-4'>
					<div>
						<p>Nome: </p>
						<input
							type='text'
							name='name'
							id='name'
							className='border-solid border border-slate-400 rounded-lg my-1 px-2'
							defaultValue={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<p>Cidade: </p>
						<input
							type='text'
							name='city'
							id='city'
							className='border-solid border border-slate-400 rounded-lg my-1 px-2'
							defaultValue={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div>
						<p>Estado: </p>
						<input
							type='text'
							name='state'
							id='state'
							className='border-solid border border-slate-400 rounded-lg my-1 px-2'
							defaultValue={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
				</div>

				<div className='grid grid-cols-4 justify-items-end'>
					<button
						onClick={closeDialog}
						className='bg-red-600 p-2 text-white font-semibold rounded hover:bg-red-800 active:ring active:ring-red-300 mt-4'>
						Fechar
					</button>
					<button
						onClick={handleSave}
						className='bg-emerald-500 p-2 text-white font-semibold rounded hover:bg-emerald-600 active:ring active:ring-green-300 mt-4'>
						Salvar
					</button>
				</div>
			</dialog>
		);
	};

	return (
		<div className='mx-16 mt-6'>
			<DialogUnidade open={openDialog} />
			<h2 className='font-bold text-xl'>Registro de unidades:</h2>
			<div>
				<div className='border-solid border-2 my-2 border-gray-300 rounded-md h-96 scroll-mr-2'>
					<table className='table-fixed border-collapse border auto-cols-max w-full'>
						<thead>
							<tr>
								<th className='border w-24'>ID</th>
								<th className='border w-80'>Nome</th>
								<th className='border w-64'>Cidade</th>
								<th className='border w-32'>Estado</th>
								<th className='border w-92'>Opções</th>
							</tr>
						</thead>

						<tbody>
							{allUnities.map((data) => (
								<tr key={data.id}>
									<td className='text-center border'>{data.id}</td>
									<td className='text-center border'>{data.name}</td>
									<td className='text-center border'>{data.city}</td>
									<td className='text-center border'>{data.state}</td>
									<td className='text-center border'>
										<button className='bg-blue-500 p-2 m-1 text-white font-semibold rounded hover:bg-blue-700 active:ring active:ring-blue-400 w-24 mx-2'>
											Histórico
										</button>
										<button
											onClick={() => {
												setSelectedUnity(data);
												showDialog();
											}}
											className='bg-emerald-500 p-2 m-1 text-white font-semibold rounded hover:bg-emerald-600 active:ring active:ring-green-300 w-24 mx-2'>
											Atualizar
										</button>
										<button
											onClick={() => {
												handleDelete(data.id);
											}}
											className='bg-red-600 p-2 m-1 text-white font-semibold rounded hover:bg-red-800 active:ring active:ring-red-300 w-24 mx-2'>
											Excluir
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='grid justify-items-end'>
					<button
						onClick={showDialog}
						className='bg-emerald-500 p-2 text-white font-semibold rounded hover:bg-emerald-600 active:ring active:ring-green-300 '>
						Nova unidade
					</button>
				</div>
			</div>
		</div>
	);
};

export default Unidades;
