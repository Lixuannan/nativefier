import gulp from 'gulp';
import PATHS from './../helpers/src-paths';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';

gulp.task('build-cli', done => {
    return gulp.src(PATHS.CLI_SRC_JS)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', done)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});