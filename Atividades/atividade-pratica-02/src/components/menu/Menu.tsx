import { Link } from 'react-router-dom'

const Menu = () => {
  return (
		<div>
			<h2>Menu</h2>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/estados'>Lista de estados</Link>
				</li>
				<li>
					<Link to='/cidades'>Lista de cidades</Link>
				</li>
				<li>
					<Link to='/tiposSanguineos'>Lista de tipos sanguíneos</Link>
				</li>
				<li>
					<Link to='/locaisColeta'>Lista de locais de coleta</Link>
				</li>
				<li>
					<Link to='/unidades'>Lista de unidades</Link>
				</li>
				<li>
					<Link to='/pessoas'>Lista de pessoas</Link>
				</li>
				<li>
					<Link to='/doacoes'>Lista de doações</Link>
				</li>
				<li>
					<Link to='/produtos'>Lista de produtos</Link>
				</li>
				<li>
					<Link to='/distribuicoes'>Lista de distribuições</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu