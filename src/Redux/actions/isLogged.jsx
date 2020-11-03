export const isLogged = (userData) => {
	return {
		type: "IS_LOGGED",
		userData,
	};
};
