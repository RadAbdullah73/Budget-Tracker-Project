// const { UserSchema } = require('../models/userSchema.model');
const Model = require("../models/user.model");
const UserSchema=Model.User
const Budget=Model.Budget
const Suggested=Model.Suggested

var bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
module.exports.createUser = (request, response) => {
    UserSchema.create(request.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, a.env.JWT_KEY);

            response
                .cookie("usertoken", userToken, secret, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => response.status(400).json({ err: err.message }));

}

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_KEY, { expiresIn: '3d' })
}

module.exports.logout = (request, response) => {
    response.clearCookie('usertoken');
    response.sendStatus(200);
}

module.exports.login = async (request, response) => {
    const user = await UserSchema.findOne({ email: request.body.email });

    if (user === null) {
        return response.sendStatus(400);
    }


    const correctPassword = bcrypt.compareSync(request.body.password, user.password);

    if (!correctPassword) {
        // password wasn't a match!
        return response.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.JWT_KEY
    );

    // note that the response object allows chained calls to cookie and json
    response
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!" });
}

module.exports.getAllUsers = (request, response) => {
    UserSchema.find({})
        .then(Projects => response.json(Projects))
        .catch(err => response.json(err))
}

module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserSchema.login(email, password)
        const token = createToken(user._id)
        const payload = {
            user: user,
        };
        res.status(200).json({ user, token })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports.reg = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword ,salary} = req.body
    try {
        const user = await UserSchema.signup(firstName, lastName, email, password, confirmPassword,salary)
        res.status(200).json({ email, user })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.findAllAuthors = (req, res) => {
    Budget.find({}).sort({ _id: -1 })
        .then(allDaAuthors => res.json(allDaAuthors))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
    Budget.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json(oneSingleAuthor))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.findOneSingleUser = (req, res) => {
    UserSchema.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json(oneSingleAuthor))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthor = (req, res) => {
    UserSchema.findOne({ _id: req.params.id })
    .then(oneSingleAuthor => {var user1=oneSingleAuthor;
        Budget.create(req.body)
        .then(newlyCreatedAuthor => {
        Budget.findOneAndUpdate({ _id:newlyCreatedAuthor._id}, {user:user1}, { new: true, runValidators: true })
        .then(updatedAuthor => res.json({ updatedAuthor }))
    })
        .catch(err => res.status(400).json(err))
    })
   
       
};

module.exports.updateExistingAuthor = (req, res) => {
    Budget.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json({ updatedAuthor }))
        .catch(err => res.status(400).json(err))
};

module.exports.deleteAnExistingAuthor = (req, res) => {
    Budget.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.findAccordingMonth = (req, res) => {
    const {month}=req.params
    
     
        Budget.find({ set1: { $regex: month }})
        .then(one => res.json(one))
        .catch(err => res.json({ message: "Something went wrong", error: err }))};
     ;
     module.exports.createNewSuggested = (req, res) => {
        UserSchema.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {var user1=oneSingleAuthor;
            Suggested.create(req.body)
            .then(newlyCreatedAuthor => {
            Suggested.findOneAndUpdate({ _id:newlyCreatedAuthor._id}, {user:user1}, { new: true, runValidators: true })
            .then(updatedAuthor => res.json({ updatedAuthor }))
        })
            .catch(err => res.status(400).json(err))
        })
       
           
    };
    module.exports.deleteAnExistingSuggested = (req, res) => {
        Suggested.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
    module.exports.findAllSuggested = (req, res) => {
        Suggested.find({}).sort({ _id: -1 })
            .then(allDaAuthors =>{ 
                res.json(allDaAuthors)
             
                
            })
            .catch(err => res.json({ message: "Something went wrong", error: err }));

    };
    
   
  

