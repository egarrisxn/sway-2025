import {createClient} from 'next-sanity'
import {projectId, dataset, apiVersion, studioUrl} from './api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl,
    logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === 'title') {
        return true
      }
      return props.filterDefault(props)
    },
  },
})
