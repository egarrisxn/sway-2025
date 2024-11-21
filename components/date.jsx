import {format} from 'date-fns'

export default function DateComponent({dateString}) {
  if (!dateString) {
    return null
  }

  return <time dateTime={dateString}>{format(new Date(dateString), 'LLLL	d, yyyy')}</time>
}
