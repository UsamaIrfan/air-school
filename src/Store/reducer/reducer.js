const INITIAL_STATE = {
   currentUser: null,
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default:
         return state
   }
}

// const INITIAL_STATE = {
//   current: [],
//   possible: [
//     'Alice',
//     'Bob',
//     'Sammy',
//   ],
// };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// };