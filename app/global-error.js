'use client'

export default function GlobalError({error, reset}) {
  return (
    <html>
      <body>
        <section className='container mx-auto flex flex-col items-center justify-center text-center'>
          <h1 className='text-7xl font-semibold'>Oops!</h1>
          <h2 className='pb-4 text-xl'>Something went wrong.</h2>
          <h2>Something went wrong!</h2>
          <button
            onClick={() => reset()}
            className='bg-light-fade shadow-soft before:from-primary-tint before:to-primary-fade hover:shadow-hard 3xl:text-lg dark:bg-dark-fade relative inline-flex h-10 cursor-pointer appearance-none items-center justify-center overflow-hidden whitespace-nowrap rounded-lg border-2 px-12 transition-transform duration-500 ease-in-out before:absolute before:inset-0 before:z-[-1] before:translate-x-full before:bg-gradient-to-r before:duration-500 hover:scale-105 hover:before:-translate-x-0 focus-visible:outline-none focus-visible:ring-0 active:scale-100 disabled:pointer-events-none disabled:opacity-50'
          >
            Try again
          </button>
          {/* <pre className='mt-6 px-2 max-w-md text-wrap text-center text-xs text-gray-fade'>
        {error.message}
      </pre> */}
        </section>
      </body>
    </html>
  )
}