import notificationService from "../services/notification";
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

export const setNotification = (message, sec = 5) => {
	return async (dispatch) => {
		message = await notificationService.setMessage({ message });
		dispatch({ type: "SET_MESSAGE", payload: message.message });
		setTimeout(async () => {
			message = await notificationService.setMessage({ message: null });
			dispatch({ type: "SET_NULL" });
		}, 1000 * sec);
	};
};

export const removeNotification = () => ({ type: "SET_NULL" });

export default notificationReducer;
