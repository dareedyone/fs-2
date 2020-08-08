import React from "react";
import { useDispatch, connect } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
	removeNotification,
	setNotification,
} from "./../reducers/notificationReducer";
const AnecdoteList = (props) => {
	// const anecdotes = useSelector(({ anecdote, filter }) => {
	// 	const re = new RegExp(filter, "i");
	// 	const finalAnecdote =
	// 		filter === null ? anecdote : anecdote.filter((a) => a.content.match(re));
	// 	return finalAnecdote.sort((a, b) => b.votes - a.votes);
	// });
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
			{props.anecdotes.map((anecdote) => (
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
const mapStateToProps = ({ anecdote, filter }) => {
	const re = new RegExp(filter, "i");
	const finalAnecdote =
		filter === null ? anecdote : anecdote.filter((a) => a.content.match(re));
	console.log(finalAnecdote);
	return {
		anecdotes: finalAnecdote.sort((a, b) => b.votes - a.votes),
	};
};

export default connect(mapStateToProps)(AnecdoteList);
