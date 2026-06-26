import Image from "next/image";
import { Certificate, PawPrint } from "@phosphor-icons/react/dist/ssr";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { site } from "@/data/site";

export function EmployeesSection() {
  const ProofIcon = site.proof.icon;

  return (
    <AnimatedSection id="team">
      <div className="mb-9 flex flex-col justify-between gap-6 2xl:flex-row 2xl:items-end">
        <div>
          <div className="section-kicker">
            <Certificate size={19} weight="fill" />
            Команда
          </div>
          <h2 className="section-title">Саша и Лиза</h2>
        </div>
        <p className="section-copy m-0 xl:max-w-[560px]">
          Раздел сотрудников вынесен отдельно: сюда легко добавить расписание, специализацию, сертификаты и личные карточки мастеров.
        </p>
      </div>

      <div className="grid gap-6 2xl:grid-cols-[1fr_1fr_0.9fr]">
        {site.employees.map((employee) => (
          <article className="glass-card overflow-hidden rounded-card" key={employee.name}>
            <div className="relative aspect-[4/5] bg-accent-soft">
              <Image
                className="image-fill"
                src={employee.image}
                alt={employee.alt}
                fill
                sizes="(min-width: 1280px) 28vw, (min-width: 768px) 46vw, 100vw"
              />
              <div className="absolute left-5 top-5 rounded-pill bg-white/88 px-4 py-2 text-sm font-black text-accent-strong backdrop-blur">
                {employee.badge}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-5 grid size-13 place-items-center rounded-2xl bg-accent text-white">
                <PawPrint size={26} weight="fill" />
              </div>
              <h3 className="text-4xl font-black leading-none">{employee.name}</h3>
              <p className="mt-2 font-black text-accent-strong">{employee.role}</p>
              <p className="mt-4 text-lg font-bold leading-8 text-muted">{employee.text}</p>
            </div>
          </article>
        ))}

        <article className="dark-card grid content-between overflow-hidden rounded-card">
          <div className="p-6 md:p-8">
            <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-white text-accent">
              <ProofIcon size={28} weight="fill" />
            </div>
            <h3 className="text-4xl font-black leading-tight">{site.proof.title}</h3>
            <p className="mt-4 text-lg font-bold leading-8 text-white/72">{site.proof.text}</p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image className="image-fill" src={site.proof.image} alt="Саша и Лиза с сертификатами" fill sizes="(min-width: 1280px) 28vw, 100vw" />
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}
