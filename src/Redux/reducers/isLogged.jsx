const isLoggedReducer = (
	state = {
		id: 0,
		email: "",
		token: "",
	},
	action,
) => {
	switch (action.type) {
		case "IS_LOGGED":
			return {
				id: action.userData.id,
				email: action.userData.email,
				token: action.userData.token,
			};
		default:
			return state;
	}
};

export default isLoggedReducer;
