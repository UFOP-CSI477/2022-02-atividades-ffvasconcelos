import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUnidade = () => {
	const [nome, setNome] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [cidade_id, setCidade_id] = useState<number>();

	const { id } = useParams();

	useEffect(() => {
		api.get(`/unidades/${id}`).then((response) => {
			console.log(response.data);
			setNome(response.data[0].nome);
			setNumero(response.data[0].numero);
			setComplemento(response.data[0].complemento);
			setCidade_id(response.data[0].cidade_id);
		});
	}, [id]);

	const navigate = useNavigate();

	const handleUpdateUnidade = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			nome,
			numero,
			complemento,
			cidade_id,
		};

		await api.put(`/unidades/${id}`, data);
		navigate("/unidades");
	};

	return (
		<div>
			<h3>Atualização de unidade</h3>
			<form onSubmit={handleUpdateUnidade}>
				<div>
					<label htmlFor='Nome'>Nome</label>
					<input
						type='text'
						value={nome}
						placeholder='Nome'
						onChange={(e) => setNome(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor='Numero'>Número</label>
					<input
						type='text'
						value={numero}
						placeholder='Numero'
						onChange={(e) => setNumero(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor='Complemento'>Complemento</label>
					<input
						type='text'
						value={complemento}
						placeholder='Complemento'
						onChange={(e) => setComplemento(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor='cidade_id'>Id da cidade</label>
					<input
						type='number'
						value={cidade_id}
						placeholder='Id da cidade'
						onChange={(e) => setCidade_id(e.target.valueAsNumber)}
					/>
				</div>

				<button type='submit'>Atualizar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default UpdateUnidade;
