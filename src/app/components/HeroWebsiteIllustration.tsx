import type { SVGProps } from 'react'

/** Ilustração do hero: página web, IA (rede), produto e nuvem (animações SMIL: animate / animateTransform). */
export function HeroWebsiteIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 440 280'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='Ilustração: aplicação web, inteligência artificial e serviços na nuvem'
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >
      <defs>
        <linearGradient id='hero-ill-cloud' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop stopColor='#525252' stopOpacity={0.2} />
          <stop offset='1' stopColor='#737373' stopOpacity={0.16} />
        </linearGradient>
        <linearGradient id='hero-ill-accent' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop stopColor='#525252' stopOpacity={0.32} />
          <stop offset='1' stopColor='#737373' stopOpacity={0.22} />
        </linearGradient>
        <linearGradient
          id='hero-ill-link'
          gradientUnits='userSpaceOnUse'
          x1='338'
          y1='130'
          x2='402'
          y2='86'
        >
          <stop stopColor='#525252' stopOpacity={0.55} />
          <stop offset='0.55' stopColor='#a3a3a3' stopOpacity={0.45} />
          <stop offset='1' stopColor='#737373' stopOpacity={0.6} />
        </linearGradient>
        <radialGradient id='hero-ill-ai-core' cx='50%' cy='50%' r='50%'>
          <stop stopColor='#e5e5e5' stopOpacity={0.55} />
          <stop offset='0.65' stopColor='#a3a3a3' stopOpacity={0.35} />
          <stop offset='1' stopColor='#525252' stopOpacity={0.12} />
        </radialGradient>
        <clipPath id='hero-ill-ai-clip'>
          <rect x='52' y='124' width='148' height='64' rx='8' />
        </clipPath>
      </defs>

      {/* Nuvem + stack + ligação vertical (sem translate no grupo: curva para o browser fica alinhada) */}
      <g>
        <path
          d='M318 28c-12 0-22 8-25 19a22 22 0 1 0 4 43h76c16 0 29-13 29-29s-13-29-29-29c-2 0-4 0-6 1a35 35 0 0 0-69-5z'
          fill='url(#hero-ill-cloud)'
        >
          <animate
            attributeName='opacity'
            values='0.9;1;0.9'
            keyTimes='0;0.5;1'
            dur='4s'
            repeatCount='indefinite'
            calcMode='spline'
            keySplines='0.4 0 0.6 1;0.4 0 0.6 1'
          />
        </path>
        <path
          d='M338 92v38'
          className='stroke-neutral-600/35 dark:stroke-neutral-400/40'
          strokeWidth={2}
          strokeLinecap='round'
          strokeDasharray='5 7'
        >
          <animate
            attributeName='stroke-dashoffset'
            from='0'
            to='12'
            dur='1.15s'
            repeatCount='indefinite'
          />
        </path>
        <rect
          x='322'
          y='48'
          width='56'
          height='36'
          rx='6'
          className='fill-black/[0.04] stroke-black/[0.1] dark:fill-white/[0.06] dark:stroke-white/[0.12]'
          strokeWidth={1.25}
        />
        <path
          d='M332 58h36M332 66h28M332 74h32'
          className='stroke-neutral-600/45 dark:stroke-neutral-400/50'
          strokeWidth={2}
          strokeLinecap='round'
        >
          <animate
            attributeName='opacity'
            values='0.55;1;0.55'
            dur='2.2s'
            repeatCount='indefinite'
            begin='0.15s'
          />
        </path>
      </g>

      {/* Ligação nuvem → barra do browser */}
      <path
        d='M338 130 C338 108, 368 90, 402 86'
        className='stroke-neutral-500/22 dark:stroke-neutral-400/20'
        strokeWidth={5}
        strokeLinecap='round'
      />
      <path
        d='M338 130 C338 108, 368 90, 402 86'
        stroke='url(#hero-ill-link)'
        strokeWidth={2}
        strokeLinecap='round'
        strokeDasharray='10 8'
      >
        <animate
          attributeName='stroke-dashoffset'
          from='0'
          to='18'
          dur='1.75s'
          repeatCount='indefinite'
        />
      </path>
      <circle cx='402' cy='86' r='3.5' className='fill-neutral-500/50 dark:fill-neutral-400/45'>
        <animate attributeName='r' values='3.5;4.25;3.5' dur='2.2s' repeatCount='indefinite' />
      </circle>
      <circle cx='402' cy='86' r='2' className='fill-white/40 dark:fill-white/25'>
        <animate attributeName='opacity' values='0.3;0.85;0.3' dur='2.2s' repeatCount='indefinite' />
      </circle>

      {/* Janela do browser */}
      <rect
        x='36'
        y='72'
        width='368'
        height='192'
        rx='16'
        className='stroke-black/[0.12] dark:stroke-white/[0.14]'
        strokeWidth={1.5}
      />
      <path
        d='M36 108h368'
        className='stroke-black/[0.08] dark:stroke-white/[0.1]'
        strokeWidth={1.25}
      />
      <circle cx='60' cy='90' r='5' className='fill-black/[0.12] dark:fill-white/[0.18]' />
      <circle cx='78' cy='90' r='5' className='fill-black/[0.12] dark:fill-white/[0.18]' />
      <circle cx='96' cy='90' r='5' className='fill-black/[0.12] dark:fill-white/[0.18]' />
      <rect
        x='118'
        y='82'
        width='270'
        height='18'
        rx='6'
        className='fill-black/[0.05] stroke-black/[0.08] dark:fill-white/[0.06] dark:stroke-white/[0.1]'
        strokeWidth={1}
      />
      <path
        d='M132 91h120'
        className='stroke-black/[0.15] dark:stroke-white/[0.2]'
        strokeWidth={2}
        strokeLinecap='round'
      />

      {/* Conteúdo da “página” */}
      <rect x='52' y='124' width='148' height='64' rx='8' fill='url(#hero-ill-accent)'>
        <animate
          attributeName='opacity'
          values='0.92;1;0.92'
          keyTimes='0;0.5;1'
          dur='3.8s'
          repeatCount='indefinite'
          calcMode='spline'
          keySplines='0.45 0 0.55 1;0.45 0 0.55 1'
        />
      </rect>

      {/* IA: rede de nós + brilhos (recortado ao cartão em gradiente) */}
      <g clipPath='url(#hero-ill-ai-clip)' aria-hidden>
        <g
          className='stroke-neutral-600/45 dark:stroke-neutral-400/50'
          strokeWidth={1.15}
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M124 156V136M124 156l17.5-10M124 156l17.5 10M124 156V176M124 156l-17.5 10M124 156l-17.5-10' />
          <path
            d='M124 136l17.5 10v20l-17.5 10-17.5-10v-20z'
            fill='none'
            strokeDasharray='4 5'
          >
            <animate
              attributeName='stroke-dashoffset'
              from='0'
              to='18'
              dur='2.4s'
              repeatCount='indefinite'
            />
          </path>
        </g>
        <circle cx='124' cy='156' r='5' fill='url(#hero-ill-ai-core)' className='stroke-neutral-600/55 dark:stroke-neutral-400/55' strokeWidth={1}>
          <animate attributeName='opacity' values='0.88;1;0.88' dur='2.8s' repeatCount='indefinite' />
        </circle>
        <circle cx='124' cy='136' r='3' className='fill-neutral-600/45 stroke-neutral-800/30 dark:fill-neutral-400/40 dark:stroke-neutral-200/25' strokeWidth={1}>
          <animate attributeName='opacity' values='0.5;1;0.5' dur='2s' repeatCount='indefinite' begin='0.2s' />
        </circle>
        <circle cx='141.5' cy='146' r='3' className='fill-neutral-600/40 stroke-neutral-800/28 dark:fill-neutral-400/40 dark:stroke-neutral-200/25' strokeWidth={1}>
          <animate attributeName='opacity' values='0.5;1;0.5' dur='2s' repeatCount='indefinite' begin='0.55s' />
        </circle>
        <circle cx='141.5' cy='166' r='3' className='fill-neutral-600/40 stroke-neutral-800/28 dark:fill-neutral-400/40 dark:stroke-neutral-200/25' strokeWidth={1}>
          <animate attributeName='opacity' values='0.5;1;0.5' dur='2s' repeatCount='indefinite' begin='0.9s' />
        </circle>
        <circle cx='124' cy='176' r='3' className='fill-neutral-600/40 stroke-neutral-800/28 dark:fill-neutral-400/40 dark:stroke-neutral-200/25' strokeWidth={1}>
          <animate attributeName='opacity' values='0.5;1;0.5' dur='2s' repeatCount='indefinite' begin='0.35s' />
        </circle>
        <circle cx='106.5' cy='166' r='3' className='fill-neutral-600/40 stroke-neutral-800/28 dark:fill-neutral-400/40 dark:stroke-neutral-200/25' strokeWidth={1}>
          <animate attributeName='opacity' values='0.5;1;0.5' dur='2s' repeatCount='indefinite' begin='0.7s' />
        </circle>
        <circle cx='106.5' cy='146' r='3' className='fill-neutral-600/40 stroke-neutral-800/28 dark:fill-neutral-400/40 dark:stroke-neutral-200/25' strokeWidth={1}>
          <animate attributeName='opacity' values='0.5;1;0.5' dur='2s' repeatCount='indefinite' begin='1.05s' />
        </circle>
        <path
          d='M186 132l2.2 5 5 2.2-5 2.2-2.2 5-2.2-5-5-2.2 5-2.2z'
          className='fill-neutral-500/35 stroke-neutral-600/30 dark:fill-neutral-400/35 dark:stroke-neutral-300/22'
          strokeWidth={0.75}
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 186 136.2'
            to='360 186 136.2'
            dur='14s'
            repeatCount='indefinite'
          />
          <animate attributeName='opacity' values='0.45;0.95;0.45' dur='3.2s' repeatCount='indefinite' />
        </path>
        <path
          d='M66 178l1.6 3.8 3.8 1.6-3.8 1.6-1.6 3.8-1.6-3.8-3.8-1.6 3.8-1.6z'
          className='fill-neutral-500/35 stroke-neutral-600/28 dark:fill-neutral-400/35 dark:stroke-neutral-300/22'
          strokeWidth={0.75}
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 66 181.8'
            to='-360 66 181.8'
            dur='18s'
            repeatCount='indefinite'
          />
          <animate attributeName='opacity' values='0.4;0.9;0.4' dur='2.7s' repeatCount='indefinite' begin='0.4s' />
        </path>
      </g>

      <rect x='216' y='124' width='172' height='12' rx='4' className='fill-black/[0.08] dark:fill-white/[0.12]'>
        <animate attributeName='opacity' values='0.65;1;0.65' dur='2.6s' repeatCount='indefinite' />
      </rect>
      <rect x='216' y='144' width='148' height='12' rx='4' className='fill-black/[0.06] dark:fill-white/[0.1]'>
        <animate
          attributeName='opacity'
          values='0.65;1;0.65'
          dur='2.6s'
          repeatCount='indefinite'
          begin='0.35s'
        />
      </rect>
      <rect x='216' y='164' width='120' height='12' rx='4' className='fill-black/[0.06] dark:fill-white/[0.1]'>
        <animate
          attributeName='opacity'
          values='0.65;1;0.65'
          dur='2.6s'
          repeatCount='indefinite'
          begin='0.7s'
        />
      </rect>

      <g>
        <animateTransform
          attributeName='transform'
          type='translate'
          values='0,0; 0,-1.25; 0,0'
          keyTimes='0;0.5;1'
          dur='4.25s'
          repeatCount='indefinite'
          calcMode='spline'
          keySplines='0.45 0 0.55 1;0.45 0 0.55 1'
        />
        <rect
          x='52'
          y='204'
          width='100'
          height='48'
          rx='8'
          className='fill-black/[0.05] stroke-black/[0.08] dark:fill-white/[0.05] dark:stroke-white/[0.1]'
          strokeWidth={1}
        />
        <g
          transform='translate(58,214)'
          className='text-neutral-600 dark:text-neutral-400'
          stroke='currentColor'
          fill='none'
          strokeWidth={1.65}
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden
        >
          <path d='M4 6L2 10l2 4M12 6l2 4-2 4M9 5.5L7 14.5' />
        </g>
        <text
          x='82'
          y='231'
          fontSize={9}
          fontWeight={600}
          fontFamily='ui-sans-serif, system-ui, sans-serif'
          className='fill-black/[0.62] dark:fill-white/[0.72]'
        >
          Produto
        </text>

        <rect
          x='164'
          y='204'
          width='100'
          height='48'
          rx='8'
          className='fill-black/[0.05] stroke-black/[0.08] dark:fill-white/[0.05] dark:stroke-white/[0.1]'
          strokeWidth={1}
        />
        <g
          transform='translate(170,214)'
          className='text-neutral-600 dark:text-neutral-400'
          stroke='currentColor'
          fill='none'
          strokeWidth={1.65}
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden
        >
          <circle cx='3.5' cy='10' r='2.25' />
          <path d='M6 10h6' />
          <circle cx='14.5' cy='10' r='2.25' />
          <path d='M3.5 6.5v-2a2 2 0 0 1 2-2h1M14.5 6.5v-2a2 2 0 0 0-2-2h-1' />
        </g>
        <text
          x='194'
          y='231'
          fontSize={9}
          fontWeight={600}
          fontFamily='ui-sans-serif, system-ui, sans-serif'
          className='fill-black/[0.62] dark:fill-white/[0.72]'
        >
          APIs
        </text>

        <rect
          x='276'
          y='204'
          width='100'
          height='48'
          rx='8'
          className='fill-black/[0.05] stroke-black/[0.08] dark:fill-white/[0.05] dark:stroke-white/[0.1]'
          strokeWidth={1}
        />
        <g
          transform='translate(282,214)'
          className='text-neutral-600 dark:text-neutral-400'
          stroke='currentColor'
          fill='none'
          strokeWidth={1.65}
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden
        >
          <path d='M4.5 13h8.5a2.8 2.8 0 0 0 0-5.6 3.2 3.2 0 0 0-6.2-1 2.4 2.4 0 0 0-4.6 1.3A2 2 0 0 0 4.5 13z' />
        </g>
        <text
          x='306'
          y='231'
          fontSize={9}
          fontWeight={600}
          fontFamily='ui-sans-serif, system-ui, sans-serif'
          className='fill-black/[0.62] dark:fill-white/[0.72]'
        >
          Nuvem
        </text>
      </g>
    </svg>
  )
}
