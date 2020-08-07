const filterReducer = (state = null, action) => {
	switch (action.type) {
		case "FILTER":
			return action.payload;
		// case "NULL_FILTER":
		// 	return null;
		default:
			return state;
	}
};
export const setFilter = (text) => ({
	type: "FILTER",
	payload: text,
});

// export const setNullFilter = (text) => ({
// 	type: "NULL_FILTER",
// });
export default filterReducer;
