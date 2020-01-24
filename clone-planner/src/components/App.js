import React from 'react';
import PlannerList from './plannerList';
import { connect } from 'react-redux';
import PlannerActionButton from './plannerActionButton';

export class App extends React.Component {
  render() {

    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Planner - Trello clone</h2>
        <div style={styles.listContainer}>
          {lists.map(list => (<PlannerList listID={list.id} key={list.id} title={list.title} cards={list.cards} /> ))}
          <PlannerActionButton list/>
        </div>
      </div>
    )
  }
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

const maspStateToProps = state => ({
  lists: state.lists
})

export default connect(maspStateToProps)(App);