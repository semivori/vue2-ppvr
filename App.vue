<template>
  <div id="app" class="app">
    <div class="d-flex justify-content-between p-5" style="background-color: antiquewhite">
      <div>
        <button class="btn btn-info" v-popover:p1.right>00000</button>
        <button class="btn btn-info" v-popover:p2.bottom>00000</button>
      </div>
      <div>
        <button class="btn btn-info" v-popover:p3.left>00000</button>
        <button class="btn btn-info" v-popover:p4.top>00000</button>
      </div>
    </div>


    <popover v-for="n in 4" :name="`p${n}`">Hello {{n}}</popover>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
  },
}
</script>
