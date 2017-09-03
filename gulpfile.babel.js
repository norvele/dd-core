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
					src: `${roots.src}/lib/index.scss`,
					dest: `${roots.dest}/lib/css/`,
					watch: [
						`${roots.src}/lib/**/*.scss`,
					],
				},
				{
					type: 'js',
					src: `${roots.src}/lib/index.js`,
					dest: `${roots.dest}/lib/js/`,
					watch: [
						`${roots.src}/lib/components/**/*.js`,
					],
				},
				{
					type: 'sassDoc',
					src: `${roots.src}/lib/**/*.scss`,
					dest: `${roots.dest}/docs/`,
					watch: [
						`${roots.src}/lib/**/*.scss`,
					],
				},
				/*{
					type: 'styleTest',
					src: `${roots.src}/lib/tests/index.scss`,
					watch: [
						`${roots.src}/lib/components/!**!/!*.scss`,
						`${roots.src}/lib/tests/!**!/!*.*`,
					],
				},*/
				/*{
					type: 'styleLint',
					src: `${roots.src}/lib/!**!/!*.scss`,
					watch: [
						`${roots.src}/lib/!**!/!*.scss`,
					],
				},*/
			],
		},
		{
			name: 'example',
			tasks: [
				{
					type: 'sass',
					src: `${roots.src}/example/sass/index.scss`,
					dest: `${roots.dest}/example/css/`,
					watch: [
						`${roots.src}/example/**/*.scss`,
						`${roots.src}/lib/**/*.scss`,
					],
				},
				{
					type: 'js',
					src: `${roots.src}/example/js/index.js`,
					dest: `${roots.dest}/example/js/`,
					watch: [
						`${roots.src}/example/**/*.js`,
						`${roots.src}/lib/components/**/*.js`
					],
				},
				{
					type: 'html',
					src: `${roots.src}/example/html/*.html`,
					dest: `${roots.dest}/example/`,
					watch: [
						`${roots.src}/example/**/*.html`,
					],
				},
			],
		},
	],
});

collector.run();