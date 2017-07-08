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
				/*.pipe(handlebars())
				.pipe(wrap('Handlebars.template(<%= contents %>)'))
				.pipe(declare({
					namespace: 'app.templates',
					noRedeclare: true, // Avoid duplicate declarations
				}))
				.pipe(concat('templates.js'))*/
				.pipe(htmlExtend())
				.pipe(gulp.dest(config.dest));
		});
	}
}