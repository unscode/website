import React from 'react'

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
        <div className='grid grid-cols-3 gap-8 '>
          <div className='col-span-2 border rounded-3xl border-red-400'>
            <div className='p-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eius possimus obcaecati earum debitis optio ipsum dolorum sit quidem blanditiis vitae accusantium saepe ut voluptatibus laboriosam, eligendi magni quae harum?</div>
          </div>
          <div className='border rounded-3xl border-blue-400'>
            <div className='p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A velit, vitae eligendi animi reiciendis doloribus officiis, libero autem delectus dolorem quaerat, corporis voluptate! Eos quasi praesentium saepe mollitia, atque iusto.</div>
          </div>
          <div className='border rounded-3xl border-green-400'>
            <div className='p-4'>Lorem ipsum dolor sit</div>
          </div>
          <div className='border rounded-3xl border-yellow-400'>
            <div className='p-4'>Lorem ipsum dolor sit</div>
          </div>
          <div className='border rounded-3xl border-purple-400'>
            <div className='p-4'>Lorem ipsum dolor sit</div>
          </div>
        </div>
      </section>
    </main>
  )
}
