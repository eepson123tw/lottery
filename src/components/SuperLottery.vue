/* eslint-disable no-unused-vars */
<template>
  <section class=" bg-red-300 h-[100vh]">
    <h2 class=" text-gray-500 pt-10 text-7xl">
      樂透開獎試手氣
    </h2>
    <button
      class="mt-10 bg-yellow-300  p-2 ring-offset-red-300 rounded-sm focus:ring-2 ring-offset-4 focus:ring-red-500 "
      @click="rest"
    >
      電腦選號
    </button>
    <ul class="flex w-[600px] h-[50vh] mx-auto mt-10 justify-evenly">
      <li
        v-for="(item,i) of ary"
        :key="item"
        :class="{last:i===ary.length-1 && ary.length===7}"
        class="w-[50px] h-[50px] text-3xl font-bold bg-red-50 shadow-2xl  flex justify-center items-center rounded-full"
      >
        {{ item }}
      </li>
      <!-- <li
        v-for="item of ary"
        :key="item"
      >
        {{ item }}
      </li> -->
    </ul>
  </section>
</template>

<script>
import { setArray } from '@/composition-api/lottery.js'
import { ref } from '@vue/reactivity'

export default {
  setup () {
    const { ary, setAry, rest } = setArray()

    const isAddLast = ref(false)

    // eslint-disable-next-line no-unused-vars

    // () => {
    //   if (ary.length === 7) {
    //     isAddLast.value = true
    //   }
    // }

    return {
      ary, setAry, isAddLast, rest
    }
  }
}
</script>
<style scoped>
.last{
  background-color: red;
}
</style>
