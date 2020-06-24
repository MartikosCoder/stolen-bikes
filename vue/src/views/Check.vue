<template>
  <div class="check_report">
    <div class="status-block" v-if="status.length > 0">{{ status }}</div>
    <div class="report-block" v-else>
      <input type="text" placeholder="Enter your report ID here" v-model="bike_id" />
      <button @click="checkReport">Send Report ID</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "New",
  data() {
    return {
      status: "",
      bike_id: ""
    };
  },
  methods: {
    async checkReport() {
      const result = await fetch(`api/${this.bike_id}/info`);

      if (result.ok) {
        const status = (await result.json()).status;
        switch (status) {
          case "new":
            this.$set(this, "status", "Your report status: New");
            break;
          case "wip":
            this.$set(this, "status", "Your report status: Work In Progress");
            break;
          case "found":
            this.$set(this, "status", "Your report status: Found");
        }
      } else {
        this.$set(this, "status", `Error in your request. Try later`);
      }
    }
  }
};
</script>

<style>
</style>