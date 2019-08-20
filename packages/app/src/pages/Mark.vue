<template>
  <MarkForm
    @updateForm="updateMarkForm"
    @pushToStrim="pushMark"
    :markForm="markForm"
  />
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
