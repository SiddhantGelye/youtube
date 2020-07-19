import React from 'react'

class SearchBar extends React.Component{
    state={term:''}
    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }    
    render(){
        return(
            <div className="search-bar ui segment">
                <form className='ui form' onSubmit ={this.onFormSubmit}>
                    <div className='field'>
                        <label>Search For Videos</label>
                    </div>
                    <input
                        type='text'
                        onChange ={(e)=>{this.setState({term:e.target.value})}}
                    />
                </form>
            </div>
        )
    }
}
export default SearchBar ;