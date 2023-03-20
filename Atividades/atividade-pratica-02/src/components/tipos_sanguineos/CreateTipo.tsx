import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateTipo = () => {
	const [tipo, setTipo] = useState("");
	const [fator, setFator] = useState("");

	const navigate = useNavigate();

	const handleNewTipo = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			fator,
			tipo,
		};

		await api.post("/tiposSanguineos", data);
		navigate("/tiposSanguineos");
	};

	return (
		<div>
			<h3>Cadastro de tipo sanguíneo</h3>
			<form onSubmit={handleNewTipo}>
				<div>
					<label htmlFor='Tipo'>Tipo</label>
					<input
						type='text'
						name='Tipo'
						id='Tipo'
						value={tipo}
						placeholder='Tipo sanguíneo'
						onChange={(e) => setTipo(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor='Fator'>Fator</label>
					<input
						type='text'
						name='Fator'
						id='Fator'
						value={fator}
						placeholder='Fator'
						onChange={(e) => setFator(e.target.value)}
					/>
				</div>

				<button type='submit'>Cadastrar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default CreateTipo;
