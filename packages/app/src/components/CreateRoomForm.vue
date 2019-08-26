<template>
  <div class="modal-form">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <v-text-field
            name="title"
            label="Room title"
            placeholder="Room title"
            @input="value => updateRoomForm({
              value,
              key: 'title'
            })"
            :value="roomForm.title"
          />
        </v-flex>
        <DatePicker
          name="date"
          label="Retrospective date"
          @fieldUpdated="updateRoomForm"
        />
        <v-flex xs12>
          <v-btn
            large
            light
            class="submit-btn white--text"
            @click="createRoom"
            color="#ff6200"
          >
            Create Room
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'CreateRoomForm',
  components: {
    DatePicker: () => import('./DatePicker')
  },
  methods: {
    ...mapActions([
      'createRoom'
    ]),
    ...mapMutations([
      'updateRoomForm'
    ])
  },
  computed: {
    ...mapState({
      roomForm: ({
        retros: {
          roomForm
        }
      }) => roomForm
    })
  }
}
</script>

<style lang="stylus">
  .submit-btn
    margin 0
    width 100%
</style>
