import gulp from 'gulp';
import sassdoc from 'sassdoc';

export default class TaskSassDoc
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(sassdoc({
					dest: config.dest,
				}));
		});
	}
}