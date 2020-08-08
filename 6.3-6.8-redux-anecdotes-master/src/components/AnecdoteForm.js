import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "./../reducers/notificationReducer";

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
	// const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.persist();
		const val = e.target.anecdote.value;
		createAnecdote(val);
		// dispatch(createAnecdote(val));
		e.target.anecdote.value = "";
		setNotification(`you created '${val}'`);
		// dispatch(createNotification(`you created '${val}'`));
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

const mapDispatchToProps = {
	createAnecdote,
	setNotification,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
