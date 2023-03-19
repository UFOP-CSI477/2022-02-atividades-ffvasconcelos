import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import TopMenu from "./components/topMenu/TopMenu";
import Homepage from "./components/homepage/Homepage";
import Unidades from "./components/unidades/Unidades";
import Aplicacoes from "./components/aplicações/Aplicacoes";
import Pacientes from "./components/pacientes/Pacientes";
import Vacinas from "./components/vacinas/Vacinas"

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<TopMenu />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/vacinas' element={<Vacinas />} />
				<Route path='/aplicacao' element={<Aplicacoes />} />
				<Route path='/unidades' element={<Unidades />} />
				<Route path='/pacientes' element={<Pacientes />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
