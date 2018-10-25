const initialState = {
  name: 'Charow',
  avatarId: 0,
  tag: 2704,
  friends: [
    {
      name: 'TDouge',
      avatarId: 0,
      tag: 2705,
      online: true,
    },
    {
      name: 'JJourdai',
      avatarId: 0,
      tag: 2706,
      online: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
