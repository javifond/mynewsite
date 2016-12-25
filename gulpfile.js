const fs = require('fs')
      gulp = require('gulp'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      del = require('del'),
      cssnano = require('cssnano'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util'),
      source = require('vinyl-source-stream'),
      browserify = require('browserify'),
      watchify = require('watchify'),
      reactify = require('reactify'),
      notifier = require('node-notifier'),
      watch = require('gulp-watch'),
      rename = require('gulp-rename');

const paths = {
    sass: './css/sass/**/*.scss'
};

const notify = function (error) {
  const message = 'In: ',
        title = 'Error: ',
        file = null;

  if (error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if (error.filename) {
    file = error.filename.split('/');
    message += file[file.length-1];
  }

  if (error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};

const bundler = watchify(browserify({
  entries: ['./src/app.jsx'],
  transform: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle () {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('js/main.js'))
    .pipe(gulp.dest('./'));
}

bundler.on('update', bundle);

gulp.task('build', function () {
  bundle();
});

gulp.task('clean', () => del(['./css/dist/styles.min.css', './css/dist/styles.min.css.map' ]));

gulp.task('sass', () =>
    gulp.src(paths.sass)
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(postcss([autoprefixer({ browsers: [
            'last 2 versions',
            'Android 4.4',
            'ie 10-11',
            'ios_saf 8'
        ] })], cssnano()))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css/dist/'))
);

gulp.task('watch', () => {
    gulp.watch(paths.sass, ['clean', 'sass']);
});

gulp.task('default', ['build', 'clean', 'sass']);

//TODO[JB]: Implement liveReload and modularise tasks into other files.

