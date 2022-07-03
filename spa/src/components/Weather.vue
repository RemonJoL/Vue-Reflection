<template>
  <div>
    <h1>Request Atmospheric Data</h1>
    <div class="container-inner">
      <div id="vaultList">
        <h2>Reports by Vault Location</h2>
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
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 88', Station: 'RNK', X:46, Y:81} }">Vault 88</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 92', Station: 'RNK', X:46, Y:81} }">Vault 92</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 94', Station: 'RNK', X:46, Y:81} }">Vault 94</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 95', Station: 'RNK', X:46, Y:81} }">Vault 95</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 96', Station: 'RNK', X:46, Y:81} }">Vault 96</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 101', Station: 'LWX', X:92, Y:66} }">Vault 101</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 106', Station: 'LWX', X:92, Y:66} }">Vault 106</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 108', Station: 'LWX', X:92, Y:66} }">Vault 108</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 111', Station: 'LWX', X:92, Y:66} }">Vault 111</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 112', Station: 'LWX', X:92, Y:66} }">Vault 112</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 114', Station: 'LWX', X:92, Y:66} }">Vault 114</router-link></p>
        <p><router-link v-bind:to="{ name: 'Report', params: {Location: 'Vault 118', Station: 'LWX', X:92, Y:66} }">Vault 118</router-link></p>
      </div>
      <div id="customLocation">
        <h2>Custom Location</h2>
        <div id="customLocationInner">
          <p>Use this tool to request Atmospheric Conditions for a specific location based on GPS coordinates.</p>
          <div>
            <label for="Location">Location</label>
            <input v-model="location" type="text" id="Location" name="Location" />
            <h4>Location Request:</h4>
            <h4>https://api.weather.gov/points/{{location.replace(' ', '')}} </h4>
            <button v-on:click="getRequestUrl" name="locationbtn" type="submit">Generate VACS Request</button>
          </div>
          <h4>Vacs Request:</h4>
          <span>https://api.weather.gov/gridpoints/{{gridId}}/{{gridX}},{{gridY}}/forecast?units=si </span>
          <h4><router-link v-bind:to="{ name: 'Report', params: {Location: 'Custom', Station:gridId, X:gridX, Y:gridY} }" class="reportBtn">View Report</router-link></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>export default {
  name: 'Weather',
  data () {
    return {
      gridpoints: [],
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
      this.$axios.get(`https://api.weather.gov/points/${this.location.replace(' ', '')}`)
        .then(response => (this.gridId = response.data.properties.gridId))
      this.$axios.get(`https://api.weather.gov/points/${this.location.replace(' ', '')}`)
        .then(response => (this.gridX = response.data.properties.gridX))
      this.$axios.get(`https://api.weather.gov/points/${this.location.replace(' ', '')}`)
        .then(response => (this.gridY = response.data.properties.gridY))
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
  cursor:pointer;
}

button:hover {
  background: black;
  color: #1fd97a;
}

.reportBtn {
  background: #1fd97a;
  color: black;
  padding: 10px;
  border-radius: 5px;
  font-weight: 700;
  font-family: inherit;
  font-size: 1.1rem;
  margin-bottom: 30px;
  border: 1px solid;
  text-decoration: none;
}

.reportBtn:hover {
  background: black;
  color: #1fd97a;
}

.hidden {
  display: none;
}

#customLocation {
  max-width: 50%;
}

#customLocation p {
  text-align: left;
}

#customLocation span {
  max-width: 50%;
}
</style>
