<template>
  <div>
    <h1>Request Atmospheric Data</h1>
    <div class="container-inner">
      <div id="vaultList">
        <h2>Reports by Vault Location</h2>
        <div class="vaultList-inner">
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 3', Station: 'VEF', X:117, Y:94} }">Vault 3</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 8', Station: 'REV', X:100, Y:49} }">Vault 8</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 11', Station: 'VEF', X:126, Y:84} }">Vault 11</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 12', Station: 'HNX', X:67, Y:35} }">Vault 12</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 13', Station: 'SGX', X:76, Y:35} }">Vault 13</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 15', Station: 'PSR', X:10, Y:72} }">Vault 15</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 19', Station: 'VEF', X:114, Y:92} }">Vault 19</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 21', Station: 'VEF', X:120, Y:94} }">Vault 21</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 22', Station: 'VEF', X:113, Y:103} }">Vault 22</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 34', Station: 'VEF', X:129, Y:97} }">Vault 34</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 51', Station: 'PBZ', X:57, Y:26} }">Vault 51</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 63', Station: 'RNK', X:46, Y:81} }">Vault 63</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 75', Station: 'BOX', X:71, Y:88} }">Vault 75</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 76', Station: 'RLX', X:91, Y:184} }">Vault 76</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 79', Station: 'PBZ', X:85, Y:24} }">Vault 79</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 81', Station: 'BOX', X:68, Y:75} }">Vault 81</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 87', Station: 'LWX', X:63, Y:70} }">Vault 87</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 88', Station: 'BOX', X:71, Y:72} }">Vault 88</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 92', Station: 'LWX', X:94, Y:83} }">Vault 92</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 94', Station: 'LWX', X:22, Y:83} }">Vault 94</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 95', Station: 'BOX', X:64, Y:69} }">Vault 95</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 96', Station: 'RNK', X:58, Y:96} }">Vault 96</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 101', Station: 'LWX', X:92, Y:66} }">Vault 101</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 106', Station: 'LWX', X:81, Y:77} }">Vault 106</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 108', Station: 'LWX', X:96, Y:79} }">Vault 108</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 111', Station: 'BOX', X:60, Y:80} }">Vault 111</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 112', Station: 'LWX', X:77, Y:75} }">Vault 112</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 114', Station: 'BOX', X:71, Y:77} }">Vault 114</router-link></p>
          <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 118', Station: 'CAR', X:92, Y:48} }">Vault 118</router-link></p>
        </div>
      </div>
      <div id="customLocation">
        <h2>Custom Location</h2>
        <div id="customLocationInner">
          <p>Use this tool to request Atmospheric Conditions for a specific location based on GPS coordinates.</p>
          <div>
            <label for="Location">Location:</label>
            <input v-model="location" type="text" id="Location" name="Location" required/>
            <!--<input v-model="location" type="text" id="Location" name="Location" />-->
          </div>

          <button v-on:click="getRequestUrl" name="locationbtn" class="customLocBtn">View Custom Location Report</button>

          <div class="customLocProgress">
            <div id="locationRequest" class="invisible">
              <span id="locationRequestTitle" class="progressTitle">Location Request:</span>
              <span id="locationRequestURL">...Generating...</span>
            </div>
            <div id="vacsRequest" class="invisible">
              <span id="vacsRequestTitle" class="progressTitle">Vacs Request:</span>
              <span id="vacsRequestURL">...Generating...</span>
            </div>
            <span id="accessingVacsRequest" class="progressTitle invisible">...Processing Request...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
      location: '',
      gridId: '{{Grid ID}}',
      gridX: '{{Grid X}}',
      gridY: '{{Grid Y}}'
    }
  },
  mounted () {
  },
  methods: {
    async getRequestUrl () {
      document.getElementById('locationRequest').classList.remove('invisible')
      setTimeout(() => (document.getElementById('locationRequestURL').innerText = `https://api.weather.gov/points/${this.location}`), 500)
      setTimeout(() => (document.getElementById('vacsRequest').classList.remove('invisible')), 1500)
      this.$axios.get(`https://api.weather.gov/points/${this.location.replace(' ', '')}`)
        .then((response) => {
          this.gridId = response.data.properties.gridId
          this.gridX = response.data.properties.gridX
          this.gridY = response.data.properties.gridY
        })
      setTimeout(() => {
        document.getElementById('vacsRequestURL').innerText = `https://api.weather.gov/gridpoints/${this.gridId}/${this.gridX},${this.gridY}/forecast?units=si`
        document.getElementById('accessingVacsRequest').classList.remove('invisible')
      }, 2000)
      setTimeout(() => this.$router.push({ name: 'Report', params: { Location: 'Custom', Station: this.gridId, X: this.gridX, Y: this.gridY } }), 3700)
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

  p {
    display: block;
  }

  li {
    display: block;
    margin: 0 10px;
  }

  formgroup {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: 30px;
    width: 200px;
    background: black;
    color: #1fd97a;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid;
    font-weight: 700;
    font-family: inherit;
  }

  button {
    background: #1fd97a;
    color: black;
    padding: 10px;
    border-radius: 5px;
    font-weight: 700;
    font-family: inherit;
    font-size: 1.1rem;
    margin-bottom: 30px;
    border: 1px solid;
    cursor: pointer;
  }

  button:hover {
    background: black;
    color: #1fd97a;
  }

  .reportBtn {
    text-decoration: none;
  }

  .hidden {
    display: none;
  }

  .invisible {
    opacity: 0;
  }

  .customLocBtn {
    margin-top: 30px;
  }

  .customLocProgress {
    padding: 15px;
    border: 1px solid;
    border-radius: 10px;
  }

  .progressTitle:first-child {
    display: block;
    margin: 0 auto 0.5rem;
  }

  .progressTitle {
    display: block;
    margin: 1rem auto 0.5rem;
  }

  #vaultList {
    display: flex;
    width: 50%;
    flex-direction: column;
    border-right: 1px solid;
    padding: 0 30px;
  }

  .vaultList-inner {
    display: flex;
    flex-wrap: wrap;
    height: 450px;
    flex-direction: column;
  }

  .vaultList-inner p {
    width: 33%;
    margin: 12px 0;
  }

  .vaultList-inner a {
    padding: 5px;
  }

  #customLocation {
    width: 50%;
    border-left: 1px solid;
    padding: 0 30px;
  }

  #vacsRequest {
    margin-top: 1rem;
  }

  #customLocation p {
    text-align: left;
  }

  #customLocation span {
    max-width: 50%;
  }
</style>
