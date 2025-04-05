module.exports = {
    GraphQLClient: jest.fn(() => ({
      request: jest.fn(),
    })),
    gql: jest.fn()
  };