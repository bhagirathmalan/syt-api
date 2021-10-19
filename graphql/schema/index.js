const { buildSchema } = require("graphql");
const { userType } = require("./userSchema");

const schema = `
${userType}


 type RootQuery{
    user : User!

 }

type RootMutation{
    createUser(userInput: UserInput): User!
}


schema {
    query: RootQuery
    mutation: RootMutation
}
`;

module.exports = buildSchema(schema);