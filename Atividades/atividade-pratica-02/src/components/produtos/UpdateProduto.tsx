import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduto = () => {
	const [etiqueta, setEtiqueta] = useState("");
	const [validade, setValidade] = useState("");
	const [doacao_id, setDoacao_id] = useState<number>();

	const { id } = useParams();

	useEffect(() => {
		api.get(`/produtos/${id}`).then((response) => {
			console.log(response.data);
			setEtiqueta(response.data[0].etiqueta);
			setValidade(response.data[0].validade);
			setDoacao_id(response.data[0].setDoacao_id);
		});
	}, [id]);

	const navigate = useNavigate();

	const handleUpdateLocal = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
      etiqueta,
      validade,
      doacao_id
		};

		await api.put(`/produtos/${id}`, data);
		navigate("/produtos");
	};

	return (
		<div>
			<h3>Atualização de produto</h3>
			<form onSubmit={handleUpdateLocal}>
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

				<button type='submit'>Atualizar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default UpdateProduto;
