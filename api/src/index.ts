import { Url } from 'url';
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    post(id: ID!): String!
  }
`;

const resolvers = {
  Query: {
    post: (parent: any, { id }: { id: number }) => `post ${id}`
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(9000).then(({ url }: { url: Url }) => console.log(`Server listening on ${url}`));
