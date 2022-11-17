/*database schema*/
let mongoose = require('mongoose');
let healthModel = mongoose.Schema(
    {
        day: String,
        exercise: String,
        from: String,
        to: String

    },
    {
        collection: "health"
    }
);
module.exports = mongoose.model('Health', healthModel);