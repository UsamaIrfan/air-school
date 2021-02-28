const set_data = () => {
   return (dispatch) => {
      dispatch({
         type: "SET_DATA",
         payload: { name: "Hira", email: "someone@taime.com" }
      })
   }
}

export {
   set_data
}

// export const addFriend = friendsIndex => (
//    {
//      type: 'ADD_FRIEND',
//      payload: friendsIndex,
//    }
//  );