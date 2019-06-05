<template>
  <MarkForm
    @updateForm="updateMarkForm"
    @pushToStrim="pushMark"
    :markForm="markForm"
  />
  <!-- <h2>Hello</h2> -->
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'MarkPage',
  components: {
    MarkForm: () => import('../components/MarkForm')
  },
  computed: {
    ...mapState({
      markForm: state => state.marks.markForm
    })
  },
  methods: {
    ...mapActions([
      'pushMark'
    ]),
    ...mapMutations([
      'updateMarkForm'
    ])
  }
}
</script>
