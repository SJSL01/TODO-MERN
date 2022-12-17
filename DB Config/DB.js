const mongoose = require('mongoose')

const connect_to_DB = () => {
    return mongoose.connect(process.env.DBURL)
        .then(() => { console.log("DB Connect!!!!!"); })
        .catch((err) => { console.log(err); })
}

module.exports = connect_to_DB