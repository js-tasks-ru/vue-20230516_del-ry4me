import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
// Создайте Vue приложение


const API_URL = 'https://course-vue.javascript.ru/api';

const App = defineComponent({
  name: 'App',

  data() {
    return {
      radioButton: 0,
      title: ''
    };
  },

  watch: {
    radioButton(newVal, oldVal) {
      this.fetchMeetupById(newVal).then((json) => this.title = json.title);

    },
  },

  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    }
  },

});

const app = createApp(App)
const vm = app.mount('#app')

