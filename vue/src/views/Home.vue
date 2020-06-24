<template>
  <div class="home">
    <TabletHeader />
    <OfficerBody v-if="mode_selected" />
    <ClientBody v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    TabletHeader: () => import("../components/TabletHeader.vue"),
    ClientBody: () => import("../components/ClientBody.vue"),
    OfficerBody: () => import("../components/OfficerBody.vue")
  },
  computed: {
    ...mapGetters(["mode_selected"])
  }
};
</script>
<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.status-block {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

.selector {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 25%;
  transition: 0.3s;
}

.selector input {
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #2196f3;
}

.buttons {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
}

.buttons button {
  padding: 5px;
  font-size: 18px;
  width: 100%;
  border: 2px solid #2196f3;
  background: #e0f6ff;
  border-radius: 5px;
  cursor: pointer;
}

.buttons button:first-of-type {
  margin-bottom: 10px;
}

.buttons button:hover {
  background: #56cfff;
  color: white;
}

@media screen and (min-width: 768px) {
  .selector {
    width: 40%;
  }
}
</style>