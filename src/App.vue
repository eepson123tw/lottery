<template>
  <div id="nav">
    <h1 class="ssr_only">
      樂透遊戲
    </h1>
    <router-view />
  </div>
</template>

<style lang="scss">
.ssr_only{
  overflow: hidden;
  width: 1px;
  height: 1px;
  position: absolute;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
