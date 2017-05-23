import Collector from './includes/Collector';

var roots = {
	src:  'src',
	dest: 'build',
};

var collector = new Collector({

	parts: [
		{
			name: 'lib',
			tasks: [
				{
					type: 'sass',
					src: `${roots.src}/lib/sass/main.scss`,
					dest: `${roots.dest}/lib/css/`,
					watch: `${roots.src}/lib/sass/**/*.*`,
				},
				{
					type: 'js',
					src: `${roots.src}/lib/js/main.js`,
					dest: `${roots.dest}/lib/js/`,
					watch: `${roots.src}/lib/js/**/*.*`,
				},
				{
					type: 'test',
					src: `${roots.src}/lib/sass/tests/main.scss`,
					watch: [
						`${roots.src}/lib/sass/!**!/!*.*`,
						`${roots.src}/lib/sass/tests/!**!/!*.*`
					],
				},
			],
		},
		{
			name: 'example',
			tasks: [
				{
					type: 'html',
					src: `${roots.src}/example/*.html`,
					dest: `${roots.dest}/example/`,
					watch: `${roots.src}/example/**/*.html`,
				},
				{
					type: 'sass',
					src: `${roots.src}/example/sass/main.scss`,
					dest: `${roots.dest}/example/css/`,
					watch: [
						`${roots.src}/example/sass/**/*.*`,
						`${roots.src}/lib/sass/**/*.*`,
					],
				},
				{
					type: 'js',
					src: `${roots.src}/example/js/main.js`,
					dest: `${roots.dest}/example/js/`,
					watch: `${roots.src}/example/js/**/*.*`,
				},
			],
		}
	],

});

collector.run();