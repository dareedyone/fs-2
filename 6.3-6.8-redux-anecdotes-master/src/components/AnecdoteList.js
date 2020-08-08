import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
	removeNotification,
	setNotification,
} from "./../reducers/notificationReducer";
const AnecdoteList = () => {
	const anecdotes = useSelector(({ anecdote, filter }) => {
		const re = new RegExp(filter, "i");
		const finalAnecdote =
			filter === null ? anecdote : anecdote.filter((a) => a.content.match(re));
		return finalAnecdote.sort((a, b) => b.votes - a.votes);
	});
	const dispatch = useDispatch();
	const vote = (anecdote) => {
		dispatch(addVote(anecdote));
		dispatch(setNotification(`you voted '${anecdote.content}'`, 6));

		setTimeout(() => {
			dispatch(removeNotification());
		}, 5000);
	};

	return (
		<div>
			{anecdotes.map((anecdote) => (
				<Anecdote
					key={anecdote.id}
					anecdote={anecdote}
					handleVote={() => vote(anecdote)}
				/>
			))}
		</div>
	);
};

const Anecdote = ({ anecdote, handleVote }) => {
	return (
		<div>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={handleVote}>vote</button>
			</div>
		</div>
	);
};

export default AnecdoteList;
