const sentence = 'hello there from lighthouse labs';

const eventLoop = (char, next) => {
  setTimeout(() => {
    process.stdout.write(char);
    next();
  }, 50);
};

let i = 0;
const eachLetter = () => {
  if (i < sentence.length) {
    eventLoop(sentence[i], eachLetter);
    i++;
  }
};

eachLetter();
