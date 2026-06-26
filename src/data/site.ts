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

const createDogBreedService = (breed: {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
  note: string;
}): ServiceGroup => ({
  id: breed.id,
  label: breed.label,
  image: breed.image,
  imageAlt: breed.imageAlt,
  note: breed.note,
  tiers: [
    {
      title: breed.label,
      rows: [
        {
          name: "Комплексный груминг",
          description: "Мытье, сушка, когти, уши, глаза и работа с шерстью по породе, размеру и состоянию питомца.",
          price: "по консультации",
        },
        {
          name: "Гигиена и поддерживающий уход",
          description: "Аккуратный уход между полными комплексами: когти, уши, глаза, лапы, вычес и рекомендации домой.",
          price: "по консультации",
        },
      ],
    },
  ],
});

const createCatBreedService = (breed: {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
  note: string;
}): ServiceGroup => ({
  id: breed.id,
  label: breed.label,
  image: breed.image,
  imageAlt: breed.imageAlt,
  note: breed.note,
  tiers: [
    {
      title: breed.label,
      rows: [
        {
          name: "Вычес и разбор шерсти",
          description: "Мягкая работа с подшерстком, колтунами и чувствительной кожей без лишней фиксации.",
          price: "по консультации",
        },
        {
          name: "Гигиена",
          description: "Когти, уши, глаза и локальные зоны, если питомец спокойно переносит процедуру.",
          price: "по консультации",
        },
      ],
    },
  ],
});

