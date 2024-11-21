import {Image} from 'next-sanity/image'
import {urlForImage} from '@/sanity/utils'
import DateComponent from './date'

export default function Avatar({person, date}) {
  const {firstName, lastName, picture} = person

  return (
    <div className='flex items-center'>
      {picture?.asset?._ref ? (
        <div className='mr-4 h-9 w-9'>
          <Image
            alt={picture?.alt || ''}
            className='h-full rounded-full object-cover'
            height={48}
            width={48}
            src={urlForImage(picture)?.height(96).width(96).fit('crop').url()}
          />
        </div>
      ) : (
        <div className='mr-1'>By </div>
      )}
      <div className='flex flex-col'>
        {firstName && lastName && (
          <div className='font-bold'>
            {firstName} {lastName}
          </div>
        )}
        <div className='text-sm text-gray-500'>
          <DateComponent dateString={date} />
        </div>
      </div>
    </div>
  )
}
