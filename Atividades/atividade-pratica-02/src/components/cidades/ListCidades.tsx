import { useEffect, useState } from "react";
import api from "../../services/api";

interface InterfaceEstado {
  nome: string
  estado_id: number,
  id: number
	created_at: string;
	updated_at: string;
}

const ListCidades = () => {
  const [cidades, setCidades] = useState<InterfaceEstado[]>([]);

	useEffect(() => {
		api.get("/cidades").then((response) => {
			console.log(response.data);
			setCidades(response.data);
		});
	}, []);

	const handleDelete = async () => {
		try {
      await api.delete("/cidades");
      
			api.get("/cidades").then((response) => {
				console.log(response.data);
				setCidades(response.data);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleCreate = async () => {
		try {
      await api.post("/cidades");
      
			api.get("/cidades").then((response) => {
				console.log(response.data);
				setCidades(response.data);
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
      <h2>Lista de Cidades</h2>

			<table>
				<thead>
					<tr>
						<th>Id</th>
            <th>Nome</th>
            <th>Id estado</th>
						<th>Criado</th>
            <th>Alterado</th>
					</tr>
				</thead>

				<tbody>
					{cidades.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.estado_id}</td>
							<td>{item.created_at}</td>
							<td>{item.updated_at}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListCidades
