export default (init = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return action.payload === true ? true : false;
    default:
      return false;
  }
};
