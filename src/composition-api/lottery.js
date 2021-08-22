import { reactive, onMounted, onBeforeUnmount, watch } from 'vue'

/**
*setArray
*製作一個樂透產生器
*@params{Number} X is ...
*@params{型別}
*@returns{型別}
*/
export function setArray() {
  const ary = reactive([])
  const timer = reactive({})
  const setAry = () => {
    let num = Math.ceil(Math.random() * 39)
    if (ary.length === 6) {
      num = Math.ceil(Math.random() * 8)
    }
    ary.forEach((d, i, arr) => {
      if (arr.indexOf(d) !== i) {
        ary.splice(i, 1)
      }
    })
    ary.push(num)
  }

  watch(ary, (old, cur) => {
    if (ary.length >= 7) {
      clearInterval(timer.id)
    }
  })

  const rest = () => {
    ary.splice(0, ary.length)
    if (ary.length <= 6) {
      timer.id = setInterval(() => {
        setAry()
      }, 1000)
    } else {
      clearInterval(timer.id)
      return 'done'
    }
  }

  onMounted(() => {
    if (ary.length <= 6) {
      timer.id = setInterval(() => {
        setAry()
      }, 1000)
    } else {
      clearInterval(timer.id)
      return 'done'
    }
  })

  onBeforeUnmount(() => {
    clearInterval(timer.id)
  })

  return {
    ary, setAry, rest
  }
}
