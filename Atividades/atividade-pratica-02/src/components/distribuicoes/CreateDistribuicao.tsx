import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateDistribuicao = () => {
	const [produto_id, setProduto_id] = useState<number>();
	const [unidade_id, setUnidade_id] = useState<number>();
	const [data, setData] = useState("");

	const navigate = useNavigate();

	const handleNewDistribuicao = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const distributionData = {
			produto_id,
			unidade_id,
			data,
		};

		await api.post("/distribuicoes", [distributionData]);
		navigate("/distribuicoes");
	};

	return (
		<div>
			<h3>Cadastro de distribuição</h3>
			<form onSubmit={handleNewDistribuicao}>
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

				<button type='submit'>Cadastrar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default CreateDistribuicao;
