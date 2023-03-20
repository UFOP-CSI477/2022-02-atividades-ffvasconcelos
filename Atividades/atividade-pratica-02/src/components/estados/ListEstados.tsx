import { useEffect, useState } from "react";
import api from "../../services/api";

interface InterfaceEstado {
	id: number;
	nome: string;
	sigla: string;
	created_at: string;
	updated_at: string;
}

const ListEstados = () => {
	const [estados, setEstados] = useState<InterfaceEstado[]>([]);

	useEffect(() => {
		api.get("/estados").then((response) => {
			console.log(response.data);
			setEstados(response.data);
		});
	}, []);

	return (
		<div>
			<h2>Lista de Estados</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Sigla</th>
						<th>Criado</th>
						<th>Alterado</th>
					</tr>
				</thead>

				<tbody>
					{estados.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.nome}</td>
							<td>{item.sigla}</td>
							<td>{item.created_at}</td>
							<td>{item.updated_at}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListEstados;
