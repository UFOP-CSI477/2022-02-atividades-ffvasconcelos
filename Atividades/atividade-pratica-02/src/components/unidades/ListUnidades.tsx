import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface InterfaceUnidade {
	id: number;
	nome: string;
	numero: string;
	complemento: string;
	cidade_id: number;
	created_at: string;
	updated_at: string;
}

const ListUnidades = () => {
	const [unidades, setUnidades] = useState<InterfaceUnidade[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		api.get("/unidades").then((response) => {
			console.log(response.data);
			setUnidades(response.data);
		});
	}, []);

	const handleDelete = (id: number) => {
		api.delete(`/unidades/${id}`).then((response) => {
			api.get("/unidades").then((response) => {
				console.log(response.data);
				setUnidades(response.data);
			});
		});
	};

	return (
		<div>
			<h2>Lista de unidades</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Numero</th>
						<th>Complemento</th>
						<th>Id da cidade</th>
						<th>Criado</th>
						<th>Alterado</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{unidades.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.nome}</td>
							<td>{item.numero}</td>
							<td>{item.complemento}</td>
							<td>{item.cidade_id}</td>
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

export default ListUnidades;
