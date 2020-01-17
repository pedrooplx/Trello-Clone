import React from 'react';
import PlannerCard from './plannerCard';

const PlannerList = ({title}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            <PlannerCard/>
        </div>    
    )
}

const styles = {
    container:{
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default PlannerList;
