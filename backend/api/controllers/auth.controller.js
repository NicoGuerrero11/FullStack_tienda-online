import User from "../models/user.js"
import bcrypt from 'bcrypt';

const login = () => { };

const register = async (req, res) => {
    try {

        const encryptedPassword = bcrypt.hashSync(req.body.password, 10)

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: encryptedPassword,
        });
        res.json({ message: "User registered", user })
    } catch {
        res.status(500).json({
            message: "Error registering user",
            error: error.message,
        });
    };
};

export { login, register };