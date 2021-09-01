import React from 'react';

const MovieList = (props) => {
let data = props.movies["content-items"]?.content;

	return (
		<>
			{data && data.length>0 && data.map((movie, index) => (
				<div key={index} className='py-2 mx-2'>
					<img 
					className="border-gray-400"
					src={'images/'+movie["poster-image"]} alt='movie'></img>
					<div className="ml-3">
						<p className="text-center sm:text-left text-white">{movie.name}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;