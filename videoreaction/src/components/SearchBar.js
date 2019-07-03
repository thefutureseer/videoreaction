import React from 'react';

class SearchBar extends React.Component {
  state = { 
    term: ''
  };

  onFormSubmit = (event) => {
   event.preventDefault();
   // TODO: callback  

  };

  render() {
    return(
     <div className="search-bar ui segment">
       <form onSubmit={this.onFormSubmit} className="ui form">
         <div className="field">
           <label>Search</label>
           <input 
             type="text" 
             value={this.state.term} 
             onChange={e => this.setState({ term: e.target.value })}
             />
         </div>
       </form>
     </div>
    );
  }
};

export default SearchBar;