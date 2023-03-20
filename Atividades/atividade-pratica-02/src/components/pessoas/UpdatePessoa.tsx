import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePessoa = () => {
	const [nome, setNome] = useState("");
	const [rua, setRua] = useState("");
	const [numero, setNumero] = useState("");
	const [complemento, setComplemento] = useState("");
	const [documento, setDocumento] = useState("");
	const [cidade_id, setCidade_id] = useState<number>();
  const [tipo_id, setTipo_id] = useState<number>();
  
	const { id } = useParams();

	useEffect(() => {
		api.get(`/pessoas/${id}`).then((response) => {
			console.log(response.data);
			setNome(response.data[0].nome);
			setRua(response.data[0].rua);
			setNumero(response.data[0].numero);
			setComplemento(response.data[0].complemento);
			setDocumento(response.data[0].documento);
      setCidade_id(response.data[0].cidade_id);
      setTipo_id(response.data[0].tipo_id);
		});
	}, [id]);

	const navigate = useNavigate();

	const handleUpdatePessoa = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			nome,
			rua,
			numero,
      complemento,
      documento,
      cidade_id,
      tipo_id
		};

		await api.put(`/pessoas/${id}`, data);
		navigate("/pessoas");
	};

	return (
		<div>
			<h3>Atualização de pessoa:</h3>
			<form onSubmit={handleUpdatePessoa}>
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
					<label htmlFor='Documento'>Documento</label>
					<input
						type='text'
						value={documento}
						placeholder='Documento'
						onChange={(e) => setDocumento(e.target.value)}
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

				<div>
					<label htmlFor='tipo_id'>Id da tipo</label>
					<input
						type='number'
						value={tipo_id}
						placeholder='Id da cidade'
						onChange={(e) => setTipo_id(e.target.valueAsNumber)}
					/>
				</div>

				<button type='submit'>Atualizar</button>
				<button type='reset'>Limpar</button>
			</form>
		</div>
	);
};

export default UpdatePessoa;
