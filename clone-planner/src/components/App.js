import React from 'react';
import PlannerList from './plannerList';
import { connect } from 'react-redux'

export class App extends React.Component {
  render() {

    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Hello Planner clone</h2>
        {lists.map(list => (<PlannerList title={list.title} cards={list.cards} /> ))}
      </div>
    )
  }
}

const maspStateToProps = state => ({
  lists: state.lists
})

export default connect(maspStateToProps)(App);