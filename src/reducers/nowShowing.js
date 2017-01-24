function nowShowing(state = [], action) {
    console.log('Now Showing - ', state, action.type);
    return state;
}

export default nowShowing;