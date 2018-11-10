import mongoose from "mongoose"

const configureDB = () => {
    const db = "Put your connection URL here! SEE README!"
    const options = {
        useCreateIndex: true,
        useNewUrlParser: true,
    }

    mongoose.connect( db, options )
        .then( () => console.log( "MongoDB connected!" ) )
        .catch( err => console.log( err) )
}

export default configureDB