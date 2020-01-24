import { CONSTANTS } from '../actions';
import { Droppable } from 'react-beautiful-dnd';

let listID = 4;
let cardID = 8

const initalState = [
    {
        title: "Coisas para fazer",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Agendar voo"
            },
            {
                id: `card-${1}`,
                text: "Ir ao médico"
            },
            {
                id: `card-${2}`,
                text: "Reunião de trabalho"
            },
            {
                id: `card-${3}`,
                text: "Comprar agua"
            }
        ]
    },
    {
        title: "Em andamento",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${4}`,
                text: "Alugar de carro para viagem"
            },
            {
                id: `card-${5}`,
                text: "Alugar casa"
            }
        ]
    },
    {
        title: "Concluido",
        id: `list-${2}`,
        cards: [
            {
                id: `card-${6}`,
                text: "Envio de formulários"
            },
            {
                id: `card-${7}`,
                text: "Compras mensais"
            }
        ]
    }
]

const listReducer = (state = initalState, action) => {
    switch (action.type){

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1;
            return[...state, newList];

        case CONSTANTS.ADD_CARD: {
        const newCard = {
            text: action.payload.text,
            id: `card-${cardID}`
        }
        cardID += 1;

        const newState = state.map(list => {
            if(list.id === action.payload.listID){
                return {
                    ...list,
                    cards: [...list.cards, newCard]
                }
            } else {
                return list;
            }
        });
        return newState;
    }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                droppableId
            } = action.payload;
            const newState = [...state];

            //Na mesma lista
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;

        default:
            return state;
    }
};

export default listReducer;

//8 MINUTOS DA VIDEO AULA, VOLTAR UM POUCO E RESOLVER ERRO