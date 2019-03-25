const { Blog, Tag, sequelize } = require("../../models");

describe("Many to Many Association", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  const printMagicMethods = modelInstance => {
    console.log(Object.keys(modelInstance.__proto__));
  };

  describe("Blog hasMany Tag", () => {
    test("getTags() returns Blog's Tags", async () => {
     
    });

    test("setTags() updates the Blog's tags", async () => {
     
    });
  });

  describe("Tag hasMany Blog", () => {
    test("getBlogs() returns Blogs associated to Tag", async () => {
     
    });

    test("setBlogs() updates Blogs associated to Tag", async () => {
     
    });

    test("createBlog() creates a Blog and updates Blog associated to Tag", async () => {
     
    });
  });
});
