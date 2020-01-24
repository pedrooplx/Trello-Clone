import React from 'react';
import PlannerList from './plannerList';
import { connect } from 'react-redux';
import PlannerActionButton from './plannerActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row
`;

export class App extends React.Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {

    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Planner - Trello clone</h2>
          <ListContainer>
            {lists.map(list => (<PlannerList listID={list.id} key={list.id} title={list.title} cards={list.cards} /> ))}
            <PlannerActionButton list/>
          </ListContainer>
        </div>
      </DragDropContext>
    )
  }
}

const maspStateToProps = state => ({
  lists: state.lists
})

export default connect(maspStateToProps)(App);