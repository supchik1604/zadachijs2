#!/usr/bin/env node

/**
 * Главный скрипт для выполнения JavaScript задач
 * Запуск: node index.js
 */

console.log('🚀 Добро пожаловать в zadachijs2!');
console.log('📚 Коллекция JavaScript задач и упражнений');
console.log('');

// Импорт задач из папок
const fs = require('fs');
const path = require('path');

// Функция для загрузки задач из директории
function loadTasks(directory) {
    const tasks = [];
    const fullPath = path.join(__dirname, directory);
    
    if (fs.existsSync(fullPath)) {
        const files = fs.readdirSync(fullPath, { withFileTypes: true });
        
        files.forEach(file => {
            if (file.isDirectory()) {
                const taskPath = path.join(directory, file.name);
                const taskFiles = fs.readdirSync(path.join(fullPath, file.name));
                const jsFiles = taskFiles.filter(f => f.endsWith('.js'));
                
                if (jsFiles.length > 0) {
                    tasks.push({
                        name: file.name,
                        path: taskPath,
                        files: jsFiles
                    });
                }
            }
        });
    }
    
    return tasks;
}

// Загрузка всех задач
const allTasks = [
    ...loadTasks('lvl1'),
    ...loadTasks('1')
];

// Отображение доступных задач
console.log('📋 Доступные задачи:');
console.log('');

if (allTasks.length === 0) {
    console.log('❌ Задачи не найдены');
    console.log('💡 Создайте файлы .js в папках lvl1 или 1');
} else {
    allTasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.name}`);
        console.log(`   📁 Путь: ${task.path}`);
        console.log(`   📄 Файлы: ${task.files.join(', ')}`);
        console.log('');
    });
}

// Функция для выполнения конкретной задачи
function runTask(taskName) {
    const task = allTasks.find(t => t.name === taskName);
    
    if (!task) {
        console.log(`❌ Задача "${taskName}" не найдена`);
        return;
    }
    
    console.log(`\n🎯 Выполнение задачи: ${task.name}`);
    console.log('=' .repeat(50));
    
    task.files.forEach(file => {
        const filePath = path.join(__dirname, task.path, file);
        console.log(`\n📄 Запуск файла: ${file}`);
        console.log('-'.repeat(30));
        
        try {
            require(filePath);
        } catch (error) {
            console.error(`❌ Ошибка в файле ${file}:`, error.message);
        }
    });
}

// Обработка аргументов командной строки
const args = process.argv.slice(2);

if (args.length > 0) {
    const taskName = args[0];
    runTask(taskName);
} else {
    console.log('💡 Использование:');
    console.log('  node index.js                    - показать все задачи');
    console.log('  node index.js <имя_задачи>       - выполнить конкретную задачу');
    console.log('');
    console.log('🔧 Примеры:');
    console.log('  node index.js task1');
    console.log('  node index.js task2');
}
