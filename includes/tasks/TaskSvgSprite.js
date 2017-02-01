import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgSymbols from 'gulp-svg-symbols';

export default class TaskSvgSprite
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {

			gulp.src(config.src)
				.pipe(plumber())
				.pipe(gulp.dest(config.rawDest));

			var stream2 = gulp.src(config.src)
				.pipe(plumber())
				.pipe(svgSymbols({
					templates: config.templates,
				}));
			if (Object.prototype.toString.call(config.spriteDest) === '[object Array]') {
				config.spriteDest.forEach(dest => {
					stream2.pipe(gulp.dest(dest));
				});
			} else {
				stream2.pipe(gulp.dest(config.spriteDest));
			}
		});
	}
}