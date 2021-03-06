// const anecdotesAtStart = [
// 	"If it hurts, do it more often",
// 	"Adding manpower to a late software project makes it later!",
// 	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
// 	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
// 	"Premature optimization is the root of all evil.",
// 	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
// 	return {
// 		content: anecdote,
// 		id: getId(),
// 		votes: 0,
// 	};
// };

// const initialState = anecdotesAtStart.map(asObject);
import anecdoteService from "../services/anecdotes";
const anecdoteReducer = (state = [], action) => {
	switch (action.type) {
		case "VOTE":
			const id = action.payload.id;
			const anecdoteTochange = state.find((a) => a.id === id);
			const changedAnecdote = {
				...anecdoteTochange,
				votes: anecdoteTochange.votes + 1,
			};

			return state.map((a) => (a.id !== id ? a : changedAnecdote));

		case "NEW_ANECDOTE":
			return [...state, action.payload];

		case "INIT_ANECDOTES":
			return action.payload;
		default:
			return state;
	}
};

export const createAnecdote = (val) => {
	return async (dispatch) => {
		const newNote = await anecdoteService.createNew(val);
		dispatch({
			type: "NEW_ANECDOTE",
			payload: newNote,
		});
	};
};

export const initializeAnecdote = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll();
		dispatch({
			type: "INIT_ANECDOTES",
			payload: anecdotes,
		});
	};
};

export const addVote = (anecdote) => {
	return async (dispatch) => {
		const newAnecdote = await anecdoteService.doVote(anecdote);
		dispatch({
			type: "VOTE",
			payload: { id: newAnecdote.id },
		});
	};
};

export default anecdoteReducer;
