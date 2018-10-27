<template>
  <div class="ads-tab dashboard-tab">
    <div class="row">
      <div class="col-md-12">
        <vuestic-data-table
          :apiMode="apiMode"
          :tableData="tableData"
          :tableFields="tableFields"
          :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide"
          :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from 'components/tables/BadgeColumn.vue'
import TableData from './TableData'
import FieldsDef from './fields-definition'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'ads-tab',

  data () {
    return {
      apiMode: false,
      sortFunctions: FieldsDef.sortFunctions,
      tableData: TableData,
      onEachSide: 1,
      tableFields: FieldsDef.tableFields,
      dataModeFilterableFields: ['reach','amount_spent'],
      itemsPerPage: [
        {
          value: 10
        },
        {
          value: 10
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }

</style>
