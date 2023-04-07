const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    event_add_date: { type: Date, default: Date.now},
    event:{
        event_name: String,
        event_desc: String,
        event_end_date: { type: Date, default: Date.now},
        finish: Boolean
    }
    

})

module.exports = mongoose.model('Events', eventSchema);