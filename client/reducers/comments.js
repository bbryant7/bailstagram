// reducer takes the action and a COPY of current state
// returns an updated COPY of the store
// set state to be an empty array for the first time

function comments(state = [], action){
  console.log(state, action)
  return state;
}

export default comments;
