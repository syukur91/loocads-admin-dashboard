<template>
  <div class="dashboard">

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs
        :names="[$t('dashboard.accountOverview'), $t('dashboard.campaigns'), $t('dashboard.ads'), $t('dashboard.adList')]"
        ref="tabs">
        <div :slot="$t('dashboard.accountOverview')">
          <account-overview-tab></account-overview-tab>
        </div>
        <div :slot="$t('dashboard.campaigns')">
          <campaigns-tab></campaigns-tab>
        </div>
        <div :slot="$t('dashboard.ads')">
          <ads-tab></ads-tab>
        </div>
        <div :slot="$t('dashboard.adList')">
          <list-tab></list-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>

  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets'
import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
import FeaturesTab from './features-tab/FeaturesTab.vue'
// import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
import DashboardBottomWidgets from './DashboardBottomWidgets.vue'
import AccountOverviewTab from './account-overview-tab/AccountOverview.vue'
import CampaignsTab from './campaigns-tab/Campaigns.vue'
import AdsTab from './ads-tab/Ads.vue'
import ListTab from './list-tab/List.vue'

export default {
  name: 'dashboard',
  components: {
    // DataVisualisationTab,
    DashboardInfoWidgets,
    UsersMembersTab,
    SetupProfileTab,
    FeaturesTab,
    DashboardBottomWidgets,
    AccountOverviewTab,
    CampaignsTab,
    AdsTab,
    ListTab,
  },

  methods: {
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link'
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
