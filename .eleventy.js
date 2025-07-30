module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./src/css/");
  
  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data", 
      output: "_site"
    },
    
    // Control which files are processed by Eleventy
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],
    
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",
    
    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",
    
    // These are all optional:
    dataTemplateEngine: "njk"
  };
};
