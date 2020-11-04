const loggingAction = (userData) => {
	return {
		type: "IS_LOGGED",
		userData,
	};
};

export default loggingAction;
