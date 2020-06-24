<template>
  <header>
    <div class="mode">
      <span>{{ modeName }}</span>
      <div class="switcher">
        <input
          type="checkbox"
          name="switcher"
          class="switcher-checkbox"
          id="switcher"
          tabindex="0"
          v-model="mode_selected"
        />
        <label class="switcher-label" for="switcher"></label>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TabletHeader",
  data() {
    return {
      mode_selected: false
    };
  },
  computed: {
    modeName() {
      return this.mode_selected ? "Officer" : "Client";
    }
  }
};
</script>

<style>
</style>