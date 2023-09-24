const decode = (input) =>
  input
    .replace(/(\.|\-)(\d+)/g, (_, t, val) =>
      t == "." ? "1".repeat(val) : "0".repeat(val)
    )
    .match(/([01])\1*/g)
    .map((x) => (x.length == 1 ? "." : (x.length - 2) / 2))
    .join("")
    .match(/\d+\.\d+/g)
    .map((x) => x.split("."))
    .sort((a, b) => a[1] - b[1])
    .map((x) => String.fromCharCode(x[0]))
    .join("");

const decoded = decode(
  ".4-2.4-1.4-6.1-4.2-4.1-12.1-4.2-12.1-2.1-4.2-18.1-4.4-1.4-2.18-1.6-1.4-4.4-1.8-1.4-4.6-1.16-1.4-4.12-1.4-8.1-4.4-16.1-18.1-4.4-18.1-10.1-4.6-6.1-4.2-1.4-6.6-1.20-1.8-6.1-4.1-8.6-1.14"
);

console.log(decoded);
