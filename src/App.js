import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './tailwind.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	// const getMovieRequest = async (searchValue) => {
	// 	const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();

	// 	if (responseJson.Search) {
	// 		setMovies(responseJson.Search);
	// 	}
	// };

	const getData= async () => {
		const response = await fetch('CONTENTLISTINGPAGE-PAGE1.json');

		const data = await response.json();
		if(data.page) {
			setMovies(data.page)
		}
	  }

	// useEffect(() => {
	// 	getMovieRequest(searchValue);
	// }, [searchValue]);

	useEffect(()=>{
		getData()
	  },[])

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading={movies.title} />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="card-list">
				<MovieList
					movies={movies}
				/>
			</div>
		</div>
	);
};

export default App;