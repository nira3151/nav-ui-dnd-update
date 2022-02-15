import React from 'react';
import PropTypes from 'prop-types';
import {
  DragSource,
  DropTarget,
} from 'react-dnd';
import flow from 'lodash/flow';

const style = {
      padding: '0.5rem 0.5rem',
      // marginBottom: 'em',
      backgroundColor: 'rgb(255, 252, 252)',
      // cursor: 'move',
      margin: '6px',
      fontSize: 20,
      // textalign: 'left',
      // paddingleft:'15px',
      // margin: '6px',
};


const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    }
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

     // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    //mutation avoidance
    monitor.getItem().index = hoverIndex;
  },
}

class Card extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    text1:PropTypes.string.isRequired,
    btn:PropTypes.string.isRequired,
    btn1:PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired,
  }

  render() {
    const {
      text,
      text1,
      btn,
      btn1,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;
    const opacity = isDragging ? 0.5 : 1;

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(<div style={{ ...style, opacity }}> <p> title = {text} </p>
                                                            <p>status = {text1}</p>
                                                            {btn} {btn1}
                                                            </div>)
      )
    );
  }
}

export default flow(
  DragSource(
    'card',
    cardSource,
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  ),
  DropTarget('card', cardTarget, (connect) => ({
    connectDropTarget: connect.dropTarget(),
  }))
)(Card);
