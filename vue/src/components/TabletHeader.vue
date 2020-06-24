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
        <span class="slider round"></span>
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
header, .mode {
  display: flex;
}

header {
  padding: 10px;
  border-bottom: 2px solid #2196f3;
}

.mode {
  justify-content: space-between;
  align-items: center;
  width: 100px;
}
.switcher {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 25px;
}

.switcher-checkbox {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196F3;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 21px;
  width: 21px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.switcher-checkbox:checked + .slider:before {
  transform: translateX(19px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>