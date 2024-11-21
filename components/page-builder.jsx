import Link from 'next/link'
import BlockRenderer from './block-renderer'
import {studioUrl} from '@/sanity/api'

export default function PageBuilder({page}) {
  if (page?.pageBuilder && page.pageBuilder.length > 0) {
    return (
      <>
        {page.pageBuilder.map((block, index) => (
          <BlockRenderer key={block._key} index={index} block={block} />
        ))}
      </>
    )
  }

  // If there are no blocks in the page builder.
  return (
    <>
      <div className='container'>
        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
          This page has no content!
        </h1>
        <p className='mt-2 text-base text-gray-500'>
          Open the page in Sanity Studio to add content.
        </p>
        <div className='mt-10 flex'>
          <Link
            className='mr-6 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-colors duration-200 hover:bg-red-500 focus:bg-cyan-500'
            href={`${studioUrl}/structure/intent/edit/template=page;type=page;path=pageBuilder;id=${page._id}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Add content to this page
          </Link>
        </div>
      </div>
    </>
  )
}
