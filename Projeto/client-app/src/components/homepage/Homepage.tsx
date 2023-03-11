import { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {

	return (
		<div className='grid justify-items-stretch justify-self-center mt-16'>

			<div className='justify-self-center'>
				<h1 className='text-2xl font-bold '>Bem vindo ao Vax!</h1>
			</div>
			<div className='justify-self-center'>
				<h2 className='text-xl font-semibold'>
					O seu gerenciador online de aplicações de vacinas
				</h2>
			</div>
			<div className='mt-10 justify-self-center'>
				<h3 className='text-l'>Escolha uma opção para começar:</h3>
			</div>
			<div className='m-10 justify-self-center'>
				<ul className='list-disc'>
					<li>
						<Link to='/teste' className='hover:text-cyan-900'>
							Aplicar vacina
						</Link>
					</li>
					<li>
						<Link to='/unidades' className='hover:text-cyan-900'>
							Visualizar unidades
						</Link>
					</li>
					<li>
						<Link to='/teste' className='hover:text-cyan-900'>
							Registrar paciente
						</Link>
					</li>
					<li>
						<Link to='/teste' className='hover:text-cyan-900'>
							Registrar vacina
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Homepage