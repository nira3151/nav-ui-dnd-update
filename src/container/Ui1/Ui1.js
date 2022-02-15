import React from "react";
import Table from "../Table";
const update = require('immutability-helper');

class Ui1 extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      title: "",
      status: "",
      items: [
        {
          id: 1,
          title: "games",
          status: "cricket : in 15 minute"
        },
        {
          id: 2,
          title: "games",
          status: "hokey : in 30 minute"
        },
        {
          id: 3,
          title: "games",
          status: "chess : in 45 minute"
        }
      ],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      id: this.state.id,
      title: this.state.title,
      status: this.state.status,
    });

    this.setState({
      items,
      id: this.state.id + 1,
      title: "",
      status: ""
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  onUpdate = (item) => {
    const updatedData = this.state.items.map((x) =>
      x.id === item.id ? { ...x, title: item.newTitle, status: item.newStatus } : x
    );
    this.setState({ items: updatedData });
  };

  moveCard = (dragIndex, hoverIndex) => {
    const { items } = this.state
    const dragCard = items[dragIndex]

    this.setState(
        update(this.state, {
          items: {
                $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
            },
        }),
    )
}

  render() {
    return (
      <div>
        {/* <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newId={this.state.id}
          newTitle={this.state.title}
          newStatus={this.state.status}
        /> */}
        <Table items={this.state.items} onUpdate={this.onUpdate} moveCard={this.moveCard}/>
      </div>
    );
  }
}
export default Ui1;