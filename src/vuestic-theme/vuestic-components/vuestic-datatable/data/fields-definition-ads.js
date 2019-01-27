export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center',
      width: '4%'
    },
    
    {
      name: 'adName',
      title: 'Ad Name',
      sortField: 'adName',
      width: '24%'
    },
    {
      name: 'amountSpent',
      title: 'Amount Spent',
      width: '24%'
    },
    {
      name: 'bidStrategy',
      title: 'Bid Strategy',
      width: '24%'
    },
    {
      name: 'campaign',
      title: 'Campaign',
      width: '24%'
    },
    {
      name: 'costPerResult',
      title: 'Cost Per Result',
      width: '24%'
    },
    {
      name: 'impressions',
      title: 'Impressions',
      width: '24%'
    },
    {
      name: 'lastSignificantEdit',
      title: 'Last Significant Edit',
      width: '30%'
    },
  ],
  sortFunctions: {
    'amountSpent': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    },
    'impressions': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
