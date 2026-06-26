# Grooming Salon

Next.js сайт груминг-салона в Павловском Посаде. Стек: Next.js App Router, TypeScript, Tailwind CSS v4, CSS variables/tokens, Supabase-ready API.

## Запуск

```bash
npm install
npm run dev
```

Локально сайт открывается на `http://127.0.0.1:3000` или на свободном порту, который покажет Next.js.

## Где менять контент

- Тексты, адрес, ссылки, услуги, цены, блог и галерея: `src/data/site.ts`
- Цвета, радиусы, тени, типографика и базовые секционные стили: `src/app/globals.css`
- Логика формы заявки: `src/app/api/booking/route.ts`
- Фото сайта: `public/media`

## Цветовые токены

Основные переменные лежат в `src/app/globals.css`:

- `--color-page`
- `--color-surface`
- `--color-text`
- `--color-muted`
- `--color-accent`
- `--color-accent-soft`
- `--radius-card`
- `--shadow-soft`

Меняй семантические токены, а не отдельные классы в компонентах. Так можно быстро перевести сайт в другой стиль без ручного поиска цветов по проекту.

## Фото

Для фотографий используй `WebP` или `AVIF`. Не экспортируй фотографии в `PNG`, если нет прозрачности: PNG будет тяжелее и медленнее.

Практичный экспорт:

- WebP quality `75-82`
- длинная сторона `1400-1800px` для больших фото
- превью `500-800px` для карточек
- PNG только для логотипов, иконок и прозрачных элементов

## Supabase

Форма работает без Supabase в демо-режиме. Чтобы сохранять заявки:

1. Создай таблицу из `supabase/schema.sql`.
2. Добавь переменные из `.env.example` в `.env.local`.
3. Перезапусти dev-сервер.

## Проверка

```bash
npm run typecheck
npm run build
```
