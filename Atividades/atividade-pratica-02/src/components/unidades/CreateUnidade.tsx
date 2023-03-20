import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateUnidade = () => {
	const [nome, setNome] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [cidade_id, setCidade_id] = useState<number>();

	const navigate = useNavigate();

	const handleNewUnidade = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			nome,
			numero,
			complemento,
			cidade_id,
		};

		await api.post("/unidades", data);
		navigate("/unidades");
	};

	return (
		<div>
			<h3>Cadastro de unidades</h3>
			<form onSubmit={handleNewUnidade}>
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

				<button type='submit'>Cadastrar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default CreateUnidade;
