document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOMContentLoaded')
  // lodash should be made into a separate chunk
  // but it gets included in the entry1 chunk for some reason
  const _ = await import('lodash')
  console.log('loaded test chunk')
  console.log(_.concat)
})