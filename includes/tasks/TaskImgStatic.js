import gulp from 'gulp';
import Collector from '../Collector';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import gulpif from 'gulp-if';
import imageminJpegRecompress from 'imagemin-jpeg-recompress';

export default class TaskImgStatic
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(plumber())
				.pipe(gulpif(Collector.env == 'prod', imagemin([
					//imagemin.gifsicle({interlaced: true}),
					//imagemin.jpegtran({progressive: true}),
					imageminJpegRecompress({
						min: 51,
						max: 80,
						progressive: true,
					}),
					imagemin.optipng({optimizationLevel: 7}),
					imagemin.svgo({plugins: [{removeViewBox: true}]})
				], {
					//verbose: true,
				})))
				.pipe(gulp.dest(config.dest));
		});
	}
}