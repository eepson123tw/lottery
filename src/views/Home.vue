<template>
  <div class="home">
    <SuperLottery />
  </div>
</template>

<script>
// @ is an alias to /src
import SuperLottery from '@/components/SuperLottery.vue'

export default {
  name: 'Home',
  components: {
    SuperLottery
  }
}
</script>
