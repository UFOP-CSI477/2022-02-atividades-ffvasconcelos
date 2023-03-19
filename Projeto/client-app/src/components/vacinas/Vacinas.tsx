import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Vacinas = () => {
	const [name, setName] = useState<string>("");
	const [code, setCode] = useState<string>("");

	const [disableSave, setDisableSave] = useState<boolean>(true);

	const navigate = useNavigate();

	useEffect(() => {
		if (name !== "" && code !== "") {
			setDisableSave(false);
		} else {
			setDisableSave(true);
		}
	}, [name, code]);

	const handleSave = async () => {
		const data = {
			name,
			code,
		};
		try {
			await api.post("/vacina", data);
			navigate("/");
		} catch (error) { 
			setDisableSave(true);
		}
	};

	return (
		<div className='grid justify-items-left justify-center m-10'>
			<div className='m-5 text-xl'>Registrar nova vacina:</div>
			<div className='grid justify-items-left justify-center'>
				<div>
					<p>Nome:</p>
				</div>
				<input
					type='text'
					name='name'
					id='name'
					defaultValue={name}
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					onChange={(e) => setName(e.target.value)}
				/>
				<div>
					<p>Código:</p>
				</div>
				<input
					type='text'
					name='code'
					id='code'
					defaultValue={code}
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					onChange={(e) => setCode(e.target.value)}
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

export default Vacinas;
