# gulp-less-sass [![Build Status](https://travis-ci.org/rafaelcardoso/gulp-less-sass.svg?branch=master)](https://travis-ci.org/rafaelcardoso/gulp-less-sass)

> My stupendous gulp plugin


## Install

```
$ npm install --save-dev gulp-less-sass
```


## Usage

```js
var gulp = require('gulp');
var lessSass = require('gulp-less-sass');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(lessSass())
		.pipe(gulp.dest('dist'));
});
```


## API

### lessSass(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Rafael Cardoso](https://github.com/rafaelcardoso)
