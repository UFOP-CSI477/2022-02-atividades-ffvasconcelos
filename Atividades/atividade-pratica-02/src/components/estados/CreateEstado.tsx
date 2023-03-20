import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateEstado = () => {
	const [nome, setNome] = useState("");
	const [sigla, setSigla] = useState("");

	const navigate = useNavigate();

	const handleNewEstado = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			nome,
			sigla,
		};

		await api.post("/estados/teste", data);
		navigate("/estados");
	};

	return (
		<div>
			<h3>Cadastro de estados</h3>
			<form onSubmit={handleNewEstado}>
				<div>
					<label htmlFor='nome'>Nome</label>
					<input
						type='text'
						name='nome'
						id='nome'
						value={nome}
						placeholder='Nome do estado'
						onChange={(e) => setNome(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor='sigla'>Sigla</label>
					<input
						type='text'
						name='Sigla'
						id='Sigla'
						value={sigla}
						placeholder='Sigla do estado'
						onChange={(e) => setSigla(e.target.value)}
					/>
				</div>

				<button type='submit'>Cadastrar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default CreateEstado;
