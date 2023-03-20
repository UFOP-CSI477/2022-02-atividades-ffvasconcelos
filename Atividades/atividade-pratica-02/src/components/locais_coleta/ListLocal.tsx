import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface InterfaceLocaisColeta {
	id: number;
	nome: string;
  rua: string;
  numero: string;
  complemento: string;
  cidade_id: number;
	created_at: string;
	updated_at: string;
}

const ListLocaisColeta = () => {
	const [locais, setLocais] = useState<InterfaceLocaisColeta[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		api.get("/locaisColeta").then((response) => {
			console.log(response.data);
			setLocais(response.data);
		});
	}, []);

	const handleDelete = (id: number) => {
		api.delete(`/locaisColeta/${id}`).then((response) => {
			api.get("/locaisColeta").then((response) => {
				console.log(response.data);
				setLocais(response.data);
			});
		});
	};

	return (
		<div>
			<h2>Lista de locais de coleta</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Rua</th>
						<th>Numero</th>
						<th>Complemento</th>
						<th>Id da cidade</th>
						<th>Criado</th>
						<th>Alterado</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{locais.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.nome}</td>
							<td>{item.rua}</td>
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

export default ListLocaisColeta;
