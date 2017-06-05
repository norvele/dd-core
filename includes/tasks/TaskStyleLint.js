import gulp from 'gulp';
import plumber from 'gulp-plumber';
import stylelint from 'gulp-stylelint';

export default class TaskStyleLint
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(plumber())
				.pipe(stylelint({
					reporters: [
						{
							formatter: 'string',
							console: true,
						}
					],
					debug: true,
					syntax: 'scss',
				}));
		});
	}
}