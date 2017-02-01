import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

export default class TaskSass
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(plumber())
				.pipe(sass())
				.pipe(autoprefixer())
				.pipe(gulp.dest(config.dest));
		});
	}
}