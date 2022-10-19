function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in
	if (req.session.loggedIn) {
		// If the user is logged in, call next()
		next()
	}
	res.redirect('/login')
	// If the user is not logged in, redirect to /login
}

module.exports = checkAuth
