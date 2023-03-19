import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Aplicacao = () => {
	const [patient, setPatient] = useState(false);
	const [unity, setUnity] = useState(false);
	const [vaccine, setVaccine] = useState(false);

	const [doc, setDoc] = useState("");
	const [unityId, setUnityId] = useState("");
	const [code, setCode] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		api
			.get(`/aplicacao/verify?doc=${doc}&code=${code}&unityId=${unityId}`)
			.then((response) => {
				setUnity(response.data.unity);
				setPatient(response.data.patient);
				setVaccine(response.data.vaccine);
			});
	}, [doc, unityId, code]);

	const handleSave = async () => {
		const data = {
			doc,
			unityId,
			code,
		};

		try {
			await api.post("aplicacao/newAplication", data);
			navigate("/");
		} catch (error) {
			setUnity(false);
			setPatient(false);
			setVaccine(false);
		}
	};

	const VerificationComponent = () => {
		return (
			<div className=''>
				<p>
					Paciente:
					{patient ? (
						<p className='text-green-700'> OK!</p>
					) : (
						<p className='text-red-600'> Erro!</p>
					)}
				</p>
				<p>
					Unidade:
					{unity ? (
						<p className='text-green-700'> OK!</p>
					) : (
						<p className='text-red-600'> Erro!</p>
					)}
				</p>
				<p>
					Vacina:
					{vaccine ? (
						<p className='text-green-700'> OK!</p>
					) : (
						<p className='text-red-600'> Erro!</p>
					)}
				</p>
			</div>
		);
	};

	return (
		<div className='grid justify-items-left justify-center m-10'>
			<div className='m-5 text-xl'>Registrar aplicação:</div>
			<div className='grid justify-items-left justify-center'>
				<div>
					<p>Documento do paciente:</p>
				</div>
				<input
					type='text'
					defaultValue={doc}
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					onChange={(e) => setDoc(e.target.value)}
				/>
				<div>
					<p>Id da unidade:</p>
				</div>
				<input
					type='text'
					defaultValue={unityId}
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					onChange={(e) => setUnityId(e.target.value)}
				/>
				<div>
					<p>Código da vacina:</p>
				</div>
				<input
					type='text'
					defaultValue={code}
					className='border-solid border border-slate-400 rounded-lg my-1 px-2'
					onChange={(e) => setCode(e.target.value)}
				/>

				<div className='justify-self-end'>
					<button
						disabled={!(patient && vaccine && unity)}
						className='bg-emerald-500 p-2 text-white font-semibold rounded hover:bg-emerald-600 active:ring active:ring-green-300 mt-4 disabled:opacity-75 disabled:hover:bg-slate-500 disabled:bg-slate-500 disabled:active:ring-0'
						onClick={handleSave}
					>
						Salvar
					</button>
				</div>

				<div>
					<VerificationComponent />
				</div>
			</div>
		</div>
	);
};

export default Aplicacao;
