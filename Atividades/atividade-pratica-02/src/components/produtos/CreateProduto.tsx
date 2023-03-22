import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateProduto = () => {
	const [etiqueta, setEtiqueta] = useState("");
	const [validade, setValidade] = useState("");
	const [doacao_id, setDoacao_id] = useState<number>();

	const navigate = useNavigate();

	const handleNewLocal = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
      etiqueta,
      validade,
      doacao_id
		};

		await api.post("/produtos", [data]);
		navigate("/produtos");
	};

	return (
		<div>
			<h3>Cadastro de produtos</h3>
			<form onSubmit={handleNewLocal}>
				<div>
					<label htmlFor='Etiqueta'>Etiqueta</label>
					<input
						type='text'
						value={etiqueta}
						placeholder='Etiqueta'
						onChange={(e) => setEtiqueta(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor='Validade'>Validade</label>
					<input
						type='date'
						value={validade}
						placeholder='Validade'
						onChange={(e) => setValidade(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor='doacao_id'>Id da doação</label>
					<input
						type='number'
						value={doacao_id}
						placeholder='Id da doação'
						onChange={(e) => setDoacao_id(e.target.valueAsNumber)}
					/>
				</div>

				<button type='submit'>Cadastrar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default CreateProduto;
