import React, {Component} from 'react';
import { Input } from 'antd';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './AddFoodForm.css'

class AddFoodItem extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
        servings:''
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        // Call the parent passed function
        this.props.addTheFood(this.state);
        // Reset
        this.setState({
            name: '',
            calories: '',
            image: '',
            servings:''
        })  
      }
    
    handleNameInput = (event) => {
        this.setState({
            name: event.target.value
        })
      }
      handleCaloriesInput = (event) => {
        this.setState({
            calories: event.target.value
        })
      }
      handleImageInput = (event) => {
        this.setState({
            image: event.target.value
        })
      }
      handleServingsInput = (event) => {
        this.setState({
            servings: event.target.value
        })
      }
    

    render(){
        return(
            <div className="fromFormat">
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <Input type="text" name="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}/>
 
          <label>Calories:</label>
          <Input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)}/>

          <label>Servings:</label>
          <Input type="text" name="servings" value={this.state.servings} onChange={(e) => this.handleServingsInput(e)}/>
        
          <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                <Input type="checkbox" name="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)}/>
            </Upload>

          <Button htmlType="submit">Submit</Button>
        </form>
      </div>
        )
    }
}

export default AddFoodItem;