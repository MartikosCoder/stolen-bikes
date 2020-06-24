<template>
  <div class="home">
    <TabletHeader />
    <ClientBody />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    TabletHeader: () => import('../components/TabletHeader.vue'),
    ClientBody: () => import('../components/ClientBody.vue')
  }
}
</script>
