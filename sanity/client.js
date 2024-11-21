import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {projectId, dataset, apiVersion, studioUrl} from './api'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl: studioUrl,
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }

      return props.filterDefault(props)
    },
  },
})

// const imageBuilder = imageUrlBuilder(client)

// export function urlFor(source) {
//   return imageBuilder.image(source)
// }
