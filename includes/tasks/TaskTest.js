import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';

export default class TaskTest
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				//.pipe(plumber())
				.pipe(sass());
		});
	}
}