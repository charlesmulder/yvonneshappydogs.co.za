module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksShortcode("token", function() {
    return `${Date.now()}`;
  });

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/*.manifest");

};
