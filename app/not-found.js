import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center px-2 text-center'>
      <h1 className='text-secondary text-7xl font-bold'>404</h1>
      <h2 className='pb-4 text-xl font-semibold'>Page not found.</h2>
      <Link href='/'>Return Home</Link>
    </section>
  )
}
