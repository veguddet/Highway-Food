const intialState ={
    count : 0,
  };

  export function counterReducer(state = intialState, action) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state

    switch (action.type) {
      case 'counter/incremented':
         return {...state,count: (state.count) + action.payload};
      case 'counter/decremented': 
    //   if (!state.count === 0)
    //   {
        return {...state, count: state.count - action.payload};
     // };

      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
      return state;
    }
}