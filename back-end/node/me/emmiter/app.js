const eventEmitter = require('events');

const myEmitter = new eventEmitter();

///as an event listener
myEmitter.on('my_event', () => {
  console.log('data received successfully.');
});

myEmitter.on('my_event', (data) => {
  console.log(`the ${data} received successfully.`);
});

///as a click
myEmitter.emit('my_event');
myEmitter.emit('my_event', `text`);