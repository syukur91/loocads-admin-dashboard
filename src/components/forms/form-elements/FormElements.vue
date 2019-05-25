<template>
  <div class="form-elements">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'forms.inputs.title' | translate">
          <form @submit.prevent="onCreateAd" enctype="multipart/form-data">

            <div class="row">
              <div class="col-md-4">
                <fieldset>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                      id="campaignName"
                      name="campaignName"
                      v-model="campaignName"

                      required
                      />
                      <!-- <label class="control-label" for="simple-input">{{'forms.inputs.textInput'
                        | translate}}</label><i class="bar"></i> -->

                        <label class="control-label" for="simple-input">Campaign Name</label><i class="bar"></i>
                    </div>

                  </div>

                  <div class="form-group">

                    <div class="input-group">
                      <input
                       id="campaignType"
                       name="campaignType"
                       v-model="campaignType"

                       required

                       />
                      <!-- <label class="control-label" for="simple-input">{{'forms.inputs.textInput'
                        | translate}}</label><i class="bar"></i> -->

                        <label class="control-label" for="simple-input">Campaign Type</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <div class="input-group">
                      <input
                       id="quantity"
                       name="quantity"
                       v-model="quantity"

                       required

                       />
                      <!-- <label class="control-label" for="simple-input">{{'forms.inputs.textInput'
                        | translate}}</label><i class="bar"></i> -->

                        <label class="control-label" for="simple-input">Quantity</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <div class="input-group">
                      <input
                       id="radius"
                       name="radius"
                       v-model="radius"

                       />
                      <!-- <label class="control-label" for="simple-input">{{'forms.inputs.textInput'
                        | translate}}</label><i class="bar"></i> -->

                        <label class="control-label" for="simple-input">Radius</label><i class="bar"></i>
                    </div>
                  </div>

                  <div class="form-group">

                    <div class="input-group">

                      <vuestic-file-upload
                            type="gallery"
                            :file-types="'.png, .jpg, .jpeg, .gif'"
                            v-model="gallery"
                        />
                    </div>
                  </div>

                  <div class="form-group">

                     <gmap-map
                      :center="{lat:10, lng:10}"
                      :zoom="7"
                      @rightclick="mapRclicked"
                      map-type-id="terrain"
                      style="width: 500px; height: 300px">
                      <gmap-marker
                      :key="index"
                      v-if="m.enabled"
                      :position.sync="m.position"
                      :opacity="m.opacity"
                      :draggable.sync="m.draggable"
                      @click="m.clicked++"
                      @rightclick="m.rightClicked++"
                      @dragend="m.dragended++"
                      v-for="(m, index) in markers"
                      >
                      </gmap-marker>
                    </gmap-map>

                  </div>

                  <button class="btn btn-primary" type="submit">
                    Submit
                  </button>

                </fieldset>
              </div>

            </div>

          </form>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import CountriesList from 'data/CountriesList'
import axios from 'axios'
import FormData from 'form-data'
import ToastPositionPicker from '../../ui/notifications/ToastPositionPicker.vue'

export default {
  name: 'form-elements',
  components: { ToastPositionPicker },
  filters: {
    markerRemover (markers) {
      if (this.markersEven) {
        const result = []
        for (var i = 0; i < markers.length; i += 2) {
          result.push(markers[i])
        }
        return result
      } else {
        return markers
      }
    }
  },
  computed: {
    datePickerDisabled: () => [date => !(date.getDate() % 5)],
    isSuccessfulEmailValid () {
      let isValid = false
      if (this.formFields.successfulEmail) {
        isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid
      }
      return isValid
    },
  },
  data () {
    return {
      campaignName: '',
      campaignType: '',
      quantity: '',
      gallery: [],
      markers: [],
      latitude: '',
      longitude: '',
      isMale: true,
      countriesList: CountriesList,
      chosenCountry: '',
      clearableText: '',
      successfulEmail: 'andrei@dreamsupport.io',
      wrongEmail: 'andrei@dreamsupport',
      simpleOptions: [
        {
          id: 1,
          description: 'First option',
        },
        {
          id: 2,
          description: 'Second option',
        },
        {
          id: 3,
          description: 'Third option',
        },
      ],
      simpleSelectModel: '',
      multiSelectModel: [],
      multiSelectCountriesModel: [],
      radioModel: 'option1',
      radioDisabledModel: 'option4',
      checkboxOneModel: false,
      checkboxTwoModel: true,
      checkboxThreeModel: false,
      checkboxFourModel: true,
      checkboxFiveModel: false,
      checkboxSixModel: true,
      checkboxSevenModel: false,
      checkboxEightModel: true,
      datepicker: {
        simple: '2018-05-09',
        time: '2018-05-08 14:10',
        range: '2018-05-08 to 2018-05-23',
        disabled: '2018-05-09',
        multiple: '2018-04-25, 2018-04-27',
      },
      toastText: 'Success',
      toastDuration: 2500,
      toastIcon: 'fa-star-o',
      toastPosition: 'top-right',
      isToastFullWidth: false
    }
  },
  methods: {

    onCreateAd () {
      let data = new FormData()
      data.append('gallery', this.gallery[0])
      data.append('campaignName', this.campaignName)
      data.append('campaignType', this.campaignType)
      data.append('quantity', parseInt(this.quantity))
      data.append('radius', parseInt(this.radius))
      data.append('latitude', this.latitude)
      data.append('longitude', this.longitude)
      data.append('imageUrl', '')

      axios.post('https://client.loocads.com/ad',
        data,
        { headers: {
          'Content-type': 'multipart/form-data'
        } }
      )
        .then(r => {
          // console.log('r: ', JSON.stringify(r, null, 2))

          if (r.status == 200) {
            this.showToast('Success', {
              icon: this.toastIcon,
              position: this.toastPosition,
              duration: this.toastDuration,
              fullWidth: this.isToastFullWidth
            })
          } else {
            this.showToast('Failed', {
              icon: this.toastIcon,
              position: this.toastPosition,
              duration: this.toastDuration,
              fullWidth: this.isToastFullWidth
            })
          }
        }
        )
    },
    clear (field) {
      this[field] = ''
    },
    mapRclicked (mouseArgs) {
      const createdMarker = this.addMarker()
      createdMarker.position.lat = mouseArgs.latLng.lat()
      createdMarker.position.lng = mouseArgs.latLng.lng()
      this.latitude = createdMarker.position.lat
      this.longitude = createdMarker.position.lng
      // console.log(createdMarker.position.lat)
      // console.log(this.markers)
    },
    addMarker: function addMarker () {
      this.markers.splice(-1, 1)
      this.markers.push({
        // position: { lat: 48.8538302, lng: 2.2982161 },
        position: { lat: 106.8278466, lng: -6.2153027 },

        opacity: 1,
        draggable: true,
        enabled: true,
        clicked: 0,
        rightClicked: 0,
        dragended: 0,
        ifw: true,
        ifw2text: 'This text is bad please change me :( '
      })
      return this.markers[this.markers.length - 1]
    }
  },
  created () {
    this.$nextTick(() => {
      this.$validator.validateAll()
    })
  },
}
</script>
