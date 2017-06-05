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
					src: `${roots.src}/lib/main.scss`,
					dest: `${roots.dest}/lib/css/`,
					watch: [
						`${roots.src}/lib/**/*.scss`,
					],
				},
				{
					type: 'js',
					src: `${roots.src}/lib/main.js`,
					dest: `${roots.dest}/lib/js/`,
					watch: `${roots.src}/lib/components/**/*.js`,
				},
				{
					type: 'copy',
					name: 'lib-copyImages',
					src: `${roots.src}/lib/components/**/*.svg`,
					dest: `${roots.dest}/lib/img/`,
					watch: `${roots.src}/lib/components/**/*.svg`
				},
				{
					type: 'styleTest',
					src: `${roots.src}/lib/tests/main.scss`,
					watch: [
						`${roots.src}/lib/components/!**!/!*.scss`,
						`${roots.src}/lib/tests/!**!/!*.*`
					],
				},
				{
					type: 'styleLint',
					src: `${roots.src}/lib/**/*.scss`,
					watch: [
						`${roots.src}/lib/**/*.scss`,
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
						`${roots.src}/lib/**/*.scss`,
					],
				},
				{
					type: 'js',
					src: `${roots.src}/example/js/main.js`,
					dest: `${roots.dest}/example/js/`,
					watch: [
						`${roots.src}/example/js/**/*.*`,
						`${roots.src}/lib/**/*.js`,
					],
				},
				{
					type: 'copy',
					name: 'example-copyLibImages',
					src: `${roots.src}/lib/components/**/*.svg`,
					dest: `${roots.dest}/example/img/`,
					watch: `${roots.src}/lib/components/**/*.svg`
				},
			],
		}
	],

});

collector.run();