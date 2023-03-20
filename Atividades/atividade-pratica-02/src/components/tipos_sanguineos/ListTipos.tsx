import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface InterfaceTipoSanguineo {
	id: number;
	tipo: string;
	fator: string;
	created_at: string;
	updated_at: string;
}

const ListTipoSanguineo = () => {
  const [tipos, setTipos] = useState<InterfaceTipoSanguineo[]>([]);
  
  const navigate = useNavigate()

	useEffect(() => {
		api.get("/tiposSanguineos").then((response) => {
			console.log(response.data);
			setTipos(response.data);
		});
  }, []);
  
  const handleDelete = (id: number) => {
    api.delete(`/tiposSanguineos/${id}`).then(response => {
      api.get("/tiposSanguineos").then((response) => {
				console.log(response.data);
				setTipos(response.data);
			});
    })
  }

	return (
		<div>
			<h2>Lista de tipos sanguíneos:</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Sigla</th>
						<th>Criado</th>
            <th>Alterado</th>
            <th></th>
					</tr>
				</thead>

				<tbody>
					{tipos.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.tipo}</td>
							<td>{item.fator}</td>
							<td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>
                <button onClick={() => navigate(item.id.toString())}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
						</tr>
					))}
				</tbody>
      </table>
      
      <button onClick={() => navigate('create')}>Create</button>
		</div>
	);
};

export default ListTipoSanguineo;
