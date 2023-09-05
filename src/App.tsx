import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants/constatns';
import MainPage from './pages/Mainpage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path={ROUTES.MAIN} element={<MainPage />}></Route>
			<Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
