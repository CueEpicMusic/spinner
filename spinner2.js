process.stdout.write("hello from spinner1.js... \rheyyy\n");

const sentence = "|/-\\|/-\\|";
let x = 1;

const spinner = function () {
  setTimeout(() => {
    process.stdout.write(`\r${sentence[x++]}     `);
    if (x < sentence.length) spinner();
    if (x === sentence.length) process.stdout.write(`\n`);
  }, 200);
};

spinner();
