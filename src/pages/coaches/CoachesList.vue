<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class='controls'>
        <base-btn mode='outline'>Refresh</base-btn>
        <base-btn link to='/register'>Register as coach</base-btn>
      </div>
      <ul v-if='hasCoaches'>
        <coach-item
          v-for='coach in filteredCoaches'
          :key='coach.id'
          :id='coach.id'
          :first-name='coach.firstName'
          :last-name='coach.lastName'
          :rate='coach.hourlyRate'
          :areas='coach.areas'
        />
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '@/components/coaches/CoachItem.vue';

export default {
  components: { CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>