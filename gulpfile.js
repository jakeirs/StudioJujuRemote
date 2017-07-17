var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var fs = require('fs-extra');

// delete build directory
gulp.task('clean', function() {
  fs.removeSync('./build');
  console.log("Success deleted");
});

//copy JS directory
gulp.task('copyJS', function(){
  var src = "./dev/assets/scripts";
  var dist = "./build/assets/scripts";
  fs.copySync(src, dist);
})

//copy img directory
gulp.task('copyImg', function(){
  var src = "./dev/assets/img";
  var dist = "./build/assets/img";
  fs.copySync(src, dist);
})


// sass
gulp.task('sass', function() {
  return gulp.src('./dev/assets/stylesheets/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded',
        errLogToConsole:true,
        includePaths: [
          './',
          './dev/assets/stylesheets',
          './node_modules/normalize-scss/sass',          
        ]
    }))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })            
    .pipe(gulp.dest('./build/assets/stylesheets/'));
});

// pug
gulp.task('pug', function() {
  return gulp.src('./dev/*.pug')
  .pipe(pug({
    pretty: true,
    doctype: 'html'
  }))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  }) 
  .pipe(gulp.dest('./build/'))
});

// browserSync
gulp.task('browser-sync', function(){
  browserSync.init(['build/assets/stylesheets/*.css', 'dev/assets/scripts/**/*.js', 'build/assets/scripts/*.js', 'build/index.html'],
    {
      server: {
        baseDir: "./build/"
      }
    });
});

// watch
gulp.task('watch', ['clean', 'copyJS', 'copyImg','sass', 'pug', 'browser-sync'], function(){
  gulp.watch(['./dev/assets/stylesheets/**/*.scss'], ['sass']);
  gulp.watch(['./dev/*.pug'], ['pug'] );
  gulp.watch(['./dev/assets/scripts/*.js'], ['copyJS']);
  gulp.watch(['./dev/assets/img/*.*'], ['copyImg'])
})