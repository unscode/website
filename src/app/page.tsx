import React, { type CSSProperties } from 'react'
import { IconTablerDevicesExclamation, IconTablerVectorBezier, IconTabler3dCubeSphere, IconTablerCloudComputing } from './components/icons'
import computer from './assets/computer-min.svg'
import Unscode from './components/icons/Unscode'
import { HeaderRotatingPhrase } from './components/HeaderRotatingPhrase'
import { ServicesReveal } from './components/ServicesReveal'
import illustration from './assets/illustration-min.svg'
import Image from 'next/image'

const servicesStagger = (ms: number): CSSProperties => ({
  ['--services-stagger' as string]: `${ms}ms`,
})

function ServiceStepCheck() {
  return (
    <span
      className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-600/12 text-neutral-600 ring-1 ring-neutral-500/18 dark:bg-neutral-400/12 dark:text-neutral-300 dark:ring-neutral-400/22'
      aria-hidden
    >
      <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.25}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
      </svg>
    </span>
  )
}

export default function Home() {

  return (
    <>
      <header className='relative mb-24 overflow-hidden pt-20'>
        <div
          className='pointer-events-none absolute -right-[20%] -top-24 h-[min(32rem,90vw)] w-[min(32rem,90vw)] rounded-full bg-neutral-500/[0.1] blur-[100px] dark:bg-neutral-500/[0.12]'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute -left-[10%] top-[28%] h-[min(18rem,55vw)] w-[min(18rem,55vw)] rounded-full bg-neutral-400/[0.09] blur-[90px] dark:bg-neutral-500/[0.08]'
          aria-hidden
        />
        <div
          className='pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-neutral-400/18 to-transparent dark:via-neutral-500/14'
          aria-hidden
        />

        <nav
          className='fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[rgb(var(--background-rgb))]/80 backdrop-blur-xl backdrop-saturate-150 dark:border-white/[0.08] dark:bg-[rgb(var(--background-rgb))]/75'
          aria-label='Principal'
        >
          <div className='container flex h-[4.25rem] items-center justify-between'>
            <a
              href='/'
              className='flex shrink-0 items-center rounded-lg outline-none ring-neutral-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-opacity hover:opacity-90 focus-visible:ring-2'
            >
              <Unscode className='w-[5.5rem]' aria-hidden />
              <span className='sr-only'>Unscode — início</span>
            </a>
            <ul className='flex list-none items-center gap-1 sm:gap-2'>
              <li>
                <a
                  className='rounded-lg px-3 py-2 text-sm font-medium text-black/80 outline-none ring-neutral-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-colors hover:bg-black/[0.04] hover:text-neutral-700 focus-visible:ring-2 dark:text-white/85 dark:hover:bg-white/[0.06] dark:hover:text-neutral-300'
                  href='/'
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  className='rounded-lg px-3 py-2 text-sm font-medium text-black/80 outline-none ring-neutral-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-colors hover:bg-black/[0.04] hover:text-neutral-700 focus-visible:ring-2 dark:text-white/85 dark:hover:bg-white/[0.06] dark:hover:text-neutral-300'
                  href='#services'
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  className='rounded-lg px-3 py-2 text-sm font-medium text-black/80 outline-none ring-neutral-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-colors hover:bg-black/[0.04] hover:text-neutral-700 focus-visible:ring-2 dark:text-white/85 dark:hover:bg-white/[0.06] dark:hover:text-neutral-300'
                  href='#contact'
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='container relative mx-auto'>
          <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16'>
            <div className='header-hero-animate space-y-6 lg:col-span-5 lg:space-y-7'>
              <p className='inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400'>
                <span className='h-1.5 w-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400' aria-hidden />
                Unscode — desenvolvimento de software
              </p>
              <h1 className='text-balance text-xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]'>
                Criamos <HeaderRotatingPhrase />{' '}
                com engenharia, clareza e parceria de longo prazo.
              </h1>
              <p className='max-w-xl border-l-2 border-neutral-500/28 pl-5 text-lg leading-relaxed text-black/75 dark:border-neutral-400/32 dark:text-white/75'>
                Ajudamos empresas e equipes de produto a criar e manter software na web e na nuvem — com arquitetura clara, código legível e entregas frequentes, para ir ao ar rápido e crescer com menos retrabalho.
              </p>
              <div className='flex flex-wrap gap-3 pt-1'>
                <a
                  href='#services'
                  className='inline-flex items-center justify-center rounded-xl bg-neutral-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 transition-all hover:bg-neutral-900 hover:shadow-neutral-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background-rgb))] dark:hover:bg-neutral-600 dark:shadow-black/25'
                >
                  Conheça os serviços
                </a>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center rounded-xl border border-black/15 bg-black/[0.02] px-6 py-3 text-sm font-semibold transition-all hover:border-neutral-500/40 hover:bg-neutral-600/[0.08] hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background-rgb))] dark:border-white/20 dark:bg-white/[0.03] dark:hover:border-neutral-500/35 dark:hover:text-neutral-300'
                >
                  Fale conosco
                </a>
              </div>
            </div>

            <div className='relative flex justify-center lg:col-span-7 lg:justify-end'>
              <div
                className='pointer-events-none absolute right-[-5%] top-[2%] h-44 w-44 rounded-full bg-neutral-400/[0.1] blur-3xl dark:bg-neutral-500/[0.12]'
                aria-hidden
              />
              <div
                className='pointer-events-none absolute bottom-[8%] left-[-2%] h-36 w-36 rounded-full bg-neutral-400/[0.08] blur-3xl dark:bg-neutral-400/[0.08]'
                aria-hidden
              />
              <div className='relative w-full lg:w-[min(100%,40rem)]'>
                <div className='relative aspect-[440/280] w-full'>
                  <Image
                    fill
                    className='object-cover'
                    src={illustration}
                    alt='Ilustração de equipe desenvolvendo software e infraestrutura na nuvem'
                    sizes='(max-width: 1024px) 100vw, 40rem'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='services' className='container mx-auto mb-24 mt-24 scroll-mt-24'>
          <ServicesReveal>
            <div
              className='services-stagger-item mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:gap-12'
              style={servicesStagger(0)}
            >
              <div className='lg:max-w-xl lg:flex-1'>
                <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400'>
                  O que fazemos
                </p>
                <h2 className='text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight'>
                  Do planeamento ao deploy, com um parceiro técnico alinhado ao seu produto.
                </h2>
              </div>
              <div className='lg:max-w-md'>
                <p className='mb-5 text-lg leading-relaxed text-black/75 dark:text-white/75'>
                  Unimos desenvolvimento, desenho de experiência e infraestrutura para lançar software fiável, observável e fácil de evoluir — sem surpresas na manutenção.
                </p>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center rounded-lg bg-neutral-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background-rgb))] dark:hover:bg-neutral-600'
                >
                  Fale conosco
                </a>
              </div>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8'>
              <article
                className='service-card group services-stagger-item relative col-span-1 overflow-hidden rounded-3xl md:col-span-2 lg:col-span-2'
                style={servicesStagger(90)}
              >
                <div
                  className='h-full min-h-[22rem]'
                  style={{
                    backgroundImage:
                      'linear-gradient(to right top, #27272a, #3f3f46, #52525b, #3f3f46, #27272a)',
                  }}
                >
                  <div
                    className='flex h-full min-h-[22rem] flex-col justify-between gap-6 p-8 pt-6 text-white'
                    style={{
                      backgroundImage: `url(${computer.src})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '95% 18%',
                      backgroundSize: 'min(320px, 45%)',
                    }}
                  >
                    <div className='service-card-icon-wrap inline-flex rounded-2xl bg-white/15 p-4 ring-1 ring-white/30 backdrop-blur-sm transition duration-500 group-hover:bg-white/25'>
                      <IconTablerDevicesExclamation className='service-card-icon h-16 w-16 sm:h-20 sm:w-20' />
                    </div>
                    <div className='max-w-lg'>
                      <h3 className='text-xs font-bold uppercase tracking-wider text-white/90'>Engenharia de produto</h3>
                      <p className='mt-2 text-2xl font-semibold leading-snug sm:text-3xl'>Aplicações web, APIs e integrações</p>
                      <p className='mt-3 text-base leading-relaxed text-white/85'>
                        Construímos frontends responsivos, serviços backend e integrações com sistemas legados ou terceiros. Testes, revisão de código e pipelines CI/CD fazem parte do pacote.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article
                className='service-card group services-stagger-item flex min-h-[22rem] flex-col rounded-3xl border border-black/[0.08] bg-black/[0.02] transition-all duration-300 hover:border-neutral-500/28 hover:shadow-lg hover:shadow-neutral-500/5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:border-neutral-400/32'
                style={servicesStagger(160)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='service-card-icon-wrap inline-flex rounded-2xl bg-neutral-600/10 p-4 text-neutral-600 ring-1 ring-neutral-500/12 transition duration-300 group-hover:bg-neutral-600/15 dark:bg-neutral-400/12 dark:text-neutral-300 dark:ring-neutral-400/18'>
                    <IconTablerVectorBezier className='service-card-icon h-16 w-16 sm:h-20 sm:w-20' />
                  </div>
                  <div>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400'>UX / UI</h3>
                    <p className='mt-2 text-xl font-semibold leading-snug sm:text-2xl'>Experiência e interface</p>
                    <p className='mt-3 text-base leading-relaxed text-black/75 dark:text-white/75'>
                      Fluxos claros, protótipos e sistemas de design que mantêm a marca consistente enquanto o produto cresce.
                    </p>
                  </div>
                </div>
              </article>

              <article
                className='service-card group services-stagger-item flex min-h-[17rem] flex-col rounded-3xl border border-black/[0.08] bg-black/[0.02] transition-all duration-300 hover:border-neutral-500/28 hover:shadow-lg hover:shadow-neutral-500/5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:border-neutral-400/32'
                style={servicesStagger(230)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='service-card-icon-wrap inline-flex rounded-2xl bg-neutral-600/10 p-4 text-neutral-600 ring-1 ring-neutral-500/12 transition duration-300 group-hover:bg-neutral-600/15 dark:bg-neutral-400/12 dark:text-neutral-300 dark:ring-neutral-400/18'>
                    <IconTabler3dCubeSphere className='service-card-icon h-14 w-14 sm:h-16 sm:w-16' />
                  </div>
                  <div>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400'>Dados &amp; automação</h3>
                    <p className='mt-2 text-xl font-semibold leading-snug'>Modelos e pipelines</p>
                    <p className='mt-3 text-base leading-relaxed text-black/75 dark:text-white/75'>
                      ETL, APIs de dados e automações que ligam equipes e reduzem trabalho manual repetitivo.
                    </p>
                  </div>
                </div>
              </article>

              <article
                className='service-card group services-stagger-item flex min-h-[17rem] flex-col rounded-3xl border border-black/[0.08] bg-gradient-to-br from-neutral-600/[0.06] to-transparent transition-all duration-300 hover:border-neutral-500/32 hover:shadow-lg hover:shadow-neutral-500/8 dark:from-neutral-400/[0.08] dark:hover:border-neutral-400/35'
                style={servicesStagger(300)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='flex flex-col gap-4'>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400'>Como trabalhamos</h3>
                    <p className='text-xl font-semibold leading-snug'>Da ideia à produção</p>
                    <ul className='space-y-4 text-base leading-relaxed text-black/80 dark:text-white/80'>
                      <li className='flex gap-3'>
                        <ServiceStepCheck />
                        <span>Discovery, priorização e roadmap transparente com métricas acordadas.</span>
                      </li>
                      <li className='flex gap-3'>
                        <ServiceStepCheck />
                        <span>Entregas iterativas com demos frequentes e feedback contínuo.</span>
                      </li>
                      <li className='flex gap-3'>
                        <ServiceStepCheck />
                        <span>Go-live com monitorização, documentação e handoff para a sua equipe.</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href='#contact'
                    className='inline-flex w-fit items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300'
                  >
                    Agendar conversa
                    <svg className='h-4 w-4 transition-transform group-hover:translate-x-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </a>
                </div>
              </article>

              <article
                className='service-card group services-stagger-item flex min-h-[17rem] flex-col rounded-3xl border border-black/[0.08] bg-black/[0.02] transition-all duration-300 hover:border-neutral-500/28 hover:shadow-lg hover:shadow-neutral-500/5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:border-neutral-400/32'
                style={servicesStagger(370)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='service-card-icon-wrap inline-flex rounded-2xl bg-neutral-600/10 p-4 text-neutral-600 ring-1 ring-neutral-500/12 transition duration-300 group-hover:bg-neutral-600/15 dark:bg-neutral-400/12 dark:text-neutral-300 dark:ring-neutral-400/18'>
                    <IconTablerCloudComputing className='service-card-icon h-14 w-14 sm:h-16 sm:w-16' />
                  </div>
                  <div>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400'>Cloud &amp; DevOps</h3>
                    <p className='mt-2 text-xl font-semibold leading-snug'>Infra observável</p>
                    <p className='mt-3 text-base leading-relaxed text-black/75 dark:text-white/75'>
                      Contentores, ambientes por estágio, backups e alertas — para dormir descansado quando o tráfego dispara.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </ServicesReveal>
        </section>
      </main>

      <footer
        id='contact'
        className='container mx-auto mt-24 scroll-mt-24 border-t border-black/[0.08] pt-16 pb-12 dark:border-white/[0.1]'
      >
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10'>
          <div className='lg:col-span-5'>
            <a
              href='/'
              className='inline-block rounded outline-none ring-neutral-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-opacity hover:opacity-90 focus-visible:ring-2'
            >
              <Unscode className='w-36' aria-hidden />
              <span className='sr-only'>Unscode — início</span>
            </a>
            <p className='mt-5 max-w-sm text-base leading-relaxed text-black/75 dark:text-white/75'>
              Desenvolvimento de software, UX e infraestrutura em nuvem. Parceria técnica para equipas que precisam lançar com qualidade e escalar com confiança.
            </p>
          </div>

          <div className='lg:col-span-3'>
            <h2 className='text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400'>Navegação</h2>
            <nav className='mt-4' aria-label='Rodapé'>
              <ul className='flex list-none flex-col gap-3 text-sm font-medium'>
                <li>
                  <a
                    className='rounded text-black/80 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:text-white/80 dark:hover:text-neutral-300'
                    href='/'
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    className='rounded text-black/80 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:text-white/80 dark:hover:text-neutral-300'
                    href='#services'
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    className='rounded text-black/80 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:text-white/80 dark:hover:text-neutral-300'
                    href='#contact'
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='sm:col-span-2 lg:col-span-4'>
            <h2 className='text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400'>Contato</h2>
            <ul className='mt-4 flex list-none flex-col gap-4 text-sm'>
              <li>
                <a
                  href='mailto:contato@unscode.com'
                  className='group inline-flex items-start gap-3 rounded-lg text-black/80 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:text-white/80 dark:hover:text-neutral-300'
                >
                  <span
                    className='mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-600/10 text-neutral-600 ring-1 ring-neutral-500/12 dark:bg-neutral-400/12 dark:text-neutral-300 dark:ring-neutral-400/18'
                    aria-hidden
                  >
                    <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </span>
                  <span>
                    <span className='block font-semibold text-black dark:text-white'>Email</span>
                    <span className='text-black/70 group-hover:text-neutral-700 dark:text-white/70 dark:group-hover:text-neutral-300'>
                      contato@unscode.com
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='https://unscode.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-start gap-3 rounded-lg text-black/80 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:text-white/80 dark:hover:text-neutral-300'
                >
                  <span
                    className='mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-600/10 text-neutral-600 ring-1 ring-neutral-500/12 dark:bg-neutral-400/12 dark:text-neutral-300 dark:ring-neutral-400/18'
                    aria-hidden
                  >
                    <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                      />
                    </svg>
                  </span>
                  <span>
                    <span className='block font-semibold text-black dark:text-white'>Web</span>
                    <span className='text-black/70 group-hover:text-neutral-700 dark:text-white/70 dark:group-hover:text-neutral-300'>
                      unscode.com
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-14 flex flex-col gap-3 border-t border-black/[0.06] pt-8 text-sm text-black/55 dark:border-white/[0.08] dark:text-white/55 sm:flex-row sm:items-center sm:justify-between'>
          <p>© {new Date().getFullYear()} Unscode. Todos os direitos reservados.</p>
          <p className='text-black/45 dark:text-white/45'>Engenharia de software · Cloud · UX</p>
        </div>
      </footer>
    </>
  )
}
