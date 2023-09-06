import React, { useEffect, useState } from 'react';

import searchApi from '../../api/searchApi';
import useDebounce from '../../hooks/useDebounce';

interface ISickJSON {
	sickCd: string;
	sickNm: string;
}

function MainPage() {
	const [searchWord, setSearchWord] = useState<string>('');
	const [recommendWord, setRecommendWord] = useState<ISickJSON[]>([]);
	const debouncedWord = useDebounce({ value: searchWord, delay: 500 });

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWord(e.target.value);
	};

	useEffect(() => {
		const axiosSick = async () => {
			const data = await searchApi.getSearch(debouncedWord);
			setRecommendWord(data);
			console.info('calling api');
		};
		if (!debouncedWord) {
			return setRecommendWord([]);
		}
		axiosSick();
	}, [debouncedWord]);

	return (
		<>
			<form>
				<input
					required
					type="text"
					placeholder="질환명을 입력해 주세요"
					onChange={onChangeSearch}
					value={searchWord}
				/>
				<button type="submit">검색</button>
			</form>
			<div>추천검색어</div>
			<ul>
				{!recommendWord.length ? (
					<div>검색어 없음</div>
				) : (
					recommendWord.map((word: ISickJSON) => <li key={word.sickCd}>{word.sickNm}</li>)
				)}
			</ul>
		</>
	);
}

export default MainPage;
