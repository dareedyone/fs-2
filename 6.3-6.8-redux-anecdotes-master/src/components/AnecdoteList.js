import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
const AnecdoteList = () => {
	const anecdotes = useSelector((state) => state.anecdote).sort(
		(a, b) => b.votes - a.votes
	);
	const dispatch = useDispatch();
	const vote = (id) => {
		dispatch(addVote(id));
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map((anecdote) => (
				<Anecdote
					key={anecdote.id}
					anecdote={anecdote}
					handleVote={() => vote(anecdote.id)}
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
