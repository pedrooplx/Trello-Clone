import React from 'react';
import PlannerCard from './plannerCard';
import PlannerActionButton from './plannerActionButton'

const PlannerList = ({title, cards, listID}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (<PlannerCard key={card.id} text={card.text} />))}
            <PlannerActionButton listID={listID}/>
        </div>    
    )
}

const styles = {
    container:{
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}

export default PlannerList;
