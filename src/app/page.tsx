import React from 'react'
import { IconTablerDevicesExclamation, IconTablerVectorBezier, IconTabler3dCubeSphere, IconTablerCloudComputing } from './components/icons'
import computer from './assets/computer-min.svg'
import Unscode from './components/icons/Unscode'
import illustration from './assets/illustration-min.svg'
import Image from 'next/image'

export default function Home() {
 
  return (
    <>
      <header className='container mx-auto my-24'>
        <nav className='top-0 left-0 pt-4 pb-2 w-full fixed'>
          <div className='container'>
            <div className='flex gap-8 justify-between items-center'>
              <div className='flex gap-4 items-center'>
                <Unscode className='w-24' />
              </div>
              <ul className='flex gap-8'>
                <li><a href='#'>Home</a></li>
                <li><a href='#services'>Serviços</a></li>
                <li><a href='#'>Contato</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='grid grid-cols-12 gap-12 items-center'>
          <div className='col-span-5'>
            <h1 className='text-4xl'>
              Bem-vindos ao mundo a inovação e 
eficiência tecnológica!<span className='header_text_switch underline text-purple-500 font-bold'></span> <br/>
              
            </h1>
          </div>
          <div className='col-span-7'>
            <Image priority className='header_illustration text-red-200' src={illustration} alt='Software development illustration' title="Software development illustration" />
          </div>
        </div>
      </header>

      <main>
        {/* Services section */}
        <section id='services' className='container mx-auto mt-24 mb-24'>
          <h2 className='text-3xl mb-12'> Tenha uma excelente experiência com otimização de custo e qualidade. </h2>
          <div className='mb-10 flex flex-row gap-x-8 items-center'>
              <h1 className='basis-3/6 text-5xl'> soluções de software inovadoras e práticas.  </h1>
              <div className='basis-3/6'>
                <p className='mb-4'>
                Seja qual for a sua necessidade em TI, estamos aqui para tornar sua visão uma realidade. 
                </p>
                <a href='#' className='btn btn-primary'>Veja aqui a solução para o seu segmento.</a>
              </div>
          </div>
          <div className='grid grid-cols-3 gap-8'>

            {/* Web development */}
            <div className='col-span-2 rounded-3xl dark:bg-yellow-600 service-card overflow-hidden'>
              <div className='h-full' style={{backgroundImage: 'linear-gradient(to right top, #ff9640, #ff8840, #ff7943, #ff6947, #ff594c, #fe4d53, #fc405a, #f93261, #f5286b, #f11f74, #ea187e, #e31587)'}}>
              <div className='p-8 pt-4 h-full flex flex-col gap-y-4 justify-between' style={{ backgroundImage: `url(${computer.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: '95% 10%', backgroundSize: 300, minHeight: '350px' }}>
                <div>
                  <IconTablerDevicesExclamation className='w-24 h-24 service-card-icon' />
                </div>   
                <div>
                  <h6 className='font-bold text-sm uppercase'>Conquistando o mercado de TI </h6>
                  <p className='mb-1 text-xl'>
                  Integridade, Inovação, Qualidade, Parceria e Responsabilidade. 
                  </p>
                  <p>
                  A Nossa paixão pela inovação e nossa busca incessante por excelência nos permitem desenvolver soluções personalizadas
                  </p>
                </div>
                </div>
              </div>
            </div>

            {/* Design */}
            <div className='border rounded-3xl dark:border-gray-800 service-card' style={{ minHeight: '350px'}}>
              <div className='p-8 pt-4 h-full'>
              <div className='h-full flex flex-col gap-y-4 justify-between'>
                <div>
                  <IconTablerVectorBezier className='w-24 h-24 service-card-icon' />
                </div>   
                <div>
                  <h6 className='font-bold text-sm uppercase'>Desenvolvimento de software</h6>
                  <p className='mb-1 text-xl'>
                    
                  </p>
                  <p>
                  Desenvolvimento personalizado de software para atender às necessidades específicas de uma empresa ou cliente. Isso inclui análise de requisitos, design, programação, testes e implementação de software.
                  </p>
                </div>
                </div>
              </div>
            </div>

            {/* IA */}
            <div className='border rounded-3xl dark:border-gray-800' style={{ minHeight: '300px'}}>
              <div className='p-8 pt-4 h-full'>
              <div className='h-full flex flex-col gap-y-4 justify-between'>
                <div>
                  <IconTabler3dCubeSphere className='w-24 h-24 service-card-icon' />
                </div>   
                <div>
                  <h6 className='font-bold text-sm uppercase'> DevOps</h6>
                  <p>
                  Permite construir, implementar e gerenciar aplicativos de segurança, assim como aplicativos nativos da cloud e em múltiplos dispositivos. 
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div className='border rounded-3xl dark:border-gray-800' style={{ minHeight: '300px'}}></div>

            {/* Cloud computing */}
            <div className='border rounded-3xl dark:border-gray-800' style={{ minHeight: '300px'}}>
              <div className='p-8 pt-4 h-full'>
              <div className='h-full flex flex-col gap-y-4 justify-between'>
                <div>
                  <IconTablerCloudComputing className='w-24 h-24 service-card-icon' />
                </div>   
                <div>
                  <h6 className='font-bold text-sm uppercase'>Serviços em Nuvem</h6>
                  <p>
                  Oferecem hospedagem de sites e aplicativos, bem como serviços em nuvem, permitindo que as empresas acessem recursos de computação e armazenamento sob demanda.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='container mx-auto'>
          <div className='flex gap-12'>
            <div>
              <Unscode className='w-36' />
            </div>
            <div className='flex-1'>
              <div className='grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                  <h6 className='font-bold text-sm uppercase'>Lorem ipsum dolor</h6>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor si
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}
