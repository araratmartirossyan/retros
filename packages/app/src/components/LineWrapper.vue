<template>
  <v-flex
    text-md-left
    :class="[sizes]"
  >
    <div class="room-card_holder">
      <div class="column-holder">
        <h2>{{title}}</h2>
        <slot name="header"></slot>
      </div>
      <slot name="content"></slot>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'LineWrapper',
  props: {
    title: {
      type: String,
      default: ''
    },
    sizes: {
      type: Array,
      default: () => ['md4', 'xs4', 'sm4']
    }
  }
}
</script>

<style lang="stylus">
  .room-card_holder
    background #f3f3f3
    text-align -webkit-center
    box-shadow 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)
    padding 10px 0 10px 0
    border-radius 6px

  .column-holder
    text-align left
    margin 10px 5%
    display flex
    justify-content space-between
</style>
