const mongoose = require('mongoose')

const Job = mongoose.Schema({
    text: {
        type: String, required: [true, 'Please add a text a value']
    }
}, {
    timestamps: true
}
)


module.exports = mongoose.model('Job',Job)