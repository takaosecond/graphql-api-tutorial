const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: "吾輩は猫である",
    author: "夏目漱石",
  },
  {
    title: "走れメロス",
    author: "太宰治",
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  """
  データを取得するQueryの中にbooksという項目があったらBookの配列として返すやで
  """
  type Query {
    aaa: [Book]
  }
`;

const resolvers = {
  Query: {
    aaa: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
