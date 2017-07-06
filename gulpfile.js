var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');
var fs = require('fs-extra');

var paths = {
  scss: './stylesheets/*.scss'
};

// delete build directory
gulp.task('clean', function() {
  fs.removeSync('./build');
  console.log("Success deleted");
});

//copy JS directory
gulp.task('copyJS', function(){
  var src = "./dev/app";
  var dist = "./build/app";
  fs.copySync(src, dist);
})

// sass
gulp.task('sass', function() {
  return gulp.src('./dev/stylesheets/*.scss')
    .pipe(sass({
        outputStyle: 'expanded',
        errLogToConsole:true,
        includePaths: [
          './',
          './node_modules/foundation-sites/scss',
          './dev',
          './dev/stylesheets'
        ],
        loadPath: ['node_modules/foundation-sites/scss']
    }))
            
    .pipe(gulp.dest('./build/stylesheets/'));
});

// pug
gulp.task('pug', function() {
  return gulp.src('./dev/*.pug')
  .pipe(pug({
    pretty: true,
    doctype: 'html'
  }))
  .pipe(gulp.dest('./build/'))
});

// browserSync
gulp.task('browser-sync', function(){
  browserSync.init(['build/stylesheets/*.css', 'dev/app/*.js', 'build/app/*.js', 'build/index.html'],
    {
      server: {
        baseDir: "./build/"
      }
    });
});

// watch
gulp.task('watch', ['clean', 'copyJS','sass', 'pug', 'browser-sync'], function(){
  gulp.watch(['./dev/stylesheets/**/*.scss'], ['sass']);
  gulp.watch(['./dev/*.pug'], ['pug'] );
  gulp.watch(['./dev/app/*.js'], ['copyJS'])
})