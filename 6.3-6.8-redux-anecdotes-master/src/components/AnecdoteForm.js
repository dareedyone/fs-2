import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
	removeNotification,
	setNotification,
} from "./../reducers/notificationReducer";

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.persist();
		const val = e.target.anecdote.value;
		dispatch(createAnecdote(val));
		e.target.anecdote.value = "";
		dispatch(setNotification(`you created '${val}'`));
		// dispatch(createNotification(`you created '${val}'`));

		setTimeout(() => {
			dispatch(removeNotification());
		}, 5000);
	};

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input name="anecdote" />
				</div>
				<button>create</button>
			</form>
		</div>
	);
};

export default AnecdoteForm;
