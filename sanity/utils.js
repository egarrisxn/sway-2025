import createImageUrlBuilder from '@sanity/image-url'
import {dataset, projectId} from './api'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source) => {
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}

export function resolveOpenGraphImage(image, width = 1200, height = 627) {
  if (!image) return
  const url = urlForImage(image)?.width(1200).height(627).fit('crop').url()
  if (!url) return
  return {url, alt: image?.alt, width, height}
}

export function linkResolver(link) {
  if (!link) return null

  if (!link.linkType && link.href) {
    link.linkType = 'href'
  }

  switch (link.linkType) {
    case 'href':
      return link.href || null
    case 'page':
      if (link?.page) {
        return `/${link.page}`
      }
      return null
    case 'post':
      if (link?.post) {
        return `/posts/${link.post}`
      }
      return null
    default:
      return null
  }
}
