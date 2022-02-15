import React from "react";
import Form from "../Form";
import './Ui1.css'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Card from "../Card";
const update = require('immutability-helper');

class Table extends React.Component {
  state = {
    isEdit: false,
    newTitle: "",
    newStatus: "",
    id: "",
  };

  updateItem = (item) => {
    this.setState({ isEdit: true, id: item.id });
  };

  handleInputChange = (e) => {
    this.setState({ newTitle: e.target.value });
  };

  handleInputChange1 = (e) => {
    this.setState({ newStatus: e.target.value });
  };

  delete = (id) => {
    console.log('------delete-----')
    const data = this.props.items.filter(item => item.id !== id);
    this.setState({ data });
    console.log(data)
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.state);
    this.setState({ isEdit: false });
  };


  render() {
    const items = this.props.items;

    return (
      <div>
        <div className="container">
          {items.map((item, i) => {
            return (
            <Card
              key={item.id}
              index={i}
              id={item.id}
              text={item.title}
              text1={item.status}
              btn = { <button type='button' className='btn1' onClick={() => { this.updateItem(item) }}>UPDATE</button>}
              btn1 = {<button className='btn2' type='submit' onClick={() => { this.delete(item.id) }}>DELETE</button>}
              moveCard={this.props.moveCard} 
            />
          );
          })}

        </div>

        {this.state.isEdit ? (
          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleInputChange1={this.handleInputChange1}
          />
        ) : null}
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Table);