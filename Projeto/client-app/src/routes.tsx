import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import TopMenu from "./components/topMenu/TopMenu";
import Homepage from "./components/homepage/Homepage";
import Unidades from "./components/unidades/Unidades";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<TopMenu />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/teste' element={<h1>Teste</h1>} />
				<Route path='/unidades' element={<Unidades />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
