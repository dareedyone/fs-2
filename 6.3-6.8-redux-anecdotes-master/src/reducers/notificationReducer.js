const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case "SET_MESSAGE":
			return action.type;
		default:
			return state;
	}
};

export default notificationReducer;
