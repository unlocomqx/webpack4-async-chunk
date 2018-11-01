document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOMContentLoaded')
  await import(
    './test'
    )
  console.log('loaded test chunk')
})