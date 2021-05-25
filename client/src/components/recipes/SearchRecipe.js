import React, { Component } from 'react'
import { connect } from 'react-redux';

class SearchRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const search = this.state1;
    return (
      <div>
        <form>
          <label>Search For Recipes </label>
          <input type="text" name={search} onChange={this.handleOnChange}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default connect(null)(SearchRecipe)