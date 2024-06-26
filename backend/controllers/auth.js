const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../modèles/user');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return

    const userFName = req.body.userFName;
    const userLName = req.body.userLName;
    const userBirth = req.body.userBirth;
    const userPassword = req.body.userPassword;
    const email = req.body.email;


    try{
        const hashedUserPassword = await bcrypt.hash(userPassword,12);
        
        const userDetails = {
            userFName: userFName,
            userLName: userLName,
            userBirth: userBirth,
            userPassword: hashedUserPassword,
            email: email
        }

        const result = await User.save(userDetails);

        res.status(201).json({message: 'utilisateur enregisté'});
    }catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const userPassword = req.body.userPassword;

    try{
        const user = await User.find(email);

        if(user[0].length !== 1){
            const error = new Error('utilisateur non trouvé');
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0];

        const isEqual = await bcrypt.compare(userPassword, storedUser.userPassword);

        if(!isEqual){
            const error = new Error('mot de passe incorrect');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({
            email: storedUser.email,
            userId: storedUser.userId
            },
            'secretfortoken',
            {expiresIn: '1h'}
        );

        res.status(200).json({token: token, userId: storedUser.userId});


    }catch(err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }


}