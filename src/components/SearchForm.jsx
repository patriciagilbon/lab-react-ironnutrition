import React, { Component } from 'react';
import { Input } from 'antd';
import './AddFoodForm.css';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: '',
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the parent passed function
    this.props.searchFood(this.state.searched);
  };

  handlesearchedInput = (event) => {
    this.setState({
      searched: event.target.value,
    });
  };

  render() {
    return (
      <div className="fromFormat">
        <label>Search:</label>
        <Input type="text" id="searched" name="searched" value={this.state.searched} onKeyUp={this.handleFormSubmit} onChange={(e) => this.handlesearchedInput(e)} />

      </div>
    );
  }
}
SearchForm.propTypes = {
  searchFood: PropTypes.func.isRequired,
};
export default SearchForm;
