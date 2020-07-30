<template>
  <div>
    <ul class="list">
      <li v-for="(row, index) in data" :key="index">
        <span class="glyphicon glyphicon-asterisk"></span>
        {{row.todo}}
        <span class="todoBtn label label-primary"
          v-if="selectedTab === 'todo'"
          v-on:click="finishBtnClick(index)">
          <span class="glyphicon glyphicon-ok">Finish</span>
        </span>
        <span class="todoBtn label label-danger"
          v-if="selectedTab === 'finish'"
          v-on:click="resetBtnClick(index)">Cancel</span>
        <span class="todoBtn label label-danger"
          v-on:click="removeBtnClick(row)">Delete</span>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  props: ['data', 'selectedTab'],
  methods: {
    finishBtnClick (index) {
      this.$emit('@finish', index)
    },
    resetBtnClick (index) {
      this.$emit('@reset', index)
    },
    removeBtnClick (row) {
      this.$emit('@remove', row)
    }
  }
}
</script>
