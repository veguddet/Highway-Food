// action

export const incremented = () => dispatch => {
    dispatch({
        type : 'counter/incremented',
        payload : 1
    })
}

export const decremented = () =>{
  return {    type : 'counter/decremented',
        payload : 1
    }
}