const additionalDogServices = [
  createDogBreedService({
    id: "poodle",
    label: "Пудель",
    image: "/media/before-after-poodle.webp",
    imageAlt: "Пудель после модельной стрижки",
    note: "Пуделям важны чистые линии, аккуратная сушка и форма, которую удобно поддерживать дома.",
  }),
  createDogBreedService({
    id: "maltipoo",
    label: "Мальтипу",
    image: "/media/before-after-poodle.webp",
    imageAlt: "Мальтипу после ухода",
    note: "Для мальтипу подбираем мягкий силуэт, бережный вычес и понятную длину под образ жизни семьи.",
  }),
  createDogBreedService({
    id: "husky",
    label: "Хаски",
    image: "/media/team-dog.webp",
    imageAlt: "Собака с плотной шерстью в салоне",
    note: "Хаски нужен тщательный вычес подшерстка, правильная сушка и уход без короткого бритья.",
  }),
  createDogBreedService({
    id: "german-shepherd",
    label: "Немецкая овчарка",
    image: "/media/team-dog.webp",
    imageAlt: "Собака крупной породы в салоне",
    note: "Для овчарок делаем вычес, мытье, сушку по шерсти и гигиену без потери защитного слоя.",
  }),
  createDogBreedService({
    id: "labrador",
    label: "Лабрадор",
    image: "/media/gallery-spaniel-after.webp",
    imageAlt: "Собака после ухода в салоне",
    note: "Лабрадорам подходит регулярная экспресс-линька, чистка ушей, когти и поддержание плотной шерсти.",
  }),
  createDogBreedService({
    id: "spaniel",
    label: "Спаниель",
    image: "/media/gallery-spaniel-after.webp",
    imageAlt: "Спаниель после груминга",
    note: "Спаниелям аккуратно оформляем уши, лапы, корпус и зоны, где чаще появляются колтуны.",
  }),
  createDogBreedService({
    id: "scotch-terrier",
    label: "Скотч-терьер",
    image: "/media/gallery-terrier.webp",
    imageAlt: "Терьер после ухода",
    note: "Скотч-терьеру важны породный силуэт, чистые линии корпуса и аккуратная гигиена.",
  }),
  createDogBreedService({
    id: "pug",
    label: "Мопс",
    image: "/media/hero-dog.webp",
    imageAlt: "Питомец после ухода",
    note: "Мопсам уделяем внимание линьке, когтям, ушам и бережной гигиене складок.",
  }),
  createDogBreedService({
    id: "bulldog",
    label: "Бульдог",
    image: "/media/hero-dog.webp",
    imageAlt: "Собака после салонного ухода",
    note: "Бульдогам важны чистые складки, когти, уши и мягкая процедура без перегрева.",
  }),
  createDogBreedService({
    id: "sharpei",
    label: "Шарпей",
    image: "/media/team-dog.webp",
    imageAlt: "Собака после гигиенического ухода",
    note: "Шарпеям подбираем деликатную гигиену складок, ушей и кожи с учетом чувствительности породы.",
  }),
  createDogBreedService({
    id: "corgi",
    label: "Корги",
    image: "/media/gallery-corgi.webp",
    imageAlt: "Корги после ухода",
    note: "Корги нужен регулярный вычес подшерстка, чистая линия лап и поддерживающий уход без короткого бритья.",
  }),
  createDogBreedService({
    id: "chihuahua",
    label: "Чихуахуа",
    image: "/media/hero-dog.webp",
    imageAlt: "Маленькая собака после ухода",
    note: "Чихуахуа важно работать быстро, но без спешки: когти, уши, лапы и аккуратная гигиена без перегруза питомца.",
  }),
  createDogBreedService({
    id: "maltese",
    label: "Мальтезе",
    image: "/media/service-spitz.webp",
    imageAlt: "Белая декоративная собака после ухода",
    note: "Мальтезе подбираем мягкий силуэт, бережный вычес и чистую мордочку, чтобы шерсть выглядела ухоженно каждый день.",
  }),
  createDogBreedService({
    id: "griffon",
    label: "Гриффон",
    image: "/media/service-york.webp",
    imageAlt: "Маленькая собака с выразительной мордочкой",
    note: "Гриффону важны аккуратная форма морды, гигиена лап и уход за шерстью без грубого среза породы.",
  }),
  createDogBreedService({
    id: "shih-tzu",
    label: "Ши-тцу",
    image: "/media/before-after-poodle.webp",
    imageAlt: "Декоративная собака после модельной стрижки",
    note: "Для ши-тцу подбираем удобную длину, разбираем колтуны и оформляем мордочку так, чтобы уход дома был проще.",
  }),
  createDogBreedService({
    id: "bichon",
    label: "Бишон фризе",
    image: "/media/before-after-poodle.webp",
    imageAlt: "Пушистая белая собака после ухода",
    note: "Бишону нужна правильная сушка по шерсти, объем и аккуратная округлая форма без лишнего утяжеления.",
  }),
  createDogBreedService({
    id: "cavalier",
    label: "Кавалер Кинг Чарльз спаниель",
    image: "/media/gallery-spaniel-after.webp",
    imageAlt: "Спаниель после груминга",
    note: "Кавалеру оформляем уши, лапы и очесы, сохраняя мягкий породный вид и естественную длину шерсти.",
  }),
  createDogBreedService({
    id: "westie",
    label: "Вест Хайленд Уайт Терьер",
    image: "/media/gallery-terrier.webp",
    imageAlt: "Терьер после ухода",
    note: "Вести подходит четкий силуэт, чистая мордочка, гигиена лап и поддержание жесткой шерсти.",
  }),
  createDogBreedService({
    id: "french-bulldog",
    label: "Французский бульдог",
    image: "/media/hero-dog.webp",
    imageAlt: "Собака после гигиенического ухода",
    note: "Французскому бульдогу важны когти, уши, складки и мягкая экспресс-линька без перегрева.",
  }),
  createDogBreedService({
    id: "cocker-spaniel",
    label: "Американский кокер спаниель",
    image: "/media/gallery-spaniel-after.webp",
    imageAlt: "Кокер-спаниель после ухода",
    note: "Кокеру уделяем внимание ушам, очесам, лапам и зонам, где шерсть быстрее сбивается.",
  }),
  createDogBreedService({
    id: "schnauzer",
    label: "Цвергшнауцер",
    image: "/media/gallery-terrier.webp",
    imageAlt: "Шнауцер после ухода",
    note: "Цвергшнауцеру важны аккуратные брови, борода, линия корпуса и гигиена без потери породного характера.",
  }),
  createDogBreedService({
    id: "pekingese",
    label: "Пекинес",
    image: "/media/service-york.webp",
    imageAlt: "Пушистая декоративная собака после ухода",
    note: "Пекинесу подбираем бережный вычес, гигиену глаз, лап и удобную форму без короткого бритья.",
  }),
  createDogBreedService({
    id: "jack-russell",
    label: "Джек Рассел Терьер",
    image: "/media/hero-dog.webp",
    imageAlt: "Активная собака после ухода",
    note: "Джек-расселу подходит регулярная гигиена, когти, уши и работа с линькой по типу шерсти.",
  }),
  createDogBreedService({
    id: "chinese-crested",
    label: "Китайская хохлатая",
    image: "/media/service-york.webp",
    imageAlt: "Декоративная собака после ухода",
    note: "Китайской хохлатой важны деликатная гигиена кожи, лап, ушей и аккуратная работа с чувствительными зонами.",
  }),
  createDogBreedService({
    id: "mittelschnauzer",
    label: "Миттельшнауцер",
    image: "/media/gallery-terrier.webp",
    imageAlt: "Шнауцер после груминга",
    note: "Миттельшнауцеру сохраняем породный силуэт, оформляем бороду, брови и корпус в спокойном темпе.",
  }),
  createDogBreedService({
    id: "shiba",
    label: "Сиба-ину",
    image: "/media/gallery-shiba.webp",
    imageAlt: "Сиба-ину после ухода",
    note: "Сиба-ину нужен тщательный вычес подшерстка, хорошая сушка и спокойная работа без лишней фиксации.",
  }),
  createDogBreedService({
    id: "dachshund",
    label: "Такса",
    image: "/media/hero-dog.webp",
    imageAlt: "Такса после ухода",
    note: "Таксе подбираем уход по типу шерсти: когти, уши, гигиена лап и поддержание чистого силуэта.",
  }),
  createDogBreedService({
    id: "golden-retriever",
    label: "Голден ретривер",
    image: "/media/team-dog.webp",
    imageAlt: "Крупная собака после ухода",
    note: "Голдену важны вычес, сушка плотной шерсти, аккуратные лапы и поддержание естественного вида.",
  }),
  createDogBreedService({
    id: "bernese-mountain-dog",
    label: "Бернский зенненхунд",
    image: "/media/team-dog.webp",
    imageAlt: "Крупная длинношерстная собака после ухода",
    note: "Бернцу нужен глубокий вычес, работа с подшерстком и сушка, которая не оставляет влажных зон у кожи.",
  }),
  createDogBreedService({
    id: "mixed",
    label: "Метис",
    image: "/media/gallery-corgi.webp",
    imageAlt: "Питомец после груминга",
    note: "Для метиса подбираем уход по фактической шерсти, размеру, коже и привычкам питомца.",
  }),
  createDogBreedService({
    id: "samoyed",
    label: "Самоед",
    image: "/media/service-spitz.webp",
    imageAlt: "Белая пушистая собака после ухода",
    note: "Самоеду нужен мощный вычес подшерстка, правильная сушка и уход без короткого среза защитной шерсти.",
  }),
  createDogBreedService({
    id: "chow-chow",
    label: "Чау-чау",
    image: "/media/team-dog.webp",
    imageAlt: "Пушистая крупная собака после ухода",
    note: "Чау-чау важны бережный разбор шерсти, тщательная сушка и спокойный темп из-за плотного подшерстка.",
  }),
];

