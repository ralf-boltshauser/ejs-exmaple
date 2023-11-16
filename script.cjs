// import ejs and render index.html with the website data

const websiteData = {
  title: "My Website",
  description: "This is my website",
};

const ejs = require("ejs");
const fs = require("fs");

const indexTemplate = fs.readFileSync("./index.html", "utf8");
const renderedIndex = ejs.render(indexTemplate, websiteData);

fs.writeFileSync("./index-rendered.html", renderedIndex);
