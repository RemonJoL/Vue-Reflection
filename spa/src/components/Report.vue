<template>
  <div class="content-inner">
    <router-link v-bind:to="'/weather'" class="backLink">Back to Locations</router-link>
    <h1>{{Location}} Atmospheric Condition Data</h1>
    <div class="ReportNav">
      <h2>Quick Navigation</h2>
      <h4>
        <a href="#basicReport">Basic 7-Day Forecast</a>
        <a href="#advancedReport">Advanced Report of Current Conditions</a>
      </h4>
    </div>
    <!-- Report Container Outer -->
    <div class="reportContainer-outer">

      <!-- Basic Report Section -->
      <h2 id="basicReport">Basic 7-Day Forecast</h2>
      <DailyForecastCard v-bind:basicWeather="this.basicWeather" />
      <router-link v-bind:to="'/weather'" class="backLink">Back to Locations</router-link>
      <!-- Basic Report Section End -->
      <!-- Advanced Report Section -->
      <h2>Detailed Forecast</h2>
      <div id="advancedReport" class="advancedReportContainer">
        <div id="Temperature" class="detailedDataCard">
          <h2>Temperature:</h2>
          <div v-if="this.detailedWeather.properties.temperature.values[0]" class="detailedData">
            <h4>Temperature:</h4>
            <p>&nbsp;{{parseFloat(detailedWeather.properties.temperature.values[0].value).toFixed(1)}}&#8451;</p>
          </div>
          <div v-if="this.detailedWeather.properties.maxTemperature.values[0]" class="detailedData">
            <h4>Max. Temperature:</h4>
            <p>&nbsp;{{detailedWeather.properties.maxTemperature.values[0].value.toFixed(1)}}&#8451;</p>
          </div>
          <div v-if="this.detailedWeather.properties.minTemperature.values[0]" class="detailedData">
            <h4>Min. Temperature:</h4>
            <p>&nbsp;{{detailedWeather.properties.minTemperature.values[0].value.toFixed(1)}}&#8451;</p>
          </div>
          <div v-if="this.detailedWeather.properties.apparentTemperature.values[0]" class="detailedData">
            <h4>Apparent Temperature:</h4>
            <p>&nbsp;{{detailedWeather.properties.apparentTemperature.values[0].value.toFixed(1)}}&#8451;</p>
          </div>
        </div>
        <div id="Precipitation" class="detailedDataCard">
          <h2>Precipitation</h2>
          <div v-if="this.detailedWeather.properties.probabilityOfPrecipitation.values[0]" class="detailedData">
            <h4>Probabilty of Precipitation:</h4>
            <p>&nbsp;{{detailedWeather.properties.probabilityOfPrecipitation.values[0].value}}%</p>
          </div>
          <div v-if="this.detailedWeather.properties.quantitativePrecipitation.values[0]" class="detailedData">
            <h4>Quantitative Precipitation:</h4>
            <p>&nbsp;{{detailedWeather.properties.quantitativePrecipitation.values[0].value}}mm</p>
          </div>
          <div v-if="this.detailedWeather.properties.iceAccumulation.values[0] && this.detailedWeather.properties.iceAccumulation.values[0].value !== 0" class="detailedData">
            <h4>Ice Accumulation:</h4>
            <p>&nbsp;{{detailedWeather.properties.iceAccumulation.values[0].value}}mm</p>
          </div>
          <div v-if="this.detailedWeather.properties.snowfallAmount.values[0] && this.detailedWeather.properties.snowfallAmount.values[0].value !== 0" class="detailedData">
            <h4>Snowfall Amount:</h4>
            <p>&nbsp;{{detailedWeather.properties.snowfallAmount.values[0].value}}mm</p>
          </div>
          <div v-if="this.detailedWeather.properties.snowLevel.values[0] && this.detailedWeather.properties.snowLevel.values[0].value !== 0" class="detailedData">
            <h4>Snow Level:</h4>
            <p>&nbsp;{{detailedWeather.properties.snowLevel.values[0].value.toFixed(0)}}mm</p>
          </div>
        </div>
        <div id="Humidity" class="detailedDataCard">
          <h2>Humidity</h2>
          <div v-if="this.detailedWeather.properties.relativeHumidity.values[0]" class="detailedData">
            <h4>Relative Humidity:</h4>
            <p>&nbsp;{{detailedWeather.properties.relativeHumidity.values[0].value}}%</p>
          </div>
          <div v-if="this.detailedWeather.properties.heatIndex.values[0]" class="detailedData">
            <h4>Heat Index:</h4>
            <p>&nbsp;{{detailedWeather.properties.heatIndex.values[0].value}}&#8451;</p>
          </div>
        </div>
        <div id="Wind" class="detailedDataCard">
          <h2>Wind</h2>
          <div v-if="this.detailedWeather.properties.windDirection.values[0]" class="detailedData">
            <h4>Wind Direction:</h4>
            <p>&nbsp;{{windDirectionFormatted}}</p>
          </div>
          <div v-if="this.detailedWeather.properties.windSpeed.values[0]" class="detailedData">
            <h4>Wind Speed:</h4>
            <p>&nbsp;{{detailedWeather.properties.windSpeed.values[0].value.toFixed(0)}}km/h</p>
          </div>
          <div v-if="this.detailedWeather.properties.windGust.values[0]" class="detailedData">
            <h4>Wind Gust:</h4>
            <p>&nbsp;{{detailedWeather.properties.windGust.values[0].value.toFixed(0)}}km/h</p>
          </div>
        </div>
        <div id="other" class="detailedDataCard">
          <h2>Other Conditions</h2>
          <div v-if="this.detailedWeather.properties.skyCover.values[0]" class="detailedData">
            <h4>Sky Cover:</h4>
            <p>&nbsp;{{detailedWeather.properties.skyCover.values[0].value}}%</p>
          </div>
          <div v-if="this.detailedWeather.properties.weather.values[0].value[0] && this.detailedWeather.properties.weather.values[0].value[0].coverage !== null" class="detailedData">
            <h4>Weather:</h4>
            <p>Coverage: &nbsp;{{detailedWeather.properties.weather.values[0].value[0].coverage}}</p>
            <h4>Weather: &nbsp;{{detailedWeather.properties.weather.values[0].value[0].weather}}</h4>
            <p>Intensity: &nbsp;{{detailedWeather.properties.weather.values[0].value[0].intensity}}</p>
          </div>
          <div v-if="this.detailedWeather.properties.ceilingHeight.values[0]" class="detailedData">
            <h4>Ceiling Height:</h4>
            <p>&nbsp;{{detailedWeather.properties.ceilingHeight.values.value}}m</p>
          </div>
          <div v-if="this.detailedWeather.properties.visibility.values[0]" class="detailedData">
            <h4>Visibility:</h4>
            <p>&nbsp;{{detailedWeather.properties.visibility.values[0].value.toFixed(0)}}m</p>
          </div>
          <div v-if="this.detailedWeather.properties.transportWindSpeed.values[0]" class="detailedData">
            <h4>Transport Wind Speed:</h4>
            <p>&nbsp;{{detailedWeather.properties.transportWindSpeed.values[0].value.toFixed(0)}}km/h</p>
          </div>
          <div v-if="this.detailedWeather.properties.transportWindDirection.values[0]" class="detailedData">
            <h4>Transport Wind Direction:</h4>
            <p>&nbsp;{{transportWindDirectionFormatted}}</p>
          </div>
          <div v-if="this.detailedWeather.properties.mixingHeight.values[0]" class="detailedData">
            <h4>Mixing Height:</h4>
            <p>&nbsp;{{detailedWeather.properties.mixingHeight.values[0].value.toFixed(0)}}m</p>
          </div>
          <div v-if="this.detailedWeather.properties.hainesIndex.values[0]" class="detailedData">
            <h4>Haines Index:</h4>
            <p>&nbsp;{{detailedWeather.properties.hainesIndex.values[0].value}}</p>
          </div>
          <div v-if="this.detailedWeather.properties.lightningActivityLevel.values[0]" class="detailedData">
            <h4>Lightning Activity Level:</h4>
            <p>&nbsp;{{detailedWeather.properties.lightningActivityLevel.values[0].value}}</p>
          </div>
        </div>
      </div>
      <router-link v-bind:to="'/weather'" class="backLink">Back to Locations</router-link>
      <!-- Advanced Report Section End -->

    </div>
    <!-- Report Container Outer End -->
  </div>
