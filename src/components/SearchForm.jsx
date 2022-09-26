import React, { Component } from 'react';
import { Input } from 'antd';
import './AddFoodForm.css';
import PropTypes from 'prop-types';

const { Search } = Input;

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
      <Search
        placeholder="Banana"
        id="searched"
        name="searched"
        allowClear
        value={this.state.searched}
        onChange={(e) => this.handlesearchedInput(e)}
        onKeyUp={this.handleFormSubmit}
        style={{
          width: '100%',
        }}
      />

    );
  }
}
SearchForm.propTypes = {
  searchFood: PropTypes.func.isRequired,
};
export default SearchForm;
