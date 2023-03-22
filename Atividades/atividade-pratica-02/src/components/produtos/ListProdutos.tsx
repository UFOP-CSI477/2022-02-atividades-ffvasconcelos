import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface InterfaceProduto {
	id: number;
	etiqueta: string;
	doacao_id: string;
	validade: string;
	created_at: string;
	updated_at: string;
}

const ListProdutos = () => {
	const [produtos, setProdutos] = useState<InterfaceProduto[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		api.get("/produtos").then((response) => {
			console.log(response.data);
			setProdutos(response.data);
		});
	}, []);

	const handleDelete = (id: number) => {
		api.delete(`/produtos/${id}`).then((response) => {
			api.get("/produtos").then((response) => {
				console.log(response.data);
				setProdutos(response.data);
			});
		});
	};

	return (
		<div>
			<h2>Lista de produtos</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Etiqueta</th>
						<th>Id da doação</th>
						<th>Validade</th>
						<th>Criado</th>
						<th>Alterado</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{produtos.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.etiqueta}</td>
							<td>{item.doacao_id}</td>
							<td>{item.validade}</td>
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

export default ListProdutos;
