# Тестовое задание - приложение, отображающее таблицу с суточной динамикой добычи нефти
# [![Actions Status](https://github.com/danilaprokoshev/severnoe/workflows/CI/badge.svg)](https://github.com/danilaprokoshev/severnoe/actions)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white&style=for-the-badge)

> Пример использования приложения.

![screenshot](./src/assets/example.png)

## Описание

Это приложение **Severnoe** создано рамках выполнения тестового задания. Исполнено для работы в браузере. Оно отображает таблицу с суточной динамикой добычи нефти (т/сут) и воды (м3/сут) на месторождении «Северное» за период 01 – 31 января 2023 г.

Данные можно загрузить:
- путем запроса по REST API;
- копированием данных из таблицы Excel;
  - либо нажатием на клавиатуре сочетания клавиш Ctrl-V;
  - либо нажатием кнопки "Скопировать из буфера обмена".

Также можно очистить ранее загруженные данные.
При рефреше страницы данные сохраняются.

## Использованные технологии:

- [React](https://ru.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [PrimeReact](https://primereact.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## Начало работы

Склонируйте репозиторий (сделайте локальную копию) и выполните следующие простые шаги.

### Установка

1. Скачайте или склонируйте репозиторий
2. Перейдите в корневой директорию проекта
3. Установите зависимости:

- `npm install` или `yarn`

## Скрипты

### Запустить dev server

- `npm run dev` или `yarn run dev` и откройте в браузере `http://localhost:5173`

### Запустить линтер:

- `npm run lint` или `yarn lint`

### Запустить prettier:

- `npm run fix:prettier` или `yarn fix:prettier`

## Идеи для улучшения:
- внедрение интернационализации
- добавление тестов
- редактирование отдельных ячеек
