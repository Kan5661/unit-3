import mongoose from 'mongoose'
​
const Schema = mongoose.Schema
​
const userSchema = new Schema({
    user: {
        login: {
            username: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        },
        exerciseRec: exerciseRecSchema
    }
})

export default mongoose.model('user', userSchema);