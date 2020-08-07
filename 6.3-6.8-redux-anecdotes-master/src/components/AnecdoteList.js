import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
	createNotification,
	removeNotification,
} from "./../reducers/notificationReducer";
const AnecdoteList = () => {
	const anecdotes = useSelector((state) => state.anecdote).sort(
		(a, b) => b.votes - a.votes
	);
	const dispatch = useDispatch();
	const vote = ({ id, content }) => {
		dispatch(addVote(id));
		dispatch(createNotification(`you voted '${content}'`));

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
