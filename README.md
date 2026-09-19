# Portfolio

Сайт-портфолио на React, TypeScript и Tailwind CSS.

- [Макет в Figma](https://www.figma.com/design/sEcSxhRnLbVaHHme9GwcoR/Portfolio?node-id=164-1127).
- [План реализации](docs/implementation-plan.md).
- [Аудит макета](docs/design-audit.md).

## Состояние проекта

Подготовлены файлы планирования и `.gitignore`. Исходный код приложения и зависимости пока не созданы.

Создан пустой локальный Git-репозиторий; `HEAD` указывает на `main`. Коммитов и удалённого репозитория нет. После установки Apple Command Line Tools проверены `git --version`, `git status` и `git symbolic-ref HEAD`: Git работает и распознаёт репозиторий.

Figma подключён. Через MCP исследованы структура страницы, главная desktop/mobile, состояния интерфейса и категория «Сайты»; изучена структура кейсов и отдельные блоки «Волны». План уточнён: главная, шесть категорий, двенадцать фреймов кейсов. В аудите отмечены незавершённые материалы и границы исследования.

## Подготовка окружения

Apple Command Line Tools установлены, Git работает. `node` и `npm` пока не найдены в PATH.

1. Установить поддерживаемую LTS-версию Node.js, совместимую с выбранным Vite.
2. Проверить `node --version` и `npm --version`.
3. После проверки файлов создать первый коммит: `git add .gitignore README.md docs/implementation-plan.md docs/design-audit.md`, затем `git commit -m "docs: add portfolio design audit and implementation plan"`. Git должен иметь настроенные имя и email автора.

Команды запуска сайта появятся после создания приложения.
