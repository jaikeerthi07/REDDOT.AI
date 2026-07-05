const fs = require("fs");
const path = require("path");

const walk = dir => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith(".tsx")) {
      results.push(file);
    }
  });
  return results;
};

const files = walk("client/src");
files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  // Add loading="lazy" decoding="async" to all <img tags that don't already have loading="lazy"
  let newContent = content.replace(
    /<img(?!([^>]*?)loading="lazy")/g,
    '<img loading="lazy" decoding="async"'
  );
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, "utf8");
    console.log("Updated", file);
  }
});
