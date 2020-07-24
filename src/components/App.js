import React from 'react';
import PlannerList from './plannerList';
import { connect } from 'react-redux';
import PlannerActionButton from './plannerActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row
`;

export class App extends React.Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {

    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Planner - Trello clone</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                {lists.map((list, index) => (<PlannerList listID={list.id} key={list.id} title={list.title} cards={list.cards} index={index} /> ))}
                <PlannerActionButton list/>
              </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    )
  }
}

const maspStateToProps = state => ({
  lists: state.lists
})

export default connect(maspStateToProps)(App);