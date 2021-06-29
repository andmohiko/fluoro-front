<template>
  <div>
    <header class="header">
      <template>
        <button class="reload-btn" @click="reload">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2 3.36V7.68L14.88 7.67952" stroke="#E9ECF0" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M20.1595 12C20.1595 16.5072 16.5067 20.16 11.9995 20.16C7.49234 20.16 3.83954 16.5072 3.83954 12C3.83954 7.4928 7.49234 3.84 11.9995 3.84C14.4048 3.84 16.5672 4.88016 18.0605 6.53568C18.3571 6.86496 18.6279 7.21872 18.8683 7.59312" stroke="#E9ECF0" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
          </svg>
        </button>
      </template>
      <div>
        <h1 class="page-title">{{ pageTitle }}</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    routename() {
      return this.$route.name
    },
    pageTitle() {
      switch (this.routename) {
        case 'queue': {
          return '分析キュー'
        }
        default: {
          return 'fluoro'
        }
      }
    }
  },
  methods: {
    route() {
      console.log(this.$route.name)
    },
    reload() {
      if (this.routename === 'index') {
        this.$store.dispatch('setUserAnalyzeResults')
        return
      }
      if (this.routename === 'queue') {
        this.$store.dispatch('setUserAnalyzeQueue')
        return
      }
      return
    },
    back() {
      this.$router.go(-1)
    },
    async getRecords() {
      await this.$store.dispatch('getRecords', this.user.userId)
      if (this.$route.path === '/') logEvent('getRecordsInTop', undefined)
      if (this.$route.path === '/arena' || this.$route.path === '/arena/') logEvent('getRecordsInArena', undefined)
      if (this.$route.path === '/analytics' || this.$route.path === '/analytics/') logEvent('getRecordsInAnalytics', undefined)
    },
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  width: 100%;
  background-color: $primary;
  position: fixed;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 24px;
  color: black;
  margin-left: 40px;
}
.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #eaecf0;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
}
.back-btn {
  position: absolute;
  left: 5px;
}
.reload-btn {
  position: absolute;
  left: 8px;
}
.settings-btn {
  position: absolute;
  right: 8px;
  top: 10px;
}
</style>