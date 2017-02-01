import gulp   from 'gulp'; // Подключаем gulp
import colors from 'colors'; // Подключаем цвета, для расскрашивания консоли
import * as tasks from './tasks'; // Подключаем все таски

/**
 * На вход получает конфиг компонентов и тасков
 * Генерирует все таски
 */
export default class Collector
{
	constructor(params = {})
	{
		// Получаем конфиг с компонентами
		this.parts = params.parts || [];
		// Данные для будущего отслеживания
		// в виде {src:'<что отслеживаем>', tasks:[<таски для исполнения>]}
		this._watch = [];
		// Массив имен всех тасков (для поиска дубликатов)
		this._gulpTasksNames = [];
	}

	/**
	 * Запускает формирование тасков
	 */
	run()
	{
		// Массив имен компонентов
		let partsNames = [];
		this.parts.forEach(part => {

			// Массив имен тасков для компонента
			let partTasksNames = [];
			part.tasks.forEach(task => {

				// Генерируем имя таска
				task.name = this.genTaskName(part, task);
				// Запускаем формирование таска
				this.initTask(task);
				// Записываем имя таска в нужные массивы
				partTasksNames.push(task.name);
				this._gulpTasksNames.push(task.name);

			});
			// Создаем таск для компонента
			// который будет запускать все вложенные таски
			partsNames.push(`${part.name}:build`);
			gulp.task(`${part.name}:build`, partTasksNames);

		});

		// Создаем общий таск сборки всего проекта
		gulp.task('build', partsNames);
		// Создаем таск наблюдения за изменениями
		gulp.task('watch', () => {
			this._watch.forEach(watch => {
				gulp.watch(watch.src, watch.tasks || []);
			});
		});
		// Создаем таск по умолчанию
		gulp.task('default', ['build', 'watch']);
	}

	/**
	 * Формирует таск
	 * @param config - конфиг таска
	 */
	initTask(config = {})
	{
		// Формируем имя класса по типу таска
		let taskClassName = this.constructor.genTaskClassName(config);
		// Ищем класс
		if (!tasks[taskClassName]) {
			console.log(`Task '${config.name}': class '${taskClassName}' is not found`.red);
			return;
		}
		// Запускаем формирование таска
		new tasks[taskClassName](config);
		// Записываем данные для отслеживания
		this._watch.push({
			src: config.watch,
			tasks: [config.name],
		});
	}

	/**
	 * Генерирует имя класса для таска
	 * @param config  - конфиг таска
	 * @returns {string}
	 */
	static genTaskClassName(config)
	{
		return 'Task' + config.type.charAt(0).toUpperCase() + config.type.slice(1);
	}

	/**
	 * Генерирует имя таска
	 * @param part - конфиг компонента
	 * @param task - конфиг таска
	 * @returns string
	 */
	genTaskName(part, task)
	{
		// Формируем текущее имя
		// и запоминаем как старое
		let newName = null;
		let oldName = null;
		if (task.name) {
			newName = task.name;
		} else {
			newName = `${part.name}-${task.type}:build`;
		}
		oldName = newName;

		let index = 2;
		let overlapError = false;
		// Пока у нас есть дубликаты тасков - генерим новое имя
		while (this._gulpTasksNames.indexOf(newName) >= 0) {
			newName = `${part.name}-${task.type}-${index}:build`;
			overlapError = true;
			index++;
		}
		if (overlapError) {
			console.log(`Overlap Warning! Task name '${oldName}' changed to '${newName}'`.yellow);
		}
		return newName;
	}
}