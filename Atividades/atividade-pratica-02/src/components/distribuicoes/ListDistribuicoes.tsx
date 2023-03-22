import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface InterfaceDistribuicao {
	id: number;
	produto_id: number;
	unidade_id: number;
	data: string;
	created_at: string;
	updated_at: string;
}

const ListDistribuicoes = () => {
	const [distribuicoes, setDistribuicoes] = useState<InterfaceDistribuicao[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		api.get("/distribuicoes").then((response) => {
			console.log(response.data);
			setDistribuicoes(response.data);
		});
	}, []);

	const handleDelete = (id: number) => {
		api.delete(`/distribuicoes/${id}`).then((response) => {
			api.get("/distribuicoes").then((response) => {
				console.log(response.data);
				setDistribuicoes(response.data);
			});
		});
	};

	return (
		<div>
			<h2>Lista de doações</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Id da produto</th>
						<th>Id da unidade</th>
						<th>Data</th>
						<th>Criado</th>
						<th>Alterado</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{distribuicoes.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.produto_id}</td>
							<td>{item.unidade_id}</td>
							<td>{item.data}</td>
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

export default ListDistribuicoes;
