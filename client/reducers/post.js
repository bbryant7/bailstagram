// reducer takes the action and a COPY of current state
// returns an updated COPY of the store
// set state to be an empty array for the first time

function posts(state = [], action){
  console.log(state, action)
  console.log("^-^ meow meow the post changed")
  return state;
}


export default posts;
