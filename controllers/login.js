import UsersModel from '../models/User.js'
import argon2 from "argon2";

export function LogInController(req, res) {
    res.render('login');
  }
  
export async function PostLogInController(req, res) {
    const correspondingUser = await UsersModel.find({ email: req.body.email })

    if ( correspondingUser.length === 0 && correspondingUser.length > 1) {
        console.log("Database mismatch !")
    } else if (req.body.email.length === 0 || req.body.password.length === 0 || !await argon2.verify(correspondingUser[0].password, req.body.password)) {
        console.log("Either empty or not matching")
    } else {
        console.log("Login successful")
        req.session.user = {
            email: req.body.email,
          }
        res.redirect('/')
    }
  } 

export async function LogOutController(req, res) {
    req.session.destroy((err) => {
        if (err) {
          res.status(500).send(`<h1>Error !</h1><p>${err.message}</p>`)
          return
        }
        res.redirect('/login')
      })
}