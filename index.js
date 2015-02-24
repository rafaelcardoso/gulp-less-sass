'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var replace = require('gulp-replace');

module.exports = function (options) {

	/*if (!options.foo) {
		throw new gutil.PluginError('gulp-less-sass', '`foo` required');
	}*/

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-less-sass', 'Streaming not supported'));
			return;
		}

		/*FileContents.replace(/\/less\//g, '/scss/'); // troca as pastas less/ para to scss/ nos imports
		FileContents.replace(/\.less/g, '.scss'); // troca a extensão .less para .scss nos imports
		FileContents.replace(/@/g, '$'); // converte as variáveis
		FileContents.replace(/ e\(/g, ' unquote('); // converte função de escape
		FileContents.replace(/\.([\w\-]*)\s*\((.*)\)\s*\{/g, '@mixin $1($2){'); // transforma os hooks em mixins
		FileContents.replace(/@mixin ([\w\-]*)\s*\((.*)\)\s*\{\s*\}/g, '// @mixin $1($2){}'); // comenta mixins vazios
		FileContents.replace(/\.(hook[a-zA-Z\-\d]+);/g, '@include $1();'); // troca os hooks por include
		FileContents.replace(/\$(import|media|font-face|page|-ms-viewport|keyframes|-webkit-keyframes)/g, '@$1'); // substitui '@' válidos
		FileContents.replace(/(\$[\w\-]*)\s*:(.*);\n/g, '$1: $2 !default;\n'); // transforma as variáveis em opcionais
		FileContents.replace(/\$\{/g, '#{$'); // string literals: from: /~"(.*)"/g, to: '#{"$1"}'
		FileContents.replace(/~("[^"]+")/g, 'unquote($1)'); // string literals: for real*/

		try {
			var processedFile = function(FileContents, opt){
				console.log('FileContents', FileContents);
				FileContents = FileContents.replace(/@/g, '---');
				console.log('FileContents', FileContents);
				return FileContents;
			}(file.contents.toString(), options);
			file.contents = new Buffer(processedFile);
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-less-sass', err));
		}

		cb();
	});
};
