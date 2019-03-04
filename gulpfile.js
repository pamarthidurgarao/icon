const { task } = require('gulp');
const webfontsGenerator = require('webfonts-generator');

task('build', function (cb) {
    webfontsGenerator({
        files: [
            'src/meetup.svg',
        ],
        dest: 'dest/',
    }, function (error) {
        if (error) {
            console.log('Fail!', error);
        } else {
            console.log('Done!');
        }
    })
    cb();
});