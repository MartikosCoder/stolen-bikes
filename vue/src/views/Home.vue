<template>
  <div class="home">
    <TabletHeader />
    <OfficerBody v-if="mode_selected" />
    <ClientBody v-else />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'Home',
  components: {
    TabletHeader: () => import('../components/TabletHeader.vue'),
    ClientBody: () => import('../components/ClientBody.vue'),
    OfficerBody: () => import('../components/OfficerBody.vue')
  },
  computed: {
    ...mapGetters(['mode_selected'])
  }
}
</script>
