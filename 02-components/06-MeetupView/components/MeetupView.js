import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from '../../../02-components/02-MeetupDescription/components/MeetupDescription.js';
import MeetupCover from '../../../02-components/03-MeetupCover/components/MeetupCover.js';
import MeetupInfo from '../../../02-components/04-MeetupInfo/components/MeetupInfo.js';
import MeetupAgendaItem from '../../../02-components/05-MeetupAgenda/components/MeetupAgendaItem.js';
import MeetupAgenda from '../../../02-components/05-MeetupAgenda/components/MeetupAgenda.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgendaItem,
    MeetupAgenda
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image" />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description" />>

            <h3>Программа</h3>
            <UiAlert v-if="meetup.agenda.length === 0">Программа пока пуста...</UiAlert>
            <MeetupAgenda v-else :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <MeetupInfo :place="meetup.place" :date="meetup.date" :organizer="meetup.organizer" />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
