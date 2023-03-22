import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateDistribuicao = () => {
	const [produto_id, setProduto_id] = useState<number>();
	const [unidade_id, setUnidade_id] = useState<number>();
	const [data, setData] = useState("");

	const { id } = useParams();

	useEffect(() => {
		api.get(`/distribuicoes/${id}`).then((response) => {
			console.log(response.data);
			setProduto_id(response.data[0].produto_id);
			setUnidade_id(response.data[0].unidade_id);
			setData(response.data[0].data);
		});
	}, [id]);

	const navigate = useNavigate();

	const handleUpdateLocal = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const distributionData = {
			produto_id,
			unidade_id,
			data,
		};

		await api.put(`/distribuicoes/${id}`, distributionData);
		navigate("/distribuicoes");
	};

	return (
		<div>
			<h3>Cadastro de distribuição</h3>
			<form onSubmit={handleUpdateLocal}>
				<div>
					<label htmlFor='produto_id'>Id do produto</label>
					<input
						type='number'
						value={produto_id}
						placeholder='Id do produto'
						onChange={(e) => setProduto_id(e.target.valueAsNumber)}
					/>
				</div>

				<div>
					<label htmlFor='unidade_id'>Id da unidade</label>
					<input
						type='number'
						value={unidade_id}
						placeholder='Id da unidade'
						onChange={(e) => setUnidade_id(e.target.valueAsNumber)}
					/>
				</div>

				<div>
					<label htmlFor='data'>Data</label>
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

export default UpdateDistribuicao;
