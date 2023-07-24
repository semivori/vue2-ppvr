<template>
  <div id="app" class="app">
    <button v-popover:foo style="position: fixed; top: 100px">00000</button>

    <popover name="foo">
      Hello
    </popover>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {}
  },
}
</script>
