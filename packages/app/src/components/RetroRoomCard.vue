<template>
  <div class="retro-room" @click="handleClick">
    <div class="retro-room-header">
      <span class="date">29.08.19</span>
      <span class="week-day">Thursday</span>
    </div>
    <div class="retro-room-content">
      <h4 class="room-name">{{item.title}}</h4>
      <span class="room-time">11:00 <v-icon>fas fa-clock</v-icon></span>
    </div>
    <div class="retro-room-footer">
      <div
        icon
        v-for="({
          color,
          icon,
          name
        }, key) in actionButtons"
        class="retro-room-footer_btn"
        :key="key"
      >
        <v-btn
          icon
          @click.stop="onActionClick(name)"
          class="retro-card-btn"
        >
          <v-icon :color="color">
            {{icon}}
          </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { actionButtons } from '../setups/createRoomForm.setup'

export default {
  data: () => ({
    actionButtons
  }),
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions([
      'closeRoom'
    ]),
    editRoom() {
      this.$emit('onRetroEdit', this.id)
    },
    shareRoom() {
      this.$router.push(`retros/share/${this.id}`)
    },
    handleClick() {
      this.$emit('onRetroClick', this.id)
    },
    onActionClick(name) {
      this[`${name}Room`](this.id)
    }
  }
}
</script>

<style lang="stylus">
  .retro-room
    padding 15px
    width 320px
    background #fff
    border-radius 6px
    box-shadow 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)
    margin-bottom 20px

  .retro-room-header
    display flex
    justify-content flex-start

    span
      font-size 10px
      width 20%
      text-align left

  .retro-room-content
    display flex
    margin-top 15px
    justify-content space-between

    h4
      font-weight 400

    span, i
      font-size 10px
      font-weight 200
      vertical-align baseline
      margin-top 3px

    // i
    //   margin-left 3px

  .retro-room-footer
    display flex
    margin-top 20px

    &_btn
      width 10%
      text-align left

      i
        font-size 14px

      button
        margin 0

      &:last-child
        width 80%
        text-align right

    .v-btn
      margin-left -10px
</style>
