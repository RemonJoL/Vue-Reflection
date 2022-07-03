<template>
  <div>
    <div>
      <label for="Location">Location</label>
      <input v-model="location" type="text" id="Location" name="Location" />
      <p>Location Request: https://api.weather.gov/points/{{location.replace(' ', '')}} </p>
      <button v-on:click="getRequestUrl" name="locationbtn" type="submit">Submit</button>
    </div>
    <p>Forecast Request: https://api.weather.gov/gridpoints/{{gridId}}/{{gridX}},{{gridY}}/forecast?units=si </p>

    <ul>
      <li v-for="(eventType, eventTypes) in alerttypes" v-bind:key="eventTypes">
        {{ eventType }}
      </li>
    </ul>
  </div>
</template>

<script>
import DailyForecastCard from './DailyForecastCard.vue'
export default {
  name: 'WeatherResults',
  data () {
    return {
      alerttypes: [],
      basicWeather: [],
      gridpoints: [],
      location: '',
      gridId: '{{Grid ID}}',
      gridX: '{{Grid X}}',
      gridY: '{{Grid Y}}'
    }
  },
  components: {
    DailyForecastCard
  },
  mounted () {
    this.$axios.get('https://api.weather.gov/alerts/types')
      .then(response => (this.alerttypes = response.data.eventTypes))
    this.$axios.get(`https://api.weather.gov/gridpoints/LWX/92,66/forecast?units=si`)
      .then(response => (this.basicWeather = response.data))
  },
  methods: {
    async getRequestUrl () {
      this.$axios.get(`https://api.weather.gov/points/${this.location.replace(' ', '')}`)
        .then(response => (this.gridId = response.data.properties.gridId))
      this.$axios.get(`https://api.weather.gov/points/${this.location.replace(' ', '')}`)
        .then(response => (this.gridX = response.data.properties.gridX))
      this.$axios.get(`https://api.weather.gov/points/${this.location.replace(' ', '')}`)
        .then(response => (this.gridY = response.data.properties.gridY))
      return this.gridpoints
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
