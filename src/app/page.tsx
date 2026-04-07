import React, { type CSSProperties } from 'react'
import { IconTablerDevicesExclamation, IconTablerVectorBezier, IconTabler3dCubeSphere, IconTablerCloudComputing } from './components/icons'
import computer from './assets/computer-min.svg'
import Unscode from './components/icons/Unscode'
import illustration from './assets/illustration-min.svg'
import Image from 'next/image'
import { HeaderRotatingPhrase } from './components/HeaderRotatingPhrase'
import { ServicesReveal } from './components/ServicesReveal'

const servicesStagger = (ms: number): CSSProperties => ({
  ['--services-stagger' as string]: `${ms}ms`,
})

function ServiceStepCheck() {
  return (
    <span
      className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-600/15 text-purple-600 ring-1 ring-purple-500/20 dark:bg-purple-400/15 dark:text-purple-300 dark:ring-purple-400/25'
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
      <header className='container mx-auto mb-24 pt-20'>
        <nav
          className='fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] dark:border-white/[0.08]'
          aria-label='Principal'
        >
          <div className='container flex h-16 items-center justify-between'>
            <a
              href='/'
              className='flex shrink-0 items-center rounded outline-none ring-purple-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-opacity hover:opacity-90 focus-visible:ring-2'
            >
              <Unscode className='w-24' aria-hidden />
              <span className='sr-only'>Unscode — início</span>
            </a>
            <ul className='flex list-none items-center gap-6 md:gap-8'>
              <li>
                <a
                  className='rounded text-sm font-medium outline-none ring-purple-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-colors hover:text-purple-500 focus-visible:ring-2'
                  href='/'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className='rounded text-sm font-medium outline-none ring-purple-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-colors hover:text-purple-500 focus-visible:ring-2'
                  href='#services'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className='rounded text-sm font-medium outline-none ring-purple-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-colors hover:text-purple-500 focus-visible:ring-2'
                  href='#contact'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14'>
          <div className='space-y-6 lg:col-span-5'>
            <p className='text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400'>
              Unscode — desenvolvimento de software
            </p>
            <h1 className='text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]'>
              Criamos <HeaderRotatingPhrase />{' '}
              com engenharia, clareza e parceria de longo prazo.
            </h1>
            <p className='max-w-xl text-lg leading-relaxed text-black/75 dark:text-white/75'>
              A Unscode apoia empresas e equipes de produto a desenhar, construir e operar soluções web e serviços na nuvem. Trabalhamos com arquitetura sustentável, código legível e entregas iterativas — para lançar mais rápido, escalar com segurança e reduzir dívida técnica ao longo do tempo.
            </p>
            <div className='flex flex-wrap gap-3 pt-1'>
              <a
                href='#services'
                className='inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background-rgb))] dark:hover:bg-purple-500'
              >
                Conheça os serviços
              </a>
              <a
                href='#contact'
                className='inline-flex items-center justify-center rounded-lg border border-black/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-purple-500 hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background-rgb))] dark:border-white/20 dark:hover:border-purple-400 dark:hover:text-purple-400'
              >
                Fale conosco
              </a>
            </div>
          </div>
          <div className='lg:col-span-7'>
            <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/[0.12] via-transparent to-orange-400/[0.1] p-px ring-1 ring-black/[0.06] dark:from-purple-400/15 dark:to-orange-400/10 dark:ring-white/[0.08]'>
              <Image
                priority
                className='header_illustration rounded-[1.4rem]'
                src={illustration}
                alt='Ilustração de equipe desenvolvendo software e infraestrutura na nuvem'
                title='Unscode — engenharia de software'
              />
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
                <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400'>
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
                  className='inline-flex items-center justify-center rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background-rgb))] dark:hover:bg-purple-500'
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
                      'linear-gradient(to right top, #ff9640, #ff8840, #ff7943, #ff6947, #ff594c, #fe4d53, #fc405a, #f93261, #f5286b, #f11f74, #ea187e, #e31587)',
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
                className='service-card group services-stagger-item flex min-h-[22rem] flex-col rounded-3xl border border-black/[0.08] bg-black/[0.02] transition-all duration-300 hover:border-purple-500/35 hover:shadow-lg hover:shadow-purple-500/5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:border-purple-400/40'
                style={servicesStagger(160)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='service-card-icon-wrap inline-flex rounded-2xl bg-purple-600/12 p-4 text-purple-600 ring-1 ring-purple-500/15 transition duration-300 group-hover:bg-purple-600/18 dark:bg-purple-400/15 dark:text-purple-300 dark:ring-purple-400/20'>
                    <IconTablerVectorBezier className='service-card-icon h-16 w-16 sm:h-20 sm:w-20' />
                  </div>
                  <div>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400'>UX / UI</h3>
                    <p className='mt-2 text-xl font-semibold leading-snug sm:text-2xl'>Experiência e interface</p>
                    <p className='mt-3 text-base leading-relaxed text-black/75 dark:text-white/75'>
                      Fluxos claros, protótipos e sistemas de design que mantêm a marca consistente enquanto o produto cresce.
                    </p>
                  </div>
                </div>
              </article>

              <article
                className='service-card group services-stagger-item flex min-h-[17rem] flex-col rounded-3xl border border-black/[0.08] bg-black/[0.02] transition-all duration-300 hover:border-purple-500/35 hover:shadow-lg hover:shadow-purple-500/5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:border-purple-400/40'
                style={servicesStagger(230)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='service-card-icon-wrap inline-flex rounded-2xl bg-purple-600/12 p-4 text-purple-600 ring-1 ring-purple-500/15 transition duration-300 group-hover:bg-purple-600/18 dark:bg-purple-400/15 dark:text-purple-300 dark:ring-purple-400/20'>
                    <IconTabler3dCubeSphere className='service-card-icon h-14 w-14 sm:h-16 sm:w-16' />
                  </div>
                  <div>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400'>Dados &amp; automação</h3>
                    <p className='mt-2 text-xl font-semibold leading-snug'>Modelos e pipelines</p>
                    <p className='mt-3 text-base leading-relaxed text-black/75 dark:text-white/75'>
                      ETL, APIs de dados e automações que ligam equipes e reduzem trabalho manual repetitivo.
                    </p>
                  </div>
                </div>
              </article>

              <article
                className='service-card group services-stagger-item flex min-h-[17rem] flex-col rounded-3xl border border-black/[0.08] bg-gradient-to-br from-purple-600/[0.07] to-transparent transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 dark:from-purple-400/10 dark:hover:border-purple-400/45'
                style={servicesStagger(300)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='flex flex-col gap-4'>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400'>Como trabalhamos</h3>
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
                    className='inline-flex w-fit items-center gap-2 text-sm font-semibold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300'
                  >
                    Agendar conversa
                    <svg className='h-4 w-4 transition-transform group-hover:translate-x-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </a>
                </div>
              </article>

              <article
                className='service-card group services-stagger-item flex min-h-[17rem] flex-col rounded-3xl border border-black/[0.08] bg-black/[0.02] transition-all duration-300 hover:border-purple-500/35 hover:shadow-lg hover:shadow-purple-500/5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:hover:border-purple-400/40'
                style={servicesStagger(370)}
              >
                <div className='flex h-full flex-col justify-between gap-6 p-8 pt-6'>
                  <div className='service-card-icon-wrap inline-flex rounded-2xl bg-purple-600/12 p-4 text-purple-600 ring-1 ring-purple-500/15 transition duration-300 group-hover:bg-purple-600/18 dark:bg-purple-400/15 dark:text-purple-300 dark:ring-purple-400/20'>
                    <IconTablerCloudComputing className='service-card-icon h-14 w-14 sm:h-16 sm:w-16' />
                  </div>
                  <div>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400'>Cloud &amp; DevOps</h3>
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
              className='inline-block rounded outline-none ring-purple-500 ring-offset-2 ring-offset-[rgb(var(--background-rgb))] transition-opacity hover:opacity-90 focus-visible:ring-2'
            >
              <Unscode className='w-36' aria-hidden />
              <span className='sr-only'>Unscode — início</span>
            </a>
            <p className='mt-5 max-w-sm text-base leading-relaxed text-black/75 dark:text-white/75'>
              Desenvolvimento de software, UX e infraestrutura em nuvem. Parceria técnica para equipas que precisam lançar com qualidade e escalar com confiança.
            </p>
          </div>

          <div className='lg:col-span-3'>
            <h2 className='text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400'>Navegação</h2>
            <nav className='mt-4' aria-label='Rodapé'>
              <ul className='flex list-none flex-col gap-3 text-sm font-medium'>
                <li>
                  <a
                    className='rounded text-black/80 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-white/80 dark:hover:text-purple-400'
                    href='/'
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    className='rounded text-black/80 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-white/80 dark:hover:text-purple-400'
                    href='#services'
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    className='rounded text-black/80 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-white/80 dark:hover:text-purple-400'
                    href='#contact'
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='sm:col-span-2 lg:col-span-4'>
            <h2 className='text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400'>Contato</h2>
            <ul className='mt-4 flex list-none flex-col gap-4 text-sm'>
              <li>
                <a
                  href='mailto:contato@unscode.com'
                  className='group inline-flex items-start gap-3 rounded-lg text-black/80 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-white/80 dark:hover:text-purple-400'
                >
                  <span
                    className='mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600 ring-1 ring-purple-500/15 dark:bg-purple-400/15 dark:text-purple-300 dark:ring-purple-400/20'
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
                    <span className='text-black/70 group-hover:text-purple-600 dark:text-white/70 dark:group-hover:text-purple-400'>
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
                  className='group inline-flex items-start gap-3 rounded-lg text-black/80 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:text-white/80 dark:hover:text-purple-400'
                >
                  <span
                    className='mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600 ring-1 ring-purple-500/15 dark:bg-purple-400/15 dark:text-purple-300 dark:ring-purple-400/20'
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
                    <span className='text-black/70 group-hover:text-purple-600 dark:text-white/70 dark:group-hover:text-purple-400'>
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
