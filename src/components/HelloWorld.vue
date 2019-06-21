<template>
  <div>
    <top-header></top-header>
    <section>
      <side-bar></side-bar>
    <right-plane></right-plane>
    </section>
  </div>
</template>

<script>
import topHeader from '@/views/header'
import sideBar from '@/views/selider'
import rightPlane from '@/views/right-plane'
export default {
  name: 'HelloWorld',
  components: { topHeader, sideBar, rightPlane },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  display: flex;
}
</style>
