export default {
  tableFields: [
    // {
    //   name: '__component:badge-column',
    //   title: '',
    //   dataClass: 'text-center'
    // },
    {
      name: 'reach',
      title: 'Reach',
      sortField: 'reach'
    },
    {
      name: 'amount_spent',
      title: 'Amount Spent',
      sortField: 'amount_spent'

    },
    {
      name: 'impressions',
      title: 'Impressions'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
