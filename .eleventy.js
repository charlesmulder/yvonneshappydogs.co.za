module.exports = function(eleventyConfig) {

  eleventyConfig.addNunjucksShortcode("token", function() {
    return `${Date.now()}`;
  });

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.ico");
  eleventyConfig.addPassthroughCopy("*.manifest");

};
