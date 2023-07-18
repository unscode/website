import React from 'react'
import { IconTablerDevicesExclamation, IconTablerVectorBezier, IconTabler3dCubeSphere, IconTablerCloudComputing } from './components/icons'
import computer from './assets/computer-min.svg'

export default function Home() {
 
  return (
    <main>
      <h1>Home</h1>

      {/* Services section */}
      <section className='container mx-auto'>
        <h3 className='mb-10 uppercase'>Services</h3>
        <div className='mb-10 flex flex-row gap-x-8 items-center'>
            <h1 className='basis-3/6 text-5xl'>Build, deploy, and manage all your apps in a secure cloud workspace.</h1>
            <div className='basis-3/6'>
              <p className='mb-4'>
                Spend more time on what matters. Start in seconds and scale to millions with a suite of powerful cloud tools and services for every type of app.
              </p>
              <a href='#' className='btn btn-primary'>Explore development workflow</a>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-8'>

          {/* Web development */}
          <div className='col-span-2 border rounded-3xl dark:bg-yellow-600 service-card' style={{ backgroundColor: '#e57b61', backgroundImage: `url(${computer.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: '95% 5%', backgroundSize: 300, minHeight: '350px' }}>
            <div className='p-8 pt-4 h-full'>
             <div className='h-full flex flex-col gap-y-4 justify-between'>
              <div>
                <IconTablerDevicesExclamation className='w-24 h-24 service-card-icon' />
              </div>   
              <div>
                <h6 className='font-bold text-sm uppercase'>Lorem ipsum dolor</h6>
                <p className='mb-1 text-xl'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p>
                  Ex eius possimus obcaecati earum debitis optio ipsum dolorum sit quidem blanditiis vitae accusantium saepe ut voluptatibus laboriosam, eligendi magni quae harum?
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
                <h6 className='font-bold text-sm uppercase'>Lorem ipsum dolor</h6>
                <p className='mb-1 text-xl'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p>
                  Ex eius possimus obcaecati earum debitis optio ipsum dolorum sit quidem blanditiis vitae accusantium saepe ut voluptatibus laboriosam, eligendi magni quae harum?
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
                <h6 className='font-bold text-sm uppercase'>Lorem ipsum dolor</h6>
                <p>
                  Ex eius possimus obcaecati earum debitis optio ipsum dolorum sit quidem blanditiis vitae accusantium saepe ut voluptatibus laboriosam, eligendi magni quae harum?
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
                <h6 className='font-bold text-sm uppercase'>Lorem ipsum dolor</h6>
                <p>
                  Ex eius possimus obcaecati earum debitis vitae accusantium saepe ut voluptatibus laboriosam, eligendi magni quae harum?
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
