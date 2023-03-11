import { useState } from "react";

const Unidades = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

	const showDialog = () => {
		setOpenDialog(true);
	};
	const closeDialog = () => {
		setOpenDialog(false);
	};

	const DialogUnidade = (props: { open: boolean }) => {
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
							className='border-solid border border-slate-400 rounded-lg my-1 px-2'
						/>
					</div>
					<div>
						<p>Cidade: </p>
						<input
							type='text'
							className='border-solid border border-slate-400 rounded-lg my-1 px-2'
						/>
					</div>
					<div>
						<p>Estado: </p>
						<input
							type='text'
							className='border-solid border border-slate-400 rounded-lg my-1 px-2'
						/>
					</div>
				</div>

				<div className='grid justify-items-end'>
					<button
						onClick={closeDialog}
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
							<tr>
								<td className='text-center border'>1</td>
								<td className='text-center border'>Posto de teste</td>
								<td className='text-center border'>Santa Bárbara</td>
								<td className='text-center border'>MG</td>
								<td className='text-center border'>
									<button
										onClick={showDialog}
										className='bg-blue-500 p-2 text-white font-semibold rounded hover:bg-blue-700 active:ring active:ring-blue-400 w-24 mx-2'>
										Histórico
									</button>
									<button
										onClick={showDialog}
										className='bg-emerald-500 p-2 text-white font-semibold rounded hover:bg-emerald-600 active:ring active:ring-green-300 w-24 mx-2'>
										Atualizar
									</button>
									<button className='bg-red-600 p-2 text-white font-semibold rounded hover:bg-red-800 active:ring active:ring-red-300 w-24 mx-2'>
										Excluir
									</button>
								</td>
							</tr>
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
