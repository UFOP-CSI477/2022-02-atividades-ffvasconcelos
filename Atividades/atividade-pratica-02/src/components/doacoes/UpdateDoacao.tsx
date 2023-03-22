import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateDoacao = () => {
	const [pessoa_id, setPessoa_id] = useState<number>();
	const [local_id, setLocal_id] = useState<number>();
	const [data, setData] = useState("");

	const { id } = useParams();

	useEffect(() => {
		api.get(`/doacoes/${id}`).then((response) => {
			console.log(response.data);
			setPessoa_id(response.data[0].pessoa_id);
			setLocal_id(response.data[0].local_id);
			setData(response.data[0].data);
		});
	}, [id]);

	const navigate = useNavigate();

	const handleUpdateLocal = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const donationData = {
			pessoa_id,
			local_id,
			data,
		};

		await api.put(`/doacoes/${id}`, donationData);
		navigate("/doacoes");
	};

	return (
		<div>
			<h3>Cadastro de local de coleta</h3>
			<form onSubmit={handleUpdateLocal}>
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

				<button type='submit'>Atualizar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default UpdateDoacao;
