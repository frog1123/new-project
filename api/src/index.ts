import { Url } from 'url';
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    post: String!
  }
`;

const resolvers = {
  Query: {
    post: () => 'post cool'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(9000).then(({ url }: { url: Url }) => console.log(`Server listening on ${url}`));
