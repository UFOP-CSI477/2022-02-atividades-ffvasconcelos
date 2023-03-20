import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEstado = () => {
	const [nome, setNome] = useState("");
  const [sigla, setSigla] = useState("");
  
  const { id } = useParams()
  
  useEffect(() => {
    api.get(`/estados/${id}`).then(response => {
      console.log(response.data)
      setNome(response.data[0].nome);
			setSigla(response.data[0].sigla);
    })
  }, [id])

	const navigate = useNavigate();

	const handleNewEstado = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			nome,
			sigla,
		};

		await api.put("/estados/teste", data);
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

export default UpdateEstado;
