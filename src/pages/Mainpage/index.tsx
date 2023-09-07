import React, { useEffect, useState } from 'react';

import styles from './MainPage.module.scss';
import searchApi from '../../api/searchApi';
import useDebounce from '../../hooks/useDebounce';

interface ISickJSON {
	sickCd: string;
	sickNm: string;
}

function MainPage() {
	const [searchWord, setSearchWord] = useState<any>('');
	const [recommendWord, setRecommendWord] = useState<ISickJSON[]>([]);
	const debouncedWord = useDebounce({ value: searchWord, delay: 500 });
	const [currentHighlight, setCurrentHighlight] = useState(-1);

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWord(e.target.value);
		setCurrentHighlight(-1);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === 'ArrowDown' && currentHighlight < recommendWord.length - 1) {
			setCurrentHighlight(prevHighlight => prevHighlight + 1);
		} else if (e.key === 'ArrowUp' && currentHighlight > 0) {
			setCurrentHighlight(prevHighlight => prevHighlight - 1);
		} else if (e.key === 'Enter' && currentHighlight !== -1) {
			setSearchWord(recommendWord[currentHighlight].sickNm);
		}
	};

	useEffect(() => {
		const axiosSick = async () => {
			const data = await searchApi.getSearch(debouncedWord);
			setRecommendWord(data);
		};
		if (!debouncedWord) {
			return setRecommendWord([]);
		}
		axiosSick();
	}, [debouncedWord]);

	return (
		<>
			<div>
				<input
					required
					type="text"
					placeholder="질환명을 입력해 주세요"
					onChange={onChangeSearch}
					value={searchWord}
					onKeyDown={handleKeyDown}
				/>
				<button type="submit">검색</button>
				<div>추천검색어</div>
				<ul>
					{!recommendWord.length ? (
						<div>검색어 없음</div>
					) : (
						recommendWord.map((word: ISickJSON, index) => (
							<li
								className={currentHighlight === index ? `${styles.highlight}` : ''}
								key={word.sickCd}
								onClick={() => {
									setSearchWord(word.sickNm);
								}}
							>
								{word.sickNm}
							</li>
						))
					)}
				</ul>
			</div>
		</>
	);
}

export default MainPage;
