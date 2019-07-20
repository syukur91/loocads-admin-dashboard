<template>
    <div class="custom-actions">
      <button class="btn btn-success btn-micro" @click="itemAction('view-item', rowData, rowIndex)"><i class="vuestic-icon vuestic-icon-files"></i></button>
      <button class="btn btn-danger btn-micro" @click="removeItem('remove-item', rowData, rowIndex)"><i class="glyphicon glyphicon-minus"></i></button>
    
    <vuestic-modal :show.sync="show" v-bind:large="true" ref="detail" :okText="'modal.close' | translate" :cancelClass="'none'" >
      <div slot="title">{{'modal.largeTitle' | translate}}</div>

      <img :src="defaultImage" alt="Smiley face" width="50%" height="50%">

      

      <div class="form-group">
            <div class="input-group">
              <input id="campaignName" name="campaignName" v-model="campaignName" disabled/>
            </div>
      </div>

      <div class="form-group">
            <div class="input-group">
              <input id="campaignType" name="campaignType" v-model="campaignType" disabled/>
            </div>
      </div>

      <div class="form-group">
            <div class="input-group">
              <input id="latitude" name="latitude" v-model="latitude" disabled/>
            </div>
      </div>


      <div class="form-group">
            <div class="input-group">
              <input id="latitude" name="longitude" v-model="longitude" disabled/>
            </div>
      </div>

       <div class="form-group">
            <div class="input-group">
              <input id="quantity" name="quantity" v-model="quantity" disabled/>
            </div>
      </div>

      <div class="form-group">
            <div class="input-group">
              <input id="radius" name="radius" v-model="radius" disabled/>
            </div>
      </div>

    </vuestic-modal>
    
    
    </div>



    
  </template>

  <script>


  import axios from 'axios'

  export default {

    data () {
        return {
        show: true,
        campaignName: null,
        campaignType: null,
        latitude: null,
        longitude: null,
        radius: null,
        quantity: null,
        defaultImage: null,
        toastText: 'Success',
        toastDuration: 2500,
        toastIcon: 'fa-star-o',
        toastPosition: 'bottom-right',
        isToastFullWidth: false
        }
    },  
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    methods: {

      removeItem(action, data, index){

        this.showToast('Remove Not Implemented', {
              icon: this.toastIcon,
              position: this.toastPosition,
              duration: this.toastDuration,
              fullWidth: this.isToastFullWidth
        })

      },
      itemAction (action, data, index) {

        

       


        const getAd = () => {
          try {
            
            return axios.get('https://client.loocads.com/ad/'+data.id)
          } catch (error) {
            console.error(error)
          }
        }

        const getOneAd = async () => {
        const ad = await getAd()
          .then(response => {
            
            if (response.data) {
                this.campaignName =  "Name: "+response.data.campaignName;
                this.campaignType=  "Type: "+response.data.campaignType;
                this.latitude=  "Latitude: "+response.data.latitude;
                this.longitude=  "Longitude: "+response.data.longitude;
                this.radius=  "Radius: "+response.data.radius;
                this.quantity = "Quantity: "+response.data.quantity;
                this.defaultImage = response.data.imageUrl;
                console.log('data: ' + action, response.data, index)
                this.$refs.detail.open()
            }
          })
          .catch(error => {
            console.log(error)
          })
        }

        getOneAd()
       

      }
    }
  }
  </script>

  <style>
    .custom-actions button.ui.button {
      padding: 8px 8px;
    }
    .custom-actions button.ui.button > i.icon {
      margin: auto !important;
    }
  </style>