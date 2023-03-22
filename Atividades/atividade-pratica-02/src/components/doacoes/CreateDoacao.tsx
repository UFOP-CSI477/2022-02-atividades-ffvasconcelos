import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateDoacao = () => {
	const [pessoa_id, setPessoa_id] = useState<number>();
	const [local_id, setLocal_id] = useState<number>();
	const [data, setData] = useState("");

	const navigate = useNavigate();

	const handleNewLocal = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const donationData = {
			pessoa_id,
			local_id,
			data,
		};

		await api.post("/doacoes", [donationData]);
		navigate("/doacoes");
	};

	return (
		<div>
			<h3>Cadastro de doação</h3>
			<form onSubmit={handleNewLocal}>
				<div>
					<label htmlFor='pessoa_id'>Id da pessoa</label>
					<input
						type='number'
						value={pessoa_id}
						placeholder='Id da pessoa'
						onChange={(e) => setPessoa_id(e.target.valueAsNumber)}
					/>
				</div>

				<div>
					<label htmlFor='local_id'>Id do local</label>
					<input
						type='number'
						value={local_id}
						placeholder='Id do local'
						onChange={(e) => setLocal_id(e.target.valueAsNumber)}
					/>
				</div>

				<div>
					<label htmlFor='local_id'>Data</label>
					<input
						type='date'
						value={data}
						placeholder='Data'
						onChange={(e) => setData(e.target.value)}
					/>
				</div>

				<button type='submit'>Cadastrar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default CreateDoacao;
