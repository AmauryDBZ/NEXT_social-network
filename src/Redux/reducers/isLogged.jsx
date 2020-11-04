const isLoggedReducer = (state = {}, action) => {
	switch (action.type) {
		case "IS_LOGGED":
			return {
				user: action.userData.user,
			};
		default:
			return state;
	}
};

export default isLoggedReducer;
