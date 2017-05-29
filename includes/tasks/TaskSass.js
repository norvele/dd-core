import gulp from 'gulp';
import Collector from '../Collector';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import csso from 'gulp-csso';
import gulpif from 'gulp-if';

export default class TaskSass
{
	constructor(config = {})
	{
		gulp.task(config.name, () => {
			gulp.src(config.src)
				.pipe(plumber())
				//.pipe(sourcemaps.init())
				.pipe(sass())
				.pipe(autoprefixer({
					browsers: [
						'safari >= 6',
						'ie >= 10',
						'Edge >= 12',
						'ff >= 41',
						'Chrome >= 45',
						'Opera >= 32'
					]
				}))
				.pipe(gulpif(Collector.env == 'prod', csso()))
				//.pipe(sourcemaps.write())
				.pipe(gulp.dest(config.dest));
		});
	}
}