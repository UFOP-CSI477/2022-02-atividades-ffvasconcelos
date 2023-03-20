import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateLocal = () => {
	const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [cidade_id, setCidade_id] = useState<number>()

	const navigate = useNavigate();

	const handleNewLocal = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
      nome,
      rua, 
      numero,
      complemento,
      cidade_id
		};

		await api.post("/locaisColeta", data);
		navigate("/locaisColeta");
	};

	return (
		<div>
			<h3>Cadastro de local de coleta</h3>
			<form onSubmit={handleNewLocal}>
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
					<label htmlFor='Rua'>Rua</label>
					<input
						type='text'
						value={rua}
						placeholder='Rua'
						onChange={(e) => setRua(e.target.value)}
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

export default CreateLocal;
