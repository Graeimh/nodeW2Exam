import UsersModel from '../models/User.js'
import argon2 from "argon2";

export function RegisterController(req, res) {
    res.render('register');
  }
  
export async function PostRegisterController(req, res) {
 
    if (req.body.password !== req.body.password_confirm ||
        req.body.password.length === 0 ||
        req.body.password_confirm.length === 0) {
        
        console.log("ERROR !")
    } else {
        const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        }

        const correspondingUser = await UsersModel.find({ email: req.body.email })

        if (correspondingUser.length === 0) {
           
            newUser.password = await argon2.hash(req.body.password)

            try {
                await UsersModel.create(newUser);
                //add success message
                res.redirect('/login');
            } catch (err) {
                console.error('L\'utilisateur n\'a pas pu être créé :', err.message);
            }

        } else {
            //add error message
            res.redirect('/register');
        }
    }

    
  }