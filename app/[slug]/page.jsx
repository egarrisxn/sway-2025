import Head from 'next/head'
import PageBuilderPage from '@/components/page-builder'
import {sanityFetch} from '@/sanity/live'
import {getPageQuery, pagesSlugs} from '@/sanity/queries'

export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: pagesSlugs,
    // Use the published perspective in generateStaticParams
    perspective: 'published',
    stega: false,
  })
  return data
}

export async function generateMetadata(props) {
  const params = await props.params
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })

  return {
    title: page?.name,
    description: page?.heading,
  }
}

export default async function Page(props) {
  const params = await props.params
  const [{data: page}] = await Promise.all([sanityFetch({query: getPageQuery, params})])

  if (!page?._id) {
    return null
  }

  return (
    <div className='my-12 lg:my-24'>
      <Head>
        <title>{page.heading}</title>
      </Head>
      <div className=''>
        <div className='container'>
          <div className='border-b border-gray-100 pb-6'>
            <div className='max-w-3xl'>
              <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl'>
                {page.heading}
              </h2>
              <p className='mt-4 text-base font-light uppercase leading-relaxed text-gray-600 lg:text-lg'>
                {page.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PageBuilderPage page={page} />
    </div>
  )
}
