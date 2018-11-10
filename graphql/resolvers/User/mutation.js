import User from "../../../db/models/User"

const addUser = (_, { id, name, email }) => {
    const newUser = new User({ id, name, email })

    return new Promise((resolve, reject) => {
        newUser.save( 
            (err, res) => err ? reject(err) : resolve(res) 
        )
    })
}

const editUser = (_, { id, name, email }) =>
    new Promise((resolve, reject) => 
        User.findOneAndUpdate(
            { id }, 
            { $set: { name, email } }
        ).exec( 
            (err, res) => err ? reject(err) : resolve(res) 
        )
    )

const deleteUser = (_, args) => 
    new Promise((resolve, reject) => 
        User.findOneAndRemove( args )
        .exec(
            (err, res) => err ? reject(err) : resolve(res)
        )
    )

export default {
    addUser,
    editUser,
    deleteUser
}