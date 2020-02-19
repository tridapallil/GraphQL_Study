const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolver');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/graphqlnode', {
  useNewUrlParser: true
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start();
