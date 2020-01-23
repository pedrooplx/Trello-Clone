const initalState = [
    {
        title: "Primeira lista",
        id: 0,
        cards: [
            {
                id: 0,
                text: "card 1"
            },
            {
                id: 1,
                text: "card 2"
            }
        ]
    },
    {
        title: "Segunda Lista",
        id: 1,
        cards: [
            {
                id: 0,
                text: "card 3"
            },
            {
                id: 1,
                text: "card 4"
            },
            {
                id: 2,
                text: "card 5"
            }
        ]
    }
]

const listReducer = (state = initalState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

export default listReducer;