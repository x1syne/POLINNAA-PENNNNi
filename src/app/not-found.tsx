import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-page px-6 text-center text-text">
      <div>
        <p className="section-kicker justify-center">404</p>
        <h1 className="section-title">Страница не найдена</h1>
        <Link className="button-base button-primary mt-8" href="/">
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
