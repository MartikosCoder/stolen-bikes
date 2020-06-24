<template>
  <main>
    <div class="status-block" v-if="status.length > 0">{{status}}</div>
    <div class="selector">
      <input type="text" placeholder="Enter your bike number:" v-model="bike_number" />
      <div class="buttons">
        <button @click="sendNewReport">Create new report</button>
        <button @click="checkReport">Check your report status</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ClientBody",
  data() {
    return {
      bike_number: "",
      status: ""
    };
  },
  methods: {
    async sendNewReport() {
      const result = await fetch("api/bikes", {
        method: "POST",
        body: JSON.stringify({ number: this.bike_number }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (result.ok) {
        this.$set(
          this,
          "status",
          `Your report ID: ${(await result.json()).id}`
        );
      } else {
        this.$set(this, "status", `Error in your report. Try later`);
      }
    },
    async checkReport() {
      const result = await fetch(`api/${this.bike_number}/info`);

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