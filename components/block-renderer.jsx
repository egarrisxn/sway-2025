import React from 'react'
import Cta from './cta'
import Info from './info-section'

const Blocks = {
  callToAction: Cta,
  infoSection: Info,
}

export default function BlockRenderer({block, index}) {
  // Block does exist
  if (typeof Blocks[block._type] !== 'undefined') {
    return React.createElement(Blocks[block._type], {
      key: block._id,
      block: block,
      index: index,
    })
  }
  // Block doesn't exist yet
  return React.createElement(
    () => (
      <div className='w-full rounded bg-gray-100 p-20 text-center text-gray-500'>
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    {key: block._id},
  )
}
