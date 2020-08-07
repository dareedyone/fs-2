const notificationReducer = (state = null, action) => {
	switch (action.type) {
		case "SET_MESSAGE":
			return action.payload;
		case "SET_NULL":
			return null;
		default:
			return state;
	}
};

export const createNotification = (message) => {
	return {
		type: "SET_MESSAGE",
		payload: message,
	};
};

export const removeNotification = () => ({ type: "SET_NULL" });

export default notificationReducer;
