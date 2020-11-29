const btoa = require("btoa");

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
    async createLink(root, { name, url, slug }, { models }) {
      return models.Link.create({
        name,
        url,
        slug: slug || btoa(url).slice(0, 10)
      });
    }
  }
};

module.exports = resolvers;
