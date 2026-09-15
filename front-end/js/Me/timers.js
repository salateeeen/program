setTimeout(
  (name, eng) => {
    console.log(`my name is ${name} and im the best ${eng}`);
  },
  3000,
  `sultan`,
  `CPE`
);

const toClearTime = setTimeout(() => console.log(`to clear`),3000,);
clearTimeout(toClearTime);

const toClearInterval = setInterval((name, eng) => console.log(new Date()), 3000);
clearInterval(toClearInterval);