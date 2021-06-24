<template>
  <div class="container">
    <div>
      <h1 class="text-2xl text-gray-700 py-4">fluoro-front</h1>
    </div>
    <div>
      <TextField
        ref="accountId"
        label="アカウントID"
        placeholder="andmohiko"
      />
    </div>
  </div>
</template>

<script>
import TextField from '@/components/TextField.vue'

export default {
  components: {
    TextField
  },
  methods: {
    // const created_sukipi = await axios.post("/sukipis", new_sukipi)
    // const sukipis_data = await axios.get(`/sukipis?uid=${user.uid}`)
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
