<template>
  <div class="new_report">
    <div class="status-block" v-if="status.length > 0">
      {{ status }}
    </div>
    <div class="report-block" v-else>
      <input type="text" placeholder="Enter your bike's number" v-model="bike_number">
      <button @click="sendNewReport">Send Report</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'New',
  data() {
    return {
      status: '',
      bike_number: ''
    }
  },
  methods: {
    async sendNewReport() {
      const result = await fetch('api/bikes', {
        method: 'POST',
        body: JSON.stringify({
          number: this.bike_number
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(result.ok) {
        this.$set(this, 'status', `Your report ID: ${(await result.json()).id}`);
      } else {
        this.$set(this, 'status', `Error in your report. Try later`);
      }
    }
  }
}
</script>

<style>

</style>