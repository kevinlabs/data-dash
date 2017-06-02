/* ============================================================================= */
/* ======================== START: Gulp File =================================== */
/* ============================================================================= */

//this brings in all the needed functionality for the tasks to run.
//if you have not run NPM install none of the tasks will work
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  annotate = require('gulp-ng-annotate'),
  sourcemaps = require('gulp-sourcemaps'),
  CacheBuster = require('gulp-cachebust'),
  print = require('gulp-print'),
  babel = require('gulp-babel'),
  replace = require('gulp-replace'),
  //uncomment line below if we are using bower packge manager files.
  //mainBowerFiles = require('main-bower-files'),
  rename = require('gulp-rename');

var cachebust = new CacheBuster();

const inputPaths = {
  jsSource: './client_source/app/**/*.js',
  sassSource: './client_source/css/**/*.scss',
  cssSource: './client_source/css/**/*.css',
  cssPlugin: './client_source/css_plugin/**/*.css',
  viewsSource: './client_source/views/**/*.html',
  indexSource: './client_source/index.html',
  picturesSource: './client_source/img/**/*',
  fontSource: './client_source/fonts/**/*'
};

const outputPaths = {
  jsSource: './public_dist',
  sassSource: './public_dist/css',
  cssSource: './public_dist/css',
  cssPlugin: './public_dist/css/css_plugin',
  viewsSource: './public_dist/views',
  indexSource: './public_dist',
  picturesSource: './public_dist/img',
  fontSource: './public_dist/fonts'
};

//cssPlugin
gulp.task('copy:cssPlugin', function () {
  return gulp.src([inputPaths.cssPlugin])
    .pipe(gulp.dest(outputPaths.cssPlugin));
});

//CSS
gulp.task('build-css', function () {
    return gulp.src(inputPaths.cssSource)
        .pipe(sourcemaps.init())
        //Source maps is debugging thing. it's helping us to read.
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(outputPaths.cssSource));
});


//SASS task, this compiles and compresses from SCSS fiels to a css file
gulp.task('sass', function () {
    return gulp.src(inputPaths.sassSource)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(outputPaths.sassSource));
});

//JS task This will convert all ES6 to ES5
//This compile and compress all js files in to one
gulp.task('js', function () {
    return gulp.src(inputPaths.jsSource)
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(annotate())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputPaths.jsSource));
});

//this task will compress all of your views but will not compile them into one.
//the views need to be seperate files for ui-router to work.
gulp.task('views', function () {
    gulp.src(inputPaths.viewsSource)
        .pipe(gulp.dest(outputPaths.viewsSource));
});

//This task makes a copy of your index.html and compresses it and moves it to the dist folder
gulp.task('index', function () {
    gulp.src(inputPaths.indexSource)
        .pipe(gulp.dest(outputPaths.indexSource));
});

//this task copies all your pictures over to the dist folder.
gulp.task('img', function () {
    gulp.src(inputPaths.picturesSource)
        .pipe(gulp.dest(outputPaths.picturesSource));
});

gulp.task('copy:fonts', function () {
    return gulp.src(inputPaths.fontSource)
        .pipe(gulp.dest(outputPaths.fontSource));
});

//this watches all the files in the specified locations, if any files change it will recompile
//This wont watch newly created files while gulp is running, if you make a new file stop gulp with ctrl-c and re-run.
gulp.task('watch', function () {
    gulp.watch(inputPaths.jsSource, ['js']);
    gulp.watch(inputPaths.cssSource, ['build-css']);
    gulp.watch(inputPaths.sassSource, ['sass']);
    gulp.watch(inputPaths.cssPlugin, ['copy:cssPlugin']);
    gulp.watch(inputPaths.indexSource, ['index']);
    gulp.watch(inputPaths.viewsSource, ['views']);
    gulp.watch(inputPaths.picturesSource, ['img']);
    gulp.watch(inputPaths.fontSource, ['copy:fonts']);
});

//when you type gulp and run it in the command like this is the default task that runs.
//this will run all the tasks listed in the array in order. when its done it watches for changes and will recompile if anything changes.

gulp.task('default', ['js', 'sass', 'index', 'views', 'img', 'copy:fonts', 'build-css', 'copy:cssPlugin',
    'watch'
]);

/* ============================================================================= */
/* ======================== END: Gulp File ===================================== */
/* ============================================================================= */
