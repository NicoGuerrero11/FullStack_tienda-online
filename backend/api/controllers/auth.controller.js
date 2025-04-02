import User from "../models/user.js"

const login = () => { };

const register = async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
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