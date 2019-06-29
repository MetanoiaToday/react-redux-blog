const initState = {
    posts: [
        { id: '1', title: "Squirtle Turtle", body: 'Lorem ipsum dolor sit amet' },
        { id: '2', title: "Charmander", body: 'Lorem ipsum dolor sit amet' },
        { id: '3', title: "A Helix fossil", body: 'Lorem ipsum dolor sit amet' },

    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;