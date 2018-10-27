export default {
  tableFields: [
    // {
    //   name: '__component:badge-column',
    //   title: '',
    //   dataClass: 'text-center'
    // },
    {
      name: 'ad_name',
      title: 'Ad Name',
      sortField: 'ad_name'
    },
    {
      name: 'campaign',
      title: 'Campaign',
      sortField: 'campaign'
    },
    {
      name: 'budget',
      title: 'Budget'
    },
    {
      name: 'reach',
      title: 'Reach'
    },
    {
      name: 'impressions',
      title: 'Impressions'
    },
    {
      name: 'cost_per_result',
      title: 'Cost Per Result'
    },
    {
      name: 'amount_spent',
      title: 'Amount Spent'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
