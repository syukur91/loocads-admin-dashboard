<template>
  <div class="campaigns-tab dashboard-tab">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tables.advanced')">
          <vuestic-data-table
            :apiUrl="apiUrl"
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultTablePerPage"
            :sortFunctions="sortFunctions"
            :apiMode="apiMode"
            :paginationPath="paginationPath"
            :queryParams="queryParams"
          >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
          </vuestic-data-table>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from './BadgeColumn.vue'
import FieldsDefCampaign from 'vuestic-components/vuestic-datatable/data/fields-definition-campaign'
import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
import { SpringSpinner } from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'campaigns-tab',
  components: {
    SpringSpinner
  },
  data () {
    return {
      apiUrl: 'https://client.loocads.com/campaigns',
      apiMode: true,
      tableFields: FieldsDefCampaign.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDefCampaign.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 3,
      queryParams: QueryParams
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
