import UsersModel from '../models/User.js'
import argon2 from "argon2";

export function RegisterController(req, res) {
    res.render('register');
  }
  
export async function PostRegisterController(req, res) {
 
    if (req.body.password !== req.body.password_confirm ||
        req.body.password.length === 0 ||
        req.body.password_confirm.length === 0) {
        
        req.flash('error', 'The passwords need to match !');
        res.redirect('/register');
    } else {
        const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        };

        const correspondingUser = await UsersModel.find({ email: req.body.email });

        if (correspondingUser.length === 0) {
           
            newUser.password = await argon2.hash(req.body.password);

            try {
                await UsersModel.create(newUser);
                req.flash('success', 'User successfully created!');
                res.redirect('/login');
            } catch (err) {
                req.flash('error', 'User could not be created !');
                res.redirect('/register');
            }

        } else {
            req.flash('error', 'This email address is already in use!');
            res.redirect('/register');
        }
    }
  }