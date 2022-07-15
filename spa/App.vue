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
    <div class="content-outer">
      <div class="content">
        <!-- the router outlet, where all matched components would ber viewed -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>export default {
  name: 'app'
}
</script>
<!-- styling for the component -->
<style>
  html {
    height: 100vh;
    display: flex;
    width: 100vw;
    overflow: hidden;
  }

  * {
      box-sizing:border-box;
  }

  body {
    background: black;
    color: #1fd97a;
    display: flex;
    width: 100%;
  }

  hr {
    border-color: #1fd97a;
    width: 100%;
  }

  #app {
    font-family: 'Share Tech Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .header-container {
      margin-bottom: 30px;
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .content-outer {
    overflow: auto;
    display: flex;
  }

  .content-outer::-webkit-scrollbar {
    background-color: black;
    border: 1px solid;
    border-radius: 5px;
  }

  .content-outer::-webkit-scrollbar-thumb {
    background-color: #1fd97a;
    border-radius: 5px;
  }

  .container-inner {
      display: flex;
      justify-content: space-between;
  }

  a {
    color: #1fd97a;
    padding: 5px;
  }

  a, a:visited {
    color: #1fd97a !important;
  }

  a:hover {
    color: black !important;
    background: #1fd97a;
  }

  .robco-msg {
      display: block;
  }
</style>
