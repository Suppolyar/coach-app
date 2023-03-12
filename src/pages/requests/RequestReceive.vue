<template>
  <base-dialog :show='!!error' title='An error occurred' @close='handleError'>
    <p>{{error}}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Request receive</h2>
      </header>
      <div v-if='isLoading'>
        <base-spinner />
      </div>
      <ul v-else-if='hasRequests && !isLoading'>
        <request-item v-for='req in receiveRequests' :key='req.id' :email='req.userEmail' :message='req.message'/>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue';

export default {
  components: { RequestItem },
  data() {
    return {
      error: null,
      isLoading: false
    }
  },
  computed: {
    receiveRequests() {
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  },
  created() {
    this.loadRequests()
  },
  methods: {
    async loadRequests() {
      this.isLoading = true
      try {
        await this.$store.dispatch('requests/fetchRequest')
      } catch (error) {
        this.error = error.message || 'Something failed'
      } finally {
        this.isLoading = false
      }
    },
    handleError() {
      this.error = null
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}

</style>
