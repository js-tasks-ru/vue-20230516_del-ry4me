import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },


  props: {
    agenda: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  template: `
  <template v-if="agenda.length > 0">
    <ul class="agenda">
      <li v-for="item in agenda" class="agenda__item">
      <MeetupAgendaItem :agenda-item="item" />
     </li>
    </ul>
    </template >`,
});
