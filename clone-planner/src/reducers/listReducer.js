import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 1

const initalState = [
    {
        title: "Coisas para fazer",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Agendar voo"
            }
        ]
    },
    {
        title: "Em andamento",
        id: 1,
        cards: [
            {
                id: 0,
                text: "Alugar de carro para viagem"
            }
        ]
    },
    {
        title: "Concluido",
        id: 2,
        cards: [
            {
                id: 0,
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
                id: listID
            };
            listID += 1;
            return[...state, newList];

        case CONSTANTS.ADD_CARD:
        const newCard = {
            text: action.payload.text,
            id: cardID
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