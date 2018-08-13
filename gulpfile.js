"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task('default', function(){
  // watch me getting Sassy
  gulp.watch("./sass/**/*.scss", function(event){
    gulp.run('sass');
  });
});