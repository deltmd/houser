const initialState={
  test: ''
}


const UPDATE_TEST = "UPDATE_TEST";


function reducer(state = initialState, action) {
  console.log('REDUCER HIT: Action ->', action);

  switch (action.type) {
    case UPDATE_TEST:
      return Object.assign({}, state, { test: action.payload });

    default: return state;
  }
} 

export function updateTest(test) {
  return {
    type: UPDATE_TEST,
    payload: test
  };
} 

export default reducer; 