</template>

<script>
import DailyForecastCard from './DailyForecastCard.vue'
export default {
  name: 'WeatherResultsLinked',
  data () {
    return {
      basicWeather: {
        properties: {
          periods: {}
        }
      },
      detailedWeather: {
        properties: {
          temperature: {
            values: {
              value: ''
            }
          },
          maxTemperature: {
            values: {
              value: ''
            }
          },
          minTemperature: {
            values: {
              value: ''
            }
          },
          relativeHumidity: {
            values: {
              value: ''
            }
          },
          apparentTemperature: {
            values: {
              value: ''
            }
          },
          heatIndex: {
            values: {
              value: ''
            }
          },
          skyCover: {
            values: {
              value: ''
            }
          },
          windDirection: {
            values: {
              value: ''
            }
          },
          windSpeed: {
            values: {
              value: ''
            }
          },
          windGust: {
            values: {
              value: ''
            }
          },
          weather: {
            values: [{
              value: [{}]
            }]
          },
          probabilityOfPrecipitation: {
            values: {
              value: ''
            }
          },
          quantitativePrecipitation: {
            values: {
              value: ''
            }
          },
          iceAccumulation: {
            values: {
              value: ''
            }
          },
          snowfallAmount: {
            values: {
              value: ''
            }
          },
          snowLevel: {
            values: {
              value: ''
            }
          },
          ceilingHeight: {
            values: {
              value: ''
            }
          },
          visibility: {
            values: {
              value: ''
            }
          },
          transportWindSpeed: {
            values: {
              value: ''
            }
          },
          transportWindDirection: {
            values: {
              value: ''
            }
          },
          mixingHeight: {
            values: {
              value: ''
            }
          },
          hainesIndex: {
            values: {
              value: ''
            }
          },
          lightningActivityLevel: {
            values: {
              value: ''
            }
          }
        }
      },
      windDirectionFormatted: '',
      transportWindDirectionFormatted: ''
    }
  },
  props: [
    'Location',
    'Station',
    'X',
    'Y'
  ],
  components: {
    DailyForecastCard
  },
  created () {
    this.$axios.get(`https://api.weather.gov/gridpoints/${this.Station}/${this.X},${this.Y}`)
      .then(response => (this.detailedWeather = response.data))
    this.$axios.get(`https://api.weather.gov/gridpoints/${this.Station}/${this.X},${this.Y}/forecast?units=si`)
      .then(response => (this.basicWeather = response.data))
  },
  beforeUpdate () {
    let windDirection = this.detailedWeather.properties.windDirection.values[0].value
    if (windDirection <= 15 || windDirection >= 350) {
      this.windDirectionFormatted = 'N'
    }
    if (windDirection >= 15 && windDirection <= 35) {
      this.windDirectionFormatted = 'NNE'
    }
    if (windDirection >= 35 && windDirection <= 55) {
      this.windDirectionFormatted = 'NE'
    }
    if (windDirection >= 55 && windDirection <= 75) {
      this.windDirectionFormatted = 'ENE'
    }
    if (windDirection >= 75 && windDirection <= 105) {
      this.windDirectionFormatted = 'E'
    }
    if (windDirection >= 105 && windDirection <= 125) {
      this.windDirectionFormatted = 'ESE'
    }
    if (windDirection >= 125 && windDirection <= 145) {
      this.windDirectionFormatted = 'SE'
    }
    if (windDirection >= 145 && windDirection <= 165) {
      this.windDirectionFormatted = 'SSE'
    }
    if (windDirection >= 165 && windDirection <= 195) {
      this.windDirectionFormatted = 'S'
    }
    if (windDirection >= 195 && windDirection <= 215) {
      this.windDirectionFormatted = 'SSW'
    }
    if (windDirection >= 215 && windDirection <= 235) {
      this.windDirectionFormatted = 'SW'
    }
    if (windDirection >= 235 && windDirection <= 255) {
      this.windDirectionFormatted = 'WSW'
    }
    if (windDirection >= 255 && windDirection <= 285) {
      this.windDirectionFormatted = 'W'
    }
    if (windDirection >= 285 && windDirection <= 305) {
      this.windDirectionFormatted = 'WNW'
    }
    if (windDirection >= 305 && windDirection <= 325) {
      this.windDirectionFormatted = 'NW'
    }
    if (windDirection >= 325 && windDirection <= 350) {
      this.windDirectionFormatted = 'NNW'
    }

    let transportWindDirection = this.detailedWeather.properties.transportWindDirection.values[0].value
    if (transportWindDirection <= 15 || transportWindDirection >= 350) {
      this.transportWindDirectionFormatted = 'N'
    }
    if (transportWindDirection >= 15 && transportWindDirection <= 35) {
      this.transportWindDirectionFormatted = 'NNE'
    }
    if (transportWindDirection >= 35 && transportWindDirection <= 55) {
      this.transportWindDirectionFormatted = 'NE'
    }
    if (transportWindDirection >= 55 && transportWindDirection <= 75) {
      this.transportWindDirectionFormatted = 'ENE'
    }
    if (transportWindDirection >= 75 && transportWindDirection <= 105) {
      this.transportWindDirectionFormatted = 'E'
    }
    if (transportWindDirection >= 105 && transportWindDirection <= 125) {
      this.transportWindDirectionFormatted = 'ESE'
    }
    if (transportWindDirection >= 125 && transportWindDirection <= 145) {
      this.transportWindDirectionFormatted = 'SE'
    }
    if (transportWindDirection >= 145 && transportWindDirection <= 165) {
      this.transportWindDirectionFormatted = 'SSE'
    }
    if (transportWindDirection >= 165 && transportWindDirection <= 195) {
      this.transportWindDirectionFormatted = 'S'
    }
    if (transportWindDirection >= 195 && transportWindDirection <= 215) {
      this.transportWindDirectionFormatted = 'SSW'
    }
    if (transportWindDirection >= 215 && transportWindDirection <= 235) {
      this.transportWindDirectionFormatted = 'SW'
    }
    if (transportWindDirection >= 235 && transportWindDirection <= 255) {
      this.transportWindDirectionFormatted = 'WSW'
    }
    if (transportWindDirection >= 255 && transportWindDirection <= 285) {
      this.transportWindDirectionFormatted = 'W'
    }
    if (transportWindDirection >= 285 && transportWindDirection <= 305) {
      this.transportWindDirectionFormatted = 'WNW'
    }
    if (transportWindDirection >= 305 && transportWindDirection <= 325) {
      this.transportWindDirectionFormatted = 'NW'
    }
    if (transportWindDirection >= 325 && transportWindDirection <= 350) {
      this.transportWindDirectionFormatted = 'NNW'
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

  .backLink {
    width: max-content;
    margin: 1rem auto;
    padding: 5px;
  }

  .content-inner {
    display: flex;
    flex-direction: column;
  }

  .ReportNav {
    display: flex;
    flex-direction: column;
    border: 1px solid;
    padding: 15px 30px;
    width: fit-content;
    margin: 80px auto;
    border-radius: 3px;
  }

  .reportContainer-outer,
  .reportContainer {
    display: flex;
    flex-direction: column;
  }

  .advancedReportContainer {
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

  .detailedData p{
    margin: auto 0;
    display: inline-block;
  }
</style>
