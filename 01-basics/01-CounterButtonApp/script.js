import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
// Создайте Vue приложение

const App = defineComponent({
  name: 'App',

  data() {
    return {
      count: 0
    };
  },

  methods: {
    increment() {
      this.count++
    }
  },

 // template: `#app`, когда шаблон находится там, куда монтируем приложение, свойство не указывается!
});

const app = createApp(App)
const vm = app.mount('#app')
