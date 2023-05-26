import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  agendaItemIcons,

  agendaItemDefaultTitles,

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  computed: {
    icon() {
      const i = this.agendaItem.type;
      const k = this.$options.agendaItemIcons;
      return `/assets/icons/icon-${k[i]}.svg`
    },

    title() {
      if (this.agendaItem.title) {
        return this.agendaItem.title;
      } else {
        const t = this.agendaItem.type;
        return this.$options.agendaItemDefaultTitles[t];
      }
    },
  },


  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="icon" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ title }}</h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
