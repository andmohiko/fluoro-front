export default async ({ store }) => {
  try {
    store.dispatch('setUserAnalyzeResults')
    store.dispatch('setUserAnalyzeQueue')
  } catch (error) {
    console.log('error in setup', error)
  }
}
