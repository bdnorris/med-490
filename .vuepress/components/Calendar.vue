<template>
  <div>
    <!-- <p>cal start: {{ calStart }}</p> -->
    <ul>
      <li v-for="event in eventsFormatted">
        <strong>{{ parseDate(event.start.date) }}</strong>
        <ul>
          <li v-for="summary in event.summaries">{{ summary }}</li>
        </ul>
      </li>
    </ul>
    <div>
      <!-- <iframe src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=buncuq6n9adeuvap19g0o32u7s%40group.calendar.google.com&amp;color=%238C500B&amp;ctz=America%2FChicago" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
    </div>
  </div>
</template>

<script>
const axios = require('axios')  
export default {
  props: {
    calId: String
  },
  data: function() {
    return {
      baseUrl: 'https://www.googleapis.com/calendar/v3/calendars/',
      // calId: 'buncuq6n9adeuvap19g0o32u7s%40',
      calKey: 'AIzaSyCDDbbwlEYHKgv6JJTLiObQyQRnGkB1nYg',
      calStart: '',
      // events: [''],
      events: [],
      eventsFormatted: [],
      apiIP: false,
      counter: 1,
    }
  },
  beforeMount () {
    let now = new Date();
    // this.calStart = this.now.getFullYear()+this.now.getMonth()+this.now.getDate()+'2017-08-22T10%3A00%3A00-07%3A00';
    this.calStart = now.getFullYear() + '-' + ('0' + (now.getMonth()+1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2) + 'T10%3A00%3A00-07%3A00';
    
    this.getEvents();
  },
  methods: {
    getEvents() {
      axios.get(this.baseUrl + this.calId + 'group.calendar.google.com/events?showDeleted=false&key='+this.calKey+'&timeMax=2019-06-30T10%3A00%3A00-07%3A00&orderBy=startTime&singleEvents=true&timeMin='+this.calStart)
      .then(response => {
        console.log('response', response);
        this.$data.events = response.data.items
        this.formatEvents();
      })
      .catch(error => {
          console.log(error);
      })
    },

    parseDate(date) {
      let month = date.substring(5, 7);
      let dateS = date.substring(8, 10);
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      console.log('parseMonth', parseInt(month));
      let monthName = monthNames[parseInt(month)-1];
      return monthName + ' ' + dateS;
    },

    formatEvents() {
      let rawEvents = this.events
      var localEventsFormatted = []
      console.log('raw', rawEvents)
      let lastDate = ''
      let key = -1
      rawEvents.forEach(x => {
        let date = x.start.date
        
        // console.log('hi', lastDate, date, key)
        if (lastDate === date) {
          localEventsFormatted[key].summaries.push(x.summary)
          lastDate = date
        }
        else {
          key++
          localEventsFormatted.push({
            'start': x.start,
            'summaries': [x.summary]
          })
          lastDate = date
          
        }
        
      })
      this.eventsFormatted = localEventsFormatted;

    }


  },
  computed: {
    // now: function () {
    //   return Date.now()
    // }

  }
}

</script>
