const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res){
try{
	console.log('===>req.body', req.body);
	const candidate = await User.findOne({email: req.body.email})
	console.log('===>candidate', candidate);
		if (candidate) {
			// Проверка пароля, пользователь существует
			const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
			if (passwordResult) {
				// Генерация токена, пароли совпали
				console.log(keys.jwt)

				const token = jwt.sign({
					email: candidate.email,
					userId: candidate._id
				}, keys.jwt, { expiresIn: 60 * 60 })

				console.log(token)

				res.status(200).json({
						token
				})
			} else {
				// Пароли не совпали
				res.status(401).json({
					message: 'Пароли не совпадают. Попробуйте снова.'
				})
				return
			}
		} else {
			// Пользователя нет, ошибка
			res.status(404).json({
				message: 'Пользователь с таким email не найден.'
			})
			return
		}
} catch (e){
	errorHandler(res, e)
}
}

module.exports.register = async function (req, res){
	try{
		console.log('===>req.body.email',req.body.email );
	const candidate = await User.findOne({email: req.body.email})
	console.log('===>candidate',candidate );
	if(candidate) {
		//Пользователь существует нужно отправить ошибку
		res.status(409).json({
			message: 'Такой email уже занят. Попробуйте другой.'
		})
		return
	} else {
		// Нужно создать пользователя
		console.log('===>req.body', req.body);
		const salt = bcrypt.genSaltSync(10)
		console.log('===>salt', salt);
		const password = req.body.password
		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			companyName: req.body.companyName,
			email: req.body.email,
			password: bcrypt.hashSync(password, salt)
		})

			await user.save()
			res.status(201).json(user)
			return


	}}catch(e) {
		// Обработать ошибку
		errorHandler(res, e)
	}
}