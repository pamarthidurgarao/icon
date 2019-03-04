const webfontsGenerator = require('webfonts-generator');

webfontsGenerator({
  files: [
    'src/meetup.svg',
  ],
  dest: 'dest/',
}, function(error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
})