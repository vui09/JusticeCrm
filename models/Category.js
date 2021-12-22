const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
	name: {

	},
	imageSrc: {
		type: String,
		default: ''
	},
	user:{
		ref: 'users',
		type: Schema.Types.ObjectId
	}
})

module.exports = mongoose.model('categories', categorySchema)