import React from 'react';

import styles from './RecommendList.module.scss';

export const RecommendList = ({ ...props }: any) => {
	return (
		<div>
			<div>추천검색어</div>
			<ul>
				{!props.recommendWord.length ? (
					<div>검색어 없음</div>
				) : (
					props.recommendWord.map((word: any, index: any) => (
						<li
							className={props.currentHighlight === index ? `${styles.highlight}` : ''}
							key={word.sickCd}
							onClick={() => {
								props.setSearchWord(word.sickNm);
							}}
						>
							{word.sickNm}
						</li>
					))
				)}
			</ul>
		</div>
	);
};
