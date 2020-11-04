const loggingAction = (userData) => {
	return {
		type: "IS_LOGGED",
		userData: userData
	};
};

export default loggingAction;
