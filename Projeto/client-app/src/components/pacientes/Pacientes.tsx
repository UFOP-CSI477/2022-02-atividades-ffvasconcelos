import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Pacientes = () => {
	const [name, setName] = useState('')
	const [doc, setDoc] = useState('')
	const [phone, setPhone] = useState('')
	const [birth, setBirth] = useState('')

	const [disableSave, setDisableSave] = useState(false)

	const navigate = useNavigate()

	useEffect(() => {
		if (name !== "" && doc !== "" && phone !== "" && birth !== "" && (new Date(birth) < (new Date()))) {
			setDisableSave(false);
		} else {
			setDisableSave(true);
		}
	}, [name, doc, phone, birth]);

	const handleSave = async () => {
		const data = {
			name,
			doc,
			phone,
			birth
		};
		try {
			await api.post("/paciente", data);
			navigate("/");
		} catch (error) {
			setDisableSave(true);
		}
	};

	return (
		<div className='grid justify-items-left justify-center m-10'>
			<div className='m-5 text-xl'>Registrar novo paciente:</div>
			<div className='grid justify-items-left justify-center'>
				<div>
					<p>Nome:</p>
				</div>
				<input
					type='text'
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					defaultValue={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<div>
					<p>Documento do paciente:</p>
				</div>
				<input
					type='text'
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					defaultValue={doc}
					onChange={(e) => setDoc(e.target.value)}
				/>
				<div>
					<p>Telefone para contato:</p>
				</div>
				<input
					type='text'
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					defaultValue={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<div>
					<p>Data de nascimento:</p>
				</div>
				<input
					type='date'
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					onChange={(e) => setBirth(e.target.value)}
				/>

				<div className='justify-self-end'>
					<button
						disabled={disableSave}
						className='bg-emerald-500 p-2 text-white font-semibold rounded hover:bg-emerald-600 active:ring active:ring-green-300 mt-4 disabled:opacity-75 disabled:hover:bg-slate-500 disabled:bg-slate-500 disabled:active:ring-0'
						onClick={handleSave}>
						Salvar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pacientes;
