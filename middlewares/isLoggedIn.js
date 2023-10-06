export function isLoggedIn(req, res, next) {
    if (!req.session?.user) {
      res.redirect('/register');
      return
    }
    next()
  }