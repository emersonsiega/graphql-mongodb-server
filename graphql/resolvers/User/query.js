import User from "../../../db/models/User"

const user = (_, args) =>
    new Promise((resolve, reject) =>
        User.findOne(args).exec( 
            (err, res) => err ? reject(err) : resolve(res) 
        )
    )

const users = () =>
    new Promise((resolve, reject) =>
        User.find({})
            .populate()
            .exec(
                (err, res) => err ? reject(err) : resolve(res)
            )
    )

const usersCount = () =>
    new Promise((resolve, reject) =>
        User.count({}).exec(
            (err, res) => err ? reject(err) : resolve(res)
        )
    )

export default {
    user,
    users,
    usersCount
}