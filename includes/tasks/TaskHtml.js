import gulp from 'gulp';
import plumber from 'gulp-plumber';
import htmlExtend from 'gulp-html-extend';

export default class TaskHtml
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(plumber())
				.pipe(htmlExtend())
				.pipe(gulp.dest(config.dest));
		});
	}
}