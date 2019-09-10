<template>
  <qrGenerator
    :value="qrValue"
    :options="{ width: 400 }"
  />
</template>

<script>
export default {
  components: {
    qrGenerator: () => import('@chenfengyuan/vue-qrcode')
  },
  computed: {
    qrValue() {
      const { id } = this.$route.params
      const url = window.location.hostname
      return `${url}/retros/${id}`
    }
  }
}
</script>
