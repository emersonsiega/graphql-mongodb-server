# graphql-mongodb-server
Project created to know and play with GraphQL. It implement a server with [GraphiQL](https://github.com/graphql/graphiql) interface. 

## Installing and running
`yarn install`  
`yarn server` 

Go to [localhost:4000](http://localhost:4000)  

**Important**  
Before start the server, create a MongoDB database locally or at [mLab](http://mlab.com) and put the connection URL into '/db/connection.js' file. 

## GraphQL schema, queries and mutations
```
    type User {
        id: String!
        name: String!
        email: String!
    }

    type Query {
        user( id: String! ): User
        users: [User]
        usersCount: Int!
    }

    type Mutation {
        addUser( id: String!, name: String!, email: String! ): User
        editUser( id: String, name: String, email: String ): User
        deleteUser( id: String, name: String, email: String ): User
    }
```
