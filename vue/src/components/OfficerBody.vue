<template>
  <main>
    <div class="status-block" v-if="status.length > 0" v-html="status"></div>
    <div class="selector">
      <input type="text" placeholder="Enter your ID:" v-model="officer_id" />
      <div class="buttons">
        <button @click="resolveReport">Resolve report</button>
        <button @click="checkReport">Check active report info</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OfficerBody",
  data() {
    return {
      officer_id: "",
      status: ""
    };
  },
  methods: {
    async resolveReport() {
      const result = await fetch("/api/findBike", {
        method: "POST",
        body: JSON.stringify({ officer_id: this.officer_id }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if(result.ok) this.$set(this, 'status', '<span>Report resolved, you can check new report</span>');
      else this.$set(this, 'status', '<span>Error in request. Try again</span>');
    },
    async checkReport() {
      const result = await fetch(`/api/${this.officer_id}/bike`);

      if(result.ok) {
          const data = await result.json();
          if(data.id) {
              this.$set(this, 'status', `<span>Report info:</span><span>ID: ${data.id}</span><span>Bike Number: ${data.number}</span>`);
          } else {
              this.$set(this, 'status', 'No new reports. Fantastic work!');
          }
      }
      else this.$set(this, 'status', 'Error in request. Try again');
    }
  }
};
</script>

<style>
</style>