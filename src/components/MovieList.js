import React from 'react';

const MovieList = (props) => {
let data = props.movies["content-items"]?.content;

	return (
		<>
			{data && data.length>0 && data.map((movie, index) => (
				<div key={index} className='inline-block px-2 w-64 h-64'>
					<img 
					className="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"
					src={'images/'+movie["poster-image"]} alt='movie' className="w-full h-64"></img>
					<div className="p-4">
						<p className="font-medium text-lg">{movie.name}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;