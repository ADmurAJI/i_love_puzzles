const encode = (input) =>
  [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap((x) => x)
    .join(".")
    .match(/./g)
    .flatMap((x, i) => new Array(x == "." ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join("")
    .replace(/(([01])\2*)/g, (x) => `${+x ? "." : "-"}${x.length}`);

let encodedString = encode("Hello, World!!!");
console.log(encodedString);

(".4-2.2-1.4-4.1-4.2-4.1-4.1-4.2-18.1-4.2-1.4-2.18-1.6-1.4-2.18-1.8-1.4-4.4-1.10-1.4-4.4-1.18-1.4-4.10-1.20-1.8-6.1-14.1-8.8-1.4-6.1-8.8-1.4-8.1-8.8-1.4-10.1-10.10-1.12-1.16-6.1-2.1-18.16-1.16");
