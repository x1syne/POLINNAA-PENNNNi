import type { Icon } from "@phosphor-icons/react";
import {
  Cat,
  ChatCircleText,
  Certificate,
  CalendarCheck,
  Dog,
  Heart,
  MapPin,
  PawPrint,
  Scissors,
  ShieldCheck,
  Sparkle,
  Star,
} from "@phosphor-icons/react/dist/ssr";

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceGroup = {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
  note: string;
  tiers: Array<{
    title: string;
    rows: Array<{
      name: string;
      description: string;
      price: string;
    }>;
  }>;
};

export type StatCard = {
  label: string;
  value: string;
  detail: string;
  icon: Icon;
};

export type Feature = {
  title: string;
  text: string;
  icon: Icon;
};

export const site = {
  brand: "Grooming Salon",
  shortBrand: "GROOM",
  city: "Павловский Посад",
  address: "Песчаный переулок, 2",
  district: "Павловский Посад",
  telegram: "https://t.me/groomsalooon",
  managerTelegram: "https://t.me/elizavetapooopi",
  vk: "https://vk.ru/club236847987",
  maps: "https://yandex.ru/maps/org/grooming_salon/120274260204?si=cz88pj3qdjz98yeb4r0p9mqnum",
  hero: {
    eyebrow: "Сертифицированные грумеры Саша и Лиза",
    title: "Груминг без спешки и стресса",
    text: "Стрижки, гигиена, мытье, экспресс-линька и уход для собак и кошек. Работаем аккуратно, смотрим на реакцию питомца и подбираем темп под его характер.",
    image: "/media/hero-dog.webp",
    imageAlt: "Шпиц после ухода в груминг-салоне",
    metric: "Салон открыт в 2026 году",
  },
  nav: [
    { label: "Собаки", href: "/dogs" },
    { label: "Кошки", href: "/cats" },
    { label: "Услуги", href: "/services" },
    { label: "Работы", href: "/works" },
    { label: "Медиа", href: "/media" },
    { label: "О нас", href: "/about" },
    { label: "Блог", href: "/blog" },
    { label: "Контакты", href: "/contacts" },
  ] satisfies NavItem[],
  services: [
    {
      id: "spitz",
      label: "Шпиц",
      image: "/media/service-spitz.webp",
      imageAlt: "Белый шпиц на грумерском столе",
      note: "Для пушистых пород важны вычес, сушка по шерсти и аккуратная форма без лишнего среза объема.",
      tiers: [
        {
          title: "Шпиц до 30 см",
          rows: [
            {
              name: "Комплекс со стрижкой",
              description: "Мытье, сушка, когти, уши, глаза, гигиена интимной зоны, форма ножницами.",
              price: "от 4 600 ₽",
            },
            {
              name: "Гигиена и мытье-сушка",
              description: "Базовый уход между полными комплексами, поддержание чистоты и объема.",
              price: "от 3 500 ₽",
            },
            {
              name: "Подготовка к выставке",
              description: "Детальная работа с силуэтом, шерстью и финишным объемом.",
              price: "от 6 200 ₽",
            },
          ],
        },
      ],
    },
    {
      id: "york",
      label: "Йорк",
      image: "/media/service-york.webp",
      imageAlt: "Йоркширский терьер после стрижки",
      note: "Йоркам подбираем силуэт под образ жизни: коротко и удобно или мягкая модельная форма.",
      tiers: [
        {
          title: "Йоркширский терьер",
          rows: [
            {
              name: "Модельная стрижка",
              description: "Полный комплекс, корпус, лапки, мордочка, когти, уши и глаза.",
              price: "от 3 800 ₽",
            },
            {
              name: "Гигиенический комплекс",
              description: "Мытье, сушка, интимная зона, лапки, когти, уши и глаза.",
              price: "от 2 900 ₽",
            },
          ],
        },
      ],
    },
    {
      id: "cat",
      label: "Кошки",
      image: "/media/service-cat.webp",
      imageAlt: "Черная кошка в руках мастера",
      note: "С кошками работаем мягко, без лишней фиксации и только по состоянию питомца.",
      tiers: [
        {
          title: "Кошки",
          rows: [
            {
              name: "Вычес и разбор колтунов",
              description: "Аккуратная работа с шерстью, оценка состояния кожи, рекомендации домой.",
              price: "от 2 500 ₽",
            },
            {
              name: "Гигиена",
              description: "Когти, уши, глаза и локальные зоны, если питомец спокойно переносит процедуру.",
              price: "от 1 400 ₽",
            },
          ],
        },
      ],
    },
  ] satisfies ServiceGroup[],
  features: [
    {
      title: "Комфорт важнее скорости",
      text: "Мастер следит за реакцией питомца, делает паузы и не работает через сильный стресс.",
      icon: ShieldCheck,
    },
    {
      title: "Салонный уход и советы домой",
      text: "После процедуры объясняем, как поддерживать шерсть, уши, когти и кожу между визитами.",
      icon: Sparkle,
    },
    {
      title: "Для собак и кошек",
      text: "Стрижки, гигиена, вычес, экспресс-линька, мытье и аккуратная работа с колтунами.",
      icon: PawPrint,
    },
  ] satisfies Feature[],
  gallery: [
    { src: "/media/gallery-corgi.webp", alt: "Корги после груминга", label: "Корги" },
    { src: "/media/gallery-shiba.webp", alt: "Сиба-ину на столе", label: "Сиба-ину" },
    { src: "/media/gallery-terrier.webp", alt: "Черный терьер после ухода", label: "Терьер" },
    { src: "/media/gallery-spaniel-after.webp", alt: "Спаниель после стрижки", label: "Спаниель" },
  ],
  posts: [
    {
      title: "Почему груминг - это комфорт, а не стресс",
      slug: "gruming-bez-stressa",
      date: "Из канала салона",
      readTime: "4 мин",
      image: "/media/blog-care.webp",
      alt: "Памятка по уходу за шерстью",
      excerpt: "Как сделать визит спокойнее и почему хороший груминг начинается с темпа, доверия и пауз.",
      content: [
        "Груминг не должен быть испытанием для питомца. Хороший визит начинается с того, что мастер смотрит на реакцию животного и подбирает темп процедуры.",
        "Если питомец осторожничает, лучше сделать паузу, дать освоиться и продолжить мягче. Так формируется доверие к столу, фену, воде и рукам мастера.",
        "Дома помогает простая подготовка: спокойно трогать лапы, уши, мордочку, иногда включать негромкий фен и хвалить за спокойное поведение.",
      ],
      telegramUrl: "https://t.me/groomsalooon",
    },
    {
      title: "Зачем регулярно стричь когти",
      slug: "kogti-i-gigiena",
      date: "Советы по уходу",
      readTime: "3 мин",
      image: "/media/blog-claws.webp",
      alt: "Информационный пост про когти",
      excerpt: "Когти влияют на походку, нагрузку на лапы и комфорт питомца во время прогулок.",
      content: [
        "Длинные когти мешают правильной постановке лапы. Из-за этого питомцу может быть неудобно ходить, прыгать и стоять на гладком полу.",
        "Регулярная стрижка когтей помогает избежать заломов, болезненных трещин и лишнего напряжения в лапах.",
        "Если когти темные или питомец переживает, лучше доверить процедуру мастеру. Мы работаем постепенно и не срезаем лишнее.",
      ],
      telegramUrl: "https://t.me/groomsalooon",
    },
    {
      title: "Какая косметика подходит питомцу",
      slug: "kosmetika-dlya-pitomca",
      date: "Домашний уход",
      readTime: "5 мин",
      image: "/media/blog-cosmetics.webp",
      alt: "Профессиональная косметика для груминга",
      excerpt: "Почему шампунь подбирают по шерсти и коже, а не только по приятному запаху.",
      content: [
        "Косметика для ухода подбирается по типу шерсти, состоянию кожи и задаче процедуры. Для объема, увлажнения и восстановления нужны разные составы.",
        "Неподходящий шампунь может пересушить кожу или утяжелить шерсть. Поэтому после визита мы подсказываем, чем пользоваться дома.",
        "Для регулярного ухода важны не только шампунь, но и правильная сушка, расческа и частота вычеса.",
      ],
      telegramUrl: "https://t.me/groomsalooon",
    },
  ],
  stats: [
    { label: "Яндекс Карты", value: "Открыто", detail: "карточка салона", icon: MapPin },
    { label: "Подход", value: "1:1", detail: "без потока и суеты", icon: Heart },
    { label: "Мастера", value: "2", detail: "сертифицированных специалиста", icon: Certificate },
  ] satisfies StatCard[],
  employees: [
    {
      name: "Саша",
      role: "Сертифицированный грумер",
      image: "/media/employee-sasha-card.webp",
      alt: "Грумер Саша",
      text: "Отвечает за аккуратные силуэты, спокойный темп процедуры и понятные рекомендации владельцам.",
      badge: "Александра",
    },
    {
      name: "Лиза",
      role: "Сертифицированный грумер",
      image: "/media/employee-liza-card.webp",
      alt: "Грумер Лиза",
      text: "Работает с гигиеной, вычесом и питомцами, которым важно мягкое знакомство с салоном.",
      badge: "Елизавета",
    },
  ],
  proof: {
    title: "Обучение и сертификаты",
    text: "Команда прошла обучение в академии груминга. Это усиливает доверие к новому салону и показывает профессиональную базу.",
    image: "/media/team-certificates.webp",
    icon: CalendarCheck,
  },
  media: {
    photos: [
      { src: "/media/hero-dog.webp", alt: "Шпиц в салоне", label: "Шпиц" },
      { src: "/media/service-york.webp", alt: "Йорк после стрижки", label: "Йорк" },
      { src: "/media/service-cat.webp", alt: "Кошка в салоне", label: "Кошка" },
      { src: "/media/gallery-corgi.webp", alt: "Корги после ухода", label: "Корги" },
      { src: "/media/gallery-shiba.webp", alt: "Сиба-ину", label: "Сиба-ину" },
      { src: "/media/gallery-spaniel-after.webp", alt: "Спаниель после груминга", label: "Спаниель" },
      { src: "/media/team-card.webp", alt: "Команда с питомцем", label: "Команда" },
      { src: "/media/team-certificates.webp", alt: "Сертификаты грумеров", label: "Сертификаты" },
    ],
    videos: [
      {
        src: "/video/grooming-process.mp4",
        poster: "/media/service-york.webp",
        title: "Процесс ухода",
        text: "Короткое видео из салона. Тяжелые MOV из Telegram лучше конвертировать в MP4/WebM перед публикацией.",
      },
    ],
  },
  quickActions: [
    { label: "Telegram", href: "https://t.me/groomsalooon", icon: ChatCircleText },
    { label: "VK", href: "https://vk.ru/club236847987", icon: Star },
    { label: "Карта", href: "https://yandex.ru/maps/org/grooming_salon/120274260204?si=cz88pj3qdjz98yeb4r0p9mqnum", icon: MapPin },
  ],
  serviceKinds: [
    { label: "Стрижка", icon: Scissors },
    { label: "Собаки", icon: Dog },
    { label: "Кошки", icon: Cat },
    { label: "Гигиена", icon: PawPrint },
  ],
};
