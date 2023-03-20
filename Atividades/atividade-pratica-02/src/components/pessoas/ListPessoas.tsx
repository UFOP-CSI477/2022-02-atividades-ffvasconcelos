import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface InterfacePessoa {
	id: number;
	nome: string;
	rua: string;
	numero: string;
  complemento: string;
  documento: string;
  cidade_id: number;
  tipo_id: number;
	created_at: string;
	updated_at: string;
}

const ListPessoas = () => {
	const [pessoas, setPessoas] = useState<InterfacePessoa[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		api.get("/pessoas").then((response) => {
			console.log(response.data);
			setPessoas(response.data);
		});
	}, []);

	const handleDelete = (id: number) => {
		api.delete(`/pessoas/${id}`).then((response) => {
			api.get("/pessoas").then((response) => {
				console.log(response.data);
				setPessoas(response.data);
			});
		});
	};

	return (
		<div>
			<h2>Lista de pessoas</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Rua</th>
						<th>Numero</th>
						<th>Complemento</th>
						<th>Documento</th>
						<th>Id da cidade</th>
						<th>Id do tipo</th>
						<th>Criado</th>
						<th>Alterado</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{pessoas.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.nome}</td>
							<td>{item.rua}</td>
							<td>{item.numero}</td>
							<td>{item.complemento}</td>
							<td>{item.documento}</td>
							<td>{item.cidade_id}</td>
							<td>{item.tipo_id}</td>
							<td>{item.created_at}</td>
							<td>{item.updated_at}</td>
							<td>
								<button onClick={() => navigate(item.id.toString())}>
									Update
								</button>
								<button onClick={() => handleDelete(item.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<button onClick={() => navigate("create")}>Create</button>
		</div>
	);
};

export default ListPessoas;
