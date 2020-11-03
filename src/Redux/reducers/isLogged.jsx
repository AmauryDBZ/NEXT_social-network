const isLoggedReducer = (
	state = {
		id: "",
		email: "",
		token: "",
	},
	userData,
) => {
	switch (userData.type) {
		case "IS_LOGGED":
			return {
				id: userData.id,
				email: userData.email,
				token: userData.token,
			};
		default:
			return state;
	}
};

export default isLoggedReducer;
