import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
		<div>
			<div className='bg-emerald-500 pb-6'>
				<div className='columns-4 pl-10 pt-2'>
					<div className='pt-2'>
						<Link to='/' className='text-white font-extrabold text-4xl'>VAX</Link>
						<h2 className='text-white font-extrabold text-l'>
							Sistema unificado de registro de vacinas
						</h2>
					</div>
					<img
						className='h-20 w-20'
						src='./src/assets/vaccine_icon.png'
						alt='Logo do vax'
					/>
				</div>
			</div>

			<div>
				<div className='bg-emerald-600 pt-2 pb-2'>
					<Link
						to='/teste'
						className='pl-3 p-3 border-solid border-r-2 border-r-green-200 text-white pt-2 pb-2 justify-center'>
						Aplicar vacina
					</Link>
					<Link
						to='/unidades'
						className='pl-3 p-3 border-solid border-r-2 border-r-green-200 text-white pt-2 pb-2 justify-center'>
						Visualizar unidades
					</Link>
					<Link
						to='/teste'
						className='pl-3 p-3 border-solid border-r-2 border-r-green-200 text-white pt-2 pb-2 justify-center'>
						Registrar paciente
					</Link>
					<Link
						to='/teste'
						className='pl-3 p-3 border-solid border-r-2 border-r-green-200 text-white pt-2 pb-2 justify-center'>
						Registrar vacina
					</Link>
				</div>
			</div>
		</div>
	);
}

export default TopMenu