const initalState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "texto qualuqer teste"
            },
            {
                id: 1,
                text: "segundo card teste"
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