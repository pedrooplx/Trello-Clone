import React from 'react';
import PlannerCard from './plannerCard';
import PlannerActionButton from './plannerActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px
`;

const PlannerList = ({title, cards, listID, index}) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listID)}>
                        { provided => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4 style={styles.defaultCardTitle}>{title}</h4>
                                {cards.map((card, index) => (<PlannerCard key={card.id} index={index} text={card.text} id={card.id} />))}
                                <PlannerActionButton listID={listID}/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>  
    )
}

const styles = {
    defaultCardTitle:{
      fontSize: "1rem",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    }
  }

export default PlannerList;
