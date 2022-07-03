<template>
  <div id="basicReport" class="reportContainer">
    <div class="basicforecast">
      <div class="dailyForecastOuter" v-for="(period, index) in basicWeather.properties.periods" v-bind:key="index">
        <h3>{{period.name}}</h3>
        <div class="dailyForecastInner">
          <div class="weatherIcon">
            <img :src="period.icon" />
          </div>
          <div>
            <h4>Temperature:</h4>
            <p>{{period.temperature}}  &#8451;</p>
          </div>
        </div>
        <div class="dailyForecastInner">
          <div>
            <h4>Wind Speed:</h4>
            <p>{{period.windSpeed}}</p>
          </div>
          <div>
            <h4>Wind Direction:</h4>
            <p>{{period.windDirection}}</p>
          </div>
        </div>
        <div>
          <h4>Forecast:</h4>
          <p>{{period.detailedForecast}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DailyForecastCard',
  props: [
    'basicWeather'
  ]
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

  .advancedReportContainer {
    display: flex;
  }

  .basicforecast {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .dailyForecastOuter {
    width: 40%;
    border: 1px solid;
    margin: 30px;
    padding: 15px;
  }

  .dailyForecastInner {
    display: flex;
    justify-content: space-around;
  }

  .weatherIcon {
    border: 1px solid;
    display: flex;
  }

  .detailedDataCard {
    border: 1px solid;
    padding: 0 15px;
  }

  .detailedData {
    display: flex;
    text-align: left;
    justify-content: space-between;
  }

  .detailedData h4 {
    display: inline-block;
  }

  .detailedData p {
    margin: auto 0;
    display: inline-block;
  }
</style>
