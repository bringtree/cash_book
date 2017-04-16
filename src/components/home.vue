<template>
  <div>
    {{getName}}
    <button @click="importName('xiaohong')"></button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default{
    computed: mapGetters([
      'getName'
    ]),
    methods: mapActions([
      'importName'
    ])
  }
</script>

<style scoped>

</style>
