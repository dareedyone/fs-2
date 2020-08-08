import axios from "axios";
const baseUrl = "http://localhost:3001/message";

const setMessage = async (message) => {
	const msg = await axios.post(baseUrl, message);
	return msg.data;
};

export default { setMessage };
