"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task("sass", function() {
  return gulp
    .src("./dev/sass/**/*.scss")
    .pipe(sass()
    .on("error", sass.logError)
  )
    .pipe(gulp.dest("./app/css"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("serv", function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    },
    notify: false
  });
  browserSync.watch("./app", browserSync.reload);
});

gulp.task('watch', function() {
  gulp.watch('./dev/sass/**/*.scss', gulp.series('sass'))
});

gulp.task('default', gulp.series(
  gulp.parallel('sass'),
  gulp.parallel('watch', 'serv')
));