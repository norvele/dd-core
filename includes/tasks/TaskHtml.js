import gulp from 'gulp';
import plumber from 'gulp-plumber';
import htmlExtend from 'gulp-html-extend';
import handlebars from 'gulp-handlebars';
import wrap from 'gulp-wrap';
import declare from 'gulp-declare';
import concat from 'gulp-concat';

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