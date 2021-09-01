import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from '../actions';

class  SearchBox extends Component  {
	render(){
		const {search, value} = this.props;
		return (
			<div className='col col-sm-4'>
				<input
					className='form-control'
					value={value}
					//onChange={(event) => props.setSearchValue(event.target.value)}
					onChange={(e) => search(e.target.value)}
					placeholder='Type to search...'
				></input>
			</div>
		)
	};
};

function mapStateToProps({movies}) {
	return {value: movies.name};
  }
  
  function mapDispatchToProps(dispatch) {
	return bindActionCreators({search}, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

//export default SearchBox;