export default (init = false, action) => {
  switch (action.type) {
    case "TOKEN_TRUE":
      return action.payload;
    default:
      return init;
  }
};
