import { CONSTANTS } from '../actions';

let listID = 3;
let cardID = 3

const initalState = [
    {
        title: "Coisas para fazer",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Agendar voo"
            }
        ]
    },
    {
        title: "Em andamento",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${1}`,
                text: "Alugar de carro para viagem"
            }
        ]
    },
    {
        title: "Concluido",
        id: `list-${2}`,
        cards: [
            {
                id: `card-${2}`,
                text: "Envio de formulários"
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

        case CONSTANTS.ADD_CARD:
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

        default:
            return state;
    }
};

export default listReducer;

//8 MINUTOS DA VIDEO AULA, VOLTAR UM POUCO E RESOLVER ERRO