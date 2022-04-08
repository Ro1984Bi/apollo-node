const { connect } = require('mongoose')

const connectDB = async () => {
    try {
        await connect('mongodb://localhost/tasksdb')
        console.log('Mongodb is on')
    } catch (error) {
      console.error(error)  
    }
}

module.exports = {connectDB}
