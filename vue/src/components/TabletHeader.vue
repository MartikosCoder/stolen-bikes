<template>
  <header>
    <div class="mode">
      <span>{{ modeName }}</span>
      <div class="switcher" @click.prevent="change_mode">
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TabletHeader",
  computed: {
    ...mapGetters(["mode_selected"]),
    modeName() {
      return this.mode_selected ? "Officer" : "Client";
    }
  },
  methods: {
    ...mapActions(["change_mode"])
  }
};
</script>

<style>
</style>