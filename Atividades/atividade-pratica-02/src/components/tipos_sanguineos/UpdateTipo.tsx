import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTipo = () => {
	const [tipo, setTipo] = useState("");
	const [fator, setFator] = useState("");

	const { id } = useParams();

	useEffect(() => {
		api.get(`/tiposSanguineos/${id}`).then((response) => {
			console.log(response.data);
			setTipo(response.data[0].tipo);
			setFator(response.data[0].fator);
		});
	}, [id]);

	const navigate = useNavigate();

	const handleUpdateTipo = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			tipo,
			fator,
		};

		await api.put(`/tiposSanguineos/${id}`, data);
		navigate("/tiposSanguineos");
	};

	return (
		<div>
			<h3>Atualização de tipos sanguineos</h3>
			<form onSubmit={handleUpdateTipo}>
				<div>
					<label htmlFor='nome'>Nome</label>
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

				<button type='submit'>Atualizar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default UpdateTipo;
