const jwt = require('jsonwebtoken')
const models = require('../models')
const user = models.user


exports.register = (req, res) => {
    user.create(req.body)
    .then(user => {
        const token = jwt.sign({ id: user.id }, 'NF');
        const email = user.email;
        const id = user.id;
        const name = user.fullname;
        res.send ({
            message: "Create Account Success!",
            id,
            email,
            name,
            token,
            error: false
        });
    })
    .catch(err => {
        res.send({
            message: "Create Account Fail!",
            err,
            error: true
        })
    })
};

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    user.findOne({where: {email, password}})
    .then(user => {
        if (user){
            const id = user.id;
            const email = user.email;
            const name = user.fullname;
            const token = jwt.sign({ id: user.id }, 'NF');
            res.send({
                message: "Login Success!",
                id,
                email,
                name,
                token,
                error: false
            })
        } else {
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })
}
