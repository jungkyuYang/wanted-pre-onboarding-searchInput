import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants/constatns';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/common/Layout';
import './App.scss';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={ROUTES.MAIN} element={<MainPage />} />
			</Route>
			<Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
