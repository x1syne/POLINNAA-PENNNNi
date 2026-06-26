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
          <h2 className="section-title">Мастера салона</h2>
        </div>
        <p className="section-copy m-0 xl:max-w-[560px]">
          Сертифицированные грумеры, которые работают спокойно, внимательно и объясняют владельцу домашний уход после процедуры.
        </p>
      </div>

      <div className="grid gap-5 2xl:grid-cols-[1fr_1fr]">
        {site.employees.map((employee) => (
          <article className="glass-card grid overflow-hidden rounded-card p-4 md:grid-cols-[180px_1fr] md:items-center md:p-5" key={employee.name}>
            <div className="relative aspect-square overflow-hidden rounded-panel bg-accent-soft">
              <Image
                className="image-fill"
                src={employee.image}
                alt={employee.alt}
                fill
                sizes="(min-width: 1280px) 180px, 100vw"
              />
            </div>
            <div className="p-2 md:p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl bg-accent text-white">
                  <PawPrint size={24} weight="fill" />
                </div>
                <span className="rounded-pill bg-accent-soft px-4 py-2 text-sm font-black text-accent-strong">
                  {employee.badge}
                </span>
              </div>
              <h3 className="text-4xl font-black leading-none">{employee.name}</h3>
              <p className="mt-2 font-black text-accent-strong">{employee.role}</p>
              <p className="mt-4 text-lg font-bold leading-8 text-muted">{employee.text}</p>
            </div>
          </article>
        ))}

        <article className="dark-card grid overflow-hidden rounded-card md:grid-cols-[1fr_260px] 2xl:col-span-2">
          <div className="p-6 md:p-8">
            <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-white text-accent">
              <ProofIcon size={28} weight="fill" />
            </div>
            <h3 className="text-4xl font-black leading-tight">{site.proof.title}</h3>
            <p className="mt-4 text-lg font-bold leading-8 text-white/72">{site.proof.text}</p>
          </div>
          <div className="relative min-h-[220px] md:min-h-full">
            <Image className="image-fill" src={site.proof.image} alt="Команда с сертификатами" fill sizes="(min-width: 1280px) 260px, 100vw" />
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}
