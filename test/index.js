/**
 * Запускает тесты библиотеки
 * !important Для SCSS тестов внутри файлов или миксинов
 * не должен содержаться вывод чего-либо
 * (ни классов, ни стилей, ни ошибок и сообщений, ни даже комментариев)
 */

const glob = require('glob');
const path = require('path');
const sassTrue = require('sass-true');

/**
 * Резолвит алиасы webpack.config
 */
function importer(url, prev, done) {
    const reg = new RegExp('~(.+?)/(.+)');
    const result = url.match(reg);

    let file = url;

    if (result && result[1] === 'lib') {
        file = path.resolve('src/lib', result[2]);
    }
    if (result && result[1] === 'test') {
        file = path.resolve('test', result[2]);
    }

    return { file };
}

const files = glob.sync('**/*.spec.scss', { absolute: true });

files.forEach((file) => {
    sassTrue.runSass({ importer, file }, describe, it);
});