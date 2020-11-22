const resolvers = {
  Query: {
    async getLinks(root, args, { models }) {
      return models.Link.findAll();
    },
    async getLink(root, { id }, { models }) {
      return models.Link.findById(id);
    }
  },
  Mutation: {
    async createLink(root, { name, url }, { models }) {
      return models.Link.create({
        name,
        url
      });
    }
  }
};

module.exports = resolvers;