const additionalCatServices = [
  createCatBreedService({
    id: "maine-coon",
    label: "Мейн-кун",
    image: "/media/service-cat.webp",
    imageAlt: "Кошка в салоне",
    note: "Мейн-кунам важен бережный вычес густой шерсти, работа с колтунами и спокойный темп процедуры.",
  }),
  createCatBreedService({
    id: "british-cat",
    label: "Британская кошка",
    image: "/media/service-cat.webp",
    imageAlt: "Кошка после ухода",
    note: "Британским кошкам подходит регулярный вычес плотной шерсти и мягкая гигиена без лишнего стресса.",
  }),
  createCatBreedService({
    id: "persian-cat",
    label: "Персидская кошка",
    image: "/media/service-cat.webp",
    imageAlt: "Длинношерстная кошка после ухода",
    note: "Персидским кошкам особенно важны профилактика колтунов, аккуратная работа с мордочкой и шерстью.",
  }),
];

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
    slides: [
      { src: "/media/stories/story-01.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 1" },
      { src: "/media/stories/story-02.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 2" },
      { src: "/media/stories/story-03.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 3" },
      { src: "/media/stories/story-04.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 4" },
      { src: "/media/stories/story-05.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 5" },
      { src: "/media/stories/story-06.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 6" },
      { src: "/media/stories/story-07.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 7" },
      { src: "/media/stories/story-08.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 8" },
      { src: "/media/stories/story-09.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 9" },
      { src: "/media/stories/story-10.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 10" },
      { src: "/media/stories/story-11.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 11" },
      { src: "/media/stories/story-12.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 12" },
      { src: "/media/stories/story-13.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 13" },
      { src: "/media/stories/story-14.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 14" },
      { src: "/media/stories/story-15.avif", alt: "Питомец после ухода в груминг-салоне", label: "Фото 15" },
    ],
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
    ...additionalDogServices,
    ...additionalCatServices,
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
      date: "Советы по уходу",
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
        text: "Короткое видео из салона: показываем спокойный темп работы и аккуратный уход за питомцем.",
      },
    ],
  },
  quickActions: [
    { label: "Написать", href: "https://t.me/groomsalooon", icon: ChatCircleText },
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
