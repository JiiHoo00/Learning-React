const reduce = (state, action) => {
  switch (action.type) {
    case 'ADD_REGISTRATION':
      const newState = Object.assign({}, state);

      newState.users.push(action.user);
      return newState;

    default:
      return {
        users: [
          {
            name: 'test',
            email: 'test@test.com',
            foodChoice: 'Meat',
            goingToSauna: false,
          },
        ],
      };
  }
};

export default reduce;
