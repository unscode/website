import React from 'react'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      {/* Services section */}
      <section className='container mx-auto'>
        <h3 className='mb-10 uppercase'>Services</h3>
        <div className='flex flex-row gap-x-8 items-center'>
            <h1 className='basis-3/6 text-5xl'>Build, deploy, and manage all your apps in a secure cloud workspace.</h1>
            <div className='basis-3/6'>
              <p className='mb-4'>
              Spend more time on what matters. Start in seconds and scale to millions with a suite of powerful cloud tools and services for every type of app.
              </p>
              <a href='#' className='btn btn-primary'>Explore development workflow</a>
            </div>
        </div>
      </section>
    </main>
  )
}
