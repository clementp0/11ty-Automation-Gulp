const gulp      = require("gulp");
const postcss   = require("gulp-postcss");
const precss    = require('precss');
const cssnano   = require('cssnano');




gulp.task('css', function () {
  return gulp.src('assets/css/*.css')
    .pipe(postcss([precss, cssnano] ))
    .pipe(gulp.dest('../EleventyMeetup_output/assets/css'));
});


gulp.task("watch", function() {
  gulp.watch('assets/css/*.css', gulp.parallel('css'));
});


gulp.task('build', gulp.series(
  'css'
));
