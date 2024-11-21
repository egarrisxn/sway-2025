import {defineEnableDraftMode} from 'next-sanity/draft-mode'
import {client} from '@/sanity/client'
import {token} from '@/sanity/token'

export const {GET} = defineEnableDraftMode({
  client: client.withConfig({token}),
})
