import gulp from 'gulp';
import Collector from '../Collector';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

export default class TaskJs
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			let srcArray = [];
			if (!Array.isArray(config.src)) {
				srcArray = [config.src];
			} else {
				srcArray = config.src;
			}
			srcArray.forEach(function(src) {
				let filename = src.replace(/^.*[\\\/]/, '');
				browserify({entries: src, debug: true})
					.transform("babelify", { presets: ["es2015"] })
					.bundle()
					.pipe(source(filename))
					//.pipe(gulpif(Collector.env == 'prod', streamify(uglify())))
					.pipe(gulp.dest(config.dest));
			});
		});
	}
}