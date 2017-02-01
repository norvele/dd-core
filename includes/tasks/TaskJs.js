import gulp from 'gulp';
import plumber from 'gulp-plumber';
import preprocess from 'gulp-preprocess';

export default class TaskJs
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(plumber())
				.pipe(preprocess())
				.pipe(gulp.dest(config.dest));
		});
	}
}