<template>
  <div id="app">
    <div class="header-container">
      <span class="robco-msg">ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM</span>
      <span class="robco-msg">COPYRIGHT 2075-2077 ROBCO INDUSTRIES</span>
      <span class="robco-msg">-VACS-</span>
      <h1>Vault-Tec Atmospheric Conditions Service</h1>
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/about'">About</router-link>
      <router-link v-bind:to="'/weather'">Atmospheric Conditions Reports</router-link>
    </div>
    <hr />
    <div class="content">
      <!-- the router outlet, where all matched components would ber viewed -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>export default {
  name: 'app'
}
</script>
<!-- styling for the component -->
<style>
  body {
    background: black;
    color: #1fd97a;
  }

  hr {
    border-color: #1fd97a;
  }

  #app {
    font-family: 'Share Tech Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }

  .header-container {
      margin-bottom: 30px;
  }

  .content {
      width: 1200px;
      margin: 0 auto;
  }

  .container-outer {

  }

  .container-inner {
      display: flex;
      justify-content: space-between;
  }

  a, a:visited {
    color: #1fd97a;
  }

  a:hover {
    color: black;
    background: #1fd97a;
  }

  .robco-msg {
      display: block;
  }
</style>
