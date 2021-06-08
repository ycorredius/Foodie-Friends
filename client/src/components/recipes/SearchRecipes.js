import React, { Component } from 'react'

export default class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBox: "",
      searchType:""
    };
  }
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { searchBox,searchType } = this.state;
    return (
      <div>
        <div className="search-box">
            <select name={searchType} >
                <option selected required>Select One</option>
                <option value="ingredient">Ingredient</option>
                <option value="category">Category</option>
            </select>
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              placeholder="search"
              name={searchBox}
              onChange={this.handleOnChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}
