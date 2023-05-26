import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription.js';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover.js';
import MeetupInfo from '../../04-MeetupInfo/components/MeetupInfo.js';
import MeetupAgendaItem from '../../05-MeetupAgenda/components/MeetupAgendaItem.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  props: {
    meetupId: {
      type: Number,
      required: true,
      default: 1
    }
  },

  data() {
      return {
        meetup: null,
        error: '',
      }
  },

  watch: {
    meetupId(newId) {
      this.meetup = null;
      fetchMeetupById(this.meetupId).then(
              (result) => {this.meetup = result;
                this.error = ''},
              (err) => {this.error = err.message}
            )
        }
  },

  mounted() {
    fetchMeetupById(this.meetupId).then(
      (result) => {this.meetup = result;
          this.error = ''},
      (err) => {this.error = err.message}
      )
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupInfo,
    MeetupCover,
    MeetupDescription
  },

  template: `
    <div class="page-meetup">
      <MeetupView :meetup="meetup" :meetupId="meetupId" v-if="meetup"/>

      <UiContainer v-if="!meetup && !error">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="error">
        <UiAlert>{{error}}</UiAlert>
      </UiContainer>
    </div>`,
});
