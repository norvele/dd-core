import gulp from 'gulp';
import sass from 'gulp-sass';

export default class TaskStyleTest
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(sass());
		});
	}
}