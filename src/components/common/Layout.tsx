import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

function Layout() {
	return (
		<>
			<header>
				<h2 className={styles.h2}>
					국내 모든 임상시험 검색하고 <br></br> 온라인으로 참여하기
				</h2>
			</header>
			<Outlet />
		</>
	);
}
export default Layout;
