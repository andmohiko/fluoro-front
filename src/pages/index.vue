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
    <p class="error">{{ flashMessage }}</p>
    <Button @onClick="submit" label="送信" />
    <div class="records">
      <div class="mx-auto py-2 px-1">
        <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative" style="height: 100%;">
          <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
            <thead>
              <tr class="text-left">
                <th
                  v-for="heading in headings" :key="heading.id"
                  class="bg-gray-100 sticky top-0 border-b border-gray-200 px-4 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
                >{{ heading }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="record in results" :key="record.id">
                <td class="border-dashed border-t border-gray-200 px-3">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.created_at }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.twitter_user_id }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.twitter_user_name }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.tweet_frequency_per_day }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.average_tweet_length }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.follows_count }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.followers_count }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200">
                  <span class="text-gray-700 px-1 py-3 flex items-center">
                    {{ record.account_created_at }}
                  </span>
                </td>
                <td class="border-dashed border-t border-gray-200 text-gray-600 text-xs">
                  <button class="pt-1" @click="openEditModal(record)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13L11 5ZM17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9V12.1716L17.5858 3.58579Z" stroke="#A0AEC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios"
import Button from "@/components/Button.vue";
import TextField from '@/components/TextField.vue'

export default {
  components: {
    Button,
    TextField
  },
  data() {
    return {
      flashMessage: '',
      headings: ['分析日', 'twitterId', 'username', 'ツイート頻度', '平均文字数', 'フォロー', 'フォロワー', 'アカウント作成日', 'edit']
    }
  },
  computed: {
    results() {
      return this.$store.state.userAnalyzeResults
    }
  },
  methods: {
    show() {
      console.log(
        process.env.ENV == 'develop' ? process.env.BASE_URL : process.env.PROD_URL
      )
    },

    async submit() {
      const accountId = this.$refs.accountId.input
      if (!accountId) {
        this.flashMessage = 'IDが空です'
        return
      }
      const addRequest = await axios.post(
        '/requests',
        {
            twitter_user_id: accountId,
            is_searched: false,
            requested_from: 'admin'
        }
      )
      this.flashMessage = '送信done'
      this.clearInputs()
    },
    clearInputs() {
      const accountIdRef = this.$refs.accountId
      accountIdRef.clearField()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.error {
  color: #ff0000;
  padding-bottom: 4px;
}
</style>
