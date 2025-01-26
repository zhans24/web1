const bcrypt = require("bcrypt");
const User = require("../models/user"); // Модель пользователя

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).send("Пользователь не найден");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send("Неверный пароль");

        res.send("Авторизация успешна!");
    } catch (err) {
        res.status(400).send("Ошибка: " + err.message);
    }
};

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).send("Пользователь с таким email уже существует");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.send("Регистрация успешна!");
    } catch (err) {
        res.status(400).send("Ошибка: " + err.message);
    }
};
