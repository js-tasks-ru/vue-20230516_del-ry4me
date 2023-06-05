<template >
  <div class="toasts">
    <div v-for="(toast, index) in toasts" :key=index >
    <UiToast   :msg='toast.msg' :icon='toast.icon' :classname='toast.classname' @some-event="remove" />
  </div>
</div>

</template>


<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      toasts: [],
    }
  },

  watch: {
    index(n) {
      setTimeout(() => {this.toasts.splice(n, 1)}, 5000);
    }
  },

  methods: {
    success(msg) {
      this.toasts.push({msg: msg, icon: "check-circle", classname: "toast_success"});
    },

    error(msg) {
      this.toasts.push({msg: msg, icon: "alert-circle", classname: "toast_error"});
    },

    remove(index) {
      setTimeout(() => {this.toasts.splice(index, 1)}, 5000);
    },
  },

};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

</style>
