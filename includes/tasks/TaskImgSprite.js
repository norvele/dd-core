import gulp from 'gulp';
import plumber from 'gulp-plumber';
import spritesmith from 'gulp.spritesmith';

export default class TaskImgSprite
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			var sprite = gulp.src(config.src)
				.pipe(plumber())
				.pipe(spritesmith({
					imgName: config.imgName || 'sprite.png',
					cssName: config.cssName || 'sprite.css',
					imgPath: config.imgPath || null,
				}));
			sprite.img.pipe(gulp.dest(config.spriteDest));
			sprite.css.pipe(gulp.dest(config.cssDest));
		});
	}
}