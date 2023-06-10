<template >
  <div class="toasts">
    <div v-for="(toast, index) in toasts" :key=index >
    <UiToast   :msg='toast.msg' :type="type" />
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
      type: '',
    }
  },

  watch: {
    toasts:{
      handler(oldVal, newVal) {
      setTimeout(() => {newVal.splice(newVal.at(-1), 1)}, 4500);
    },
    deep: true,
  }
  },

  methods: {
    success(msg, ) {
      this.type = 'ok';
      this.toasts.push({msg: msg, type: this.type});
    },

    error(msg) {
      this.type = 'error';
      this.toasts.push({msg: msg, type: this.type});
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
