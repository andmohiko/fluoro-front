<template>
  <div class="footer">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">
            <div class="menu-item">
              <div class="menu-icon">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path v-if="routename === 'index'" d="M21.6667 16.6667V5L6.66669 23.3333H18.3334V35L33.3334 16.6667H21.6667Z" stroke="#ab6a91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path v-else d="M21.6667 16.6667V5L6.66669 23.3333H18.3334V35L33.3334 16.6667H21.6667Z" stroke="#4a5568d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="menu-title" :class="{ textBlue: routename === 'index' }">分析一覧</span>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/queue">
            <div class="menu-item">
              <div class="menu-icon">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path v-if="routename === 'queue'" d="M1 16.5H21M1 1.5H21H1ZM1 6.5H21H1ZM1 11.5H21H1Z" stroke="#ab6a91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path v-else d="M1 16.5H21M1 1.5H21H1ZM1 6.5H21H1ZM1 11.5H21H1Z" stroke="#4a5568d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="menu-title" :class="{ textBlue: routename === 'queue' }">分析キュー</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.state.user
    },
    routename() {
      return this.$route.name
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.footer {
  height: 70px;
  width: 100%;
  padding: 0 30px;
  border-top: solid 1px #4a55683a;
  background-color: $white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 450px;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    // margin-left: 4rem;
    list-style-type: none;
  }
}
.menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
}
.menu-icon {
  height: 30px;
  width: 30px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-title {
  font-size: 10px;
  font-weight: 600;
  color: #4a5568d9;
}
.textBlue {
  color: $primary-light;
}
.coming-soon {
  font-size: 10px;
  color: #a8b1c2d9;
}
</style>