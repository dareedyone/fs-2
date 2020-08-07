import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
	createNotification,
	removeNotification,
} from "./../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.persist();
		const val = e.target.anecdote.value;
		console.log(val);
		const newAnecdote = await anecdoteService.createNew(val);
		dispatch(createAnecdote(newAnecdote));
		console.log(e.target.anecdote.value);
		e.target.anecdote.value = "";
		dispatch(createNotification(`you created '${val}'`));

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
