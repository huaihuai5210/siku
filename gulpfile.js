const gulp = require('gulp'),
      rename = require('gulp-rename'),
      uglify = require('gulp-uglify'),
      cssnano = require('gulp-cssnano'),
      sass = require('gulp-sass'),
      imagemin = require('gulp-imagemin');

gulp.task('sass', () => {
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));  
})
gulp.task('js',()=>{
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'));
})
gulp.task('img',()=>{
    gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss',['sass'])
    gulp.watch('./src/js/*.js',['js'])
    gulp.watch('./src/img/*'['img'])
})
       