export default {
  tableFields: [
    {
      name: '__component:badge-column',
      title: '',
      dataClass: 'text-center',
      width: '4%'
    },
    
    {
      name: 'amountSpent',
      title: 'Amount Spent',
      sortField: 'amountSpent',
      width: '24%'
    },
    {
      name: 'budget',
      title: 'Budget',
      width: '24%'
    },
    {
      name: 'campaignName',
      title: 'Campaign Name',
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
