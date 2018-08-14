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
    .pipe(gulp.dest("./app/css"));
});

gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  })
});

gulp.task('default', function() {
  gulp.watch('./dev/sass/**/*.scss', gulp.series('sass'));
})