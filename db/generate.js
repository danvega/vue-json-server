module.exports = function() {
  var faker = require("faker");
  var _ = require("lodash");

  return {
    people: _.times(100, function(n) {
      return {
        id: n + 1,
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        bio: faker.lorem()
      };
    })
  };
};
