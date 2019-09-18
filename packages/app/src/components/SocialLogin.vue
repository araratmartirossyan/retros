<template>
  <div class="social-login">
    <v-btn
      v-for="({
        className,
        color,
        title,
        name,
        disabled
      }, key) in socialLogins"
      :key="key"
      :class="className"
      :color="color"
      :disabled="disabled"
      @click="$emit('onClick', name)"
      block
    >
      <v-icon>fab fa-{{name}}</v-icon>
      {{title}}
    </v-btn>
  </div>
</template>

<script>
import { socialLogins } from '../setups/socialLogin.setup'

export default {
  name: 'social-login',
  data: () => ({
    socialLogins
  })
}
</script>

<style lang="stylus">
  .v-btn .v-icon
    margin-right 10px
</style>
