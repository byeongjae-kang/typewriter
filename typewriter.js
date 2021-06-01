const sentence = 'hello there from lighthouse labs';
let i = 0;

const eventLoop = (char, next) => {
  setTimeout(() => {
    process.stdout.write(char);
    i++;
    if (i < sentence.length) {
      next();
    }
  }, 50);
};

const eachLetter = () => {
  eventLoop(sentence[i], eachLetter);
};

eachLetter();
