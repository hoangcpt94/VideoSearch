import React from 'react';

const SearchBar = ({ searchChange, searchField, searchSubmit }) => {
	return(
		<div className="ui secondary segment">
			<form onSubmit={searchSubmit} className="ui fluid action input">
				<input
					onChange={searchChange} 
					value={searchField}
					type="text" 
					placeholder="Video Search..." 
				/>
				<div onClick={searchSubmit} className="ui button" >Search</div>
			</form>
		</div>
	)
};

export default SearchBar;