// Template literals are sometimes informally called template strings,Template literals are literals delimited with backtick (``) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

function item() {
  return `This is the template literals, ${2 + 2} is the addition of 2 and 2.`;
}

console.log(item());

const firstName = "Harsh";
const secondName = "Ninave";
console.log(`Hello my name is ${firstName} ${secondName} and I'll be 19 on 4th of november`);
