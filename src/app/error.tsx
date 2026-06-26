"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-dvh place-items-center bg-page px-6 text-center text-text">
      <div>
        <p className="section-kicker justify-center">Ошибка</p>
        <h1 className="section-title">Что-то пошло не так</h1>
        <button className="button-base button-primary mt-8" type="button" onClick={reset}>
          Попробовать снова
        </button>
      </div>
    </main>
  );
}
