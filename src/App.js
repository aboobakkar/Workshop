import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getData= async () => {
		const response = await fetch('CONTENTLISTINGPAGE-PAGE1.json');

		const data = await response.json();
		if(data.page) {
			setMovies(data.page)
		}
	  }

	useEffect(()=>{
		getData()
	  },[])

	return (
		<div className='container-fluid bg-black'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading={movies.title} />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="flex flex-wrap grid grid-cols-3 space-x-4">
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
	);
};

export default App;