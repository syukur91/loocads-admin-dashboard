export default {
  tableFields: [
    

    // {
    //   name: '__sequence',
    //   title: 'tes',
    //   dataClass: 'text-center',
    // },
    {
      name: 'id',
      title: 'ID',
      visible: false
    },
    {
      name: 'campaignName',
      title: 'Campaign Name',
      sortField: 'campaignName',
      width: '24%'
    },
    {
      name: 'campaignType',
      title: 'Campaign Type',
      width: '24%'
    },
    {
      name: 'latitude',
      title: 'Latitude',
      width: '24%'
    },
    {
      name: 'longitude',
      title: 'Longitude',
      width: '24%'
    },
    {
      name: 'quantity',
      title: 'Quantity',
      width: '24%'
    },
    {
      name: 'radius',
      title: 'Radius',
      width: '24%'
    },
    {
      name: '__component:custom-actions',
      title: 'Action',
      titleClass: 'text-center',
      dataClass: 'text-center',
      width: '4%'
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
