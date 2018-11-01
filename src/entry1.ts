document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOMContentLoaded')
  // lodash should be made into a separate chunk
  // but it gets included in the entry1 chunk for some reason
  import('lodash').then(_ => {
    console.log(_.concat)
  });
  console.log('loaded test chunk')

})