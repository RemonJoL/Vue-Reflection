<template>
  <div>
    <h1>Welcome to VACS</h1>
    <h2>Hello Overseer,</h2>
    <p>Welcome to the Vault-Tec Atmospheric Conditions Service (VACS) interface, here you can view atmospheric data for all vaults constructed by the Vault-Tec corporation*</p>
    <p>Navigate to the Atmospheric Conditions Reports menu option for an overview of vaults, to retrieve a 7 day weather forecast and a more detailed current overview of atmospheric conditions.
    There is also an option to enter GPS coordinates to retrieve data for a specific location.</p>
    <p>*any vaults missing from the list are no cause for concern as they are simply performing updates to the connection to their measuring devices.</p>
  </div>
</template>

<script>export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
