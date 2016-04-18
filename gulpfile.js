var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	livereload = require('gulp-livereload'),
	server = require('gulp-develop-server'),
	htmlmin = require('gulp-htmlmin');

gulp.task('buildReact', function () {
    return browserify({entries: './client/index.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./client/dist'))
        .pipe(livereload());
});

gulp.task('buildHTML', function() {
  return gulp.src('client/*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true, caseSensitive: true}))
    .pipe(gulp.dest('client/dist'))
    .pipe(livereload());
});

gulp.task('server', function() {
    server.listen({path: 'server.js'});
});

gulp.task('watch', function () {
	livereload.listen();

    gulp.watch('client/**/*.jsx', ['buildReact']);
    gulp.watch('*.html', ['buildHTML']);
    gulp.watch(['*.js' ], server.restart);
});

gulp.task('default', ['buildHTML', 'buildReact', 'server', 'watch']);