import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import App from './App'
import ListEstados from './components/estados/ListEstados';
import ListCidades from './components/cidades/ListCidades';
import ListTipoSanguineo from './components/tipos_sanguineos/ListTipos';
import CreateTipo from './components/tipos_sanguineos/CreateTipo';
import UpdateTipo from './components/tipos_sanguineos/UpdateTipo';
import ListLocaisColeta from './components/locais_coleta/ListLocal';
import CreateLocal from './components/locais_coleta/CreateLocal';
import UpdateLocal from './components/locais_coleta/UpdateLocal';
import ListUnidades from './components/unidades/ListUnidades';
import CreateUnidade from './components/unidades/CreateUnidade';
import UpdateUnidade from './components/unidades/UpdateUnidade';
import ListPessoas from './components/pessoas/ListPessoas';
import CreatePessoa from './components/pessoas/CreatePessoa';
import UpdatePessoa from './components/pessoas/UpdatePessoa';
import ListDoacoes from './components/doacoes/ListDoacoes';
import CreateDoacao from './components/doacoes/CreateDoacao';
import UpdateDoacao from './components/doacoes/UpdateDoacao';
import ListProdutos from './components/produtos/ListProdutos';
import CreateProduto from './components/produtos/CreateProduto';
import UpdateProduto from './components/produtos/UpdateProduto';
import ListDistribuicoes from './components/distribuicoes/ListDistribuicoes';
import CreateDistribuicao from './components/distribuicoes/CreateDistribuicao';
import UpdateDistribuicao from './components/distribuicoes/UpdateDistribuicao';

const AppRoutes = () => {
  return (
		<BrowserRouter>
			<a href='/'>Voltar para o menu</a>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/estados' element={<ListEstados />} />
				<Route path='/cidades' element={<ListCidades />} />
				<Route path='/tiposSanguineos' element={<ListTipoSanguineo />} />
				<Route path='/tiposSanguineos/create' element={<CreateTipo />} />
				<Route path='/tiposSanguineos/:id' element={<UpdateTipo />} />
				<Route path='/locaisColeta' element={<ListLocaisColeta />} />
				<Route path='/locaisColeta/create' element={<CreateLocal />} />
				<Route path='/locaisColeta/:id' element={<UpdateLocal />} />
				<Route path='/unidades' element={<ListUnidades />} />
				<Route path='/unidades/create' element={<CreateUnidade />} />
				<Route path='/unidades/:id' element={<UpdateUnidade />} />
				<Route path='/pessoas' element={<ListPessoas />} />
				<Route path='/pessoas/create' element={<CreatePessoa />} />
				<Route path='/pessoas/:id' element={<UpdatePessoa />} />
				<Route path='/doacoes' element={<ListDoacoes />} />
				<Route path='/doacoes/create' element={<CreateDoacao />} />
				<Route path='/doacoes/:id' element={<UpdateDoacao />} />
				<Route path='/produtos' element={<ListProdutos />} />
				<Route path='/produtos/create' element={<CreateProduto />} />
				<Route path='/produtos/:id' element={<UpdateProduto />} />
				<Route path='/distribuicoes' element={<ListDistribuicoes />} />
				<Route path='/distribuicoes/create' element={<CreateDistribuicao />} />
				<Route path='/distribuicoes/:id' element={<UpdateDistribuicao />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes
