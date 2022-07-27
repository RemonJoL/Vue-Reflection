<template>
  <div>
    <h1>About VACS</h1>
    <h2>General</h2>
    <p>
      The VACS System has been developed to help inform Vault-Tec Overseers with making assessments
      on whether or not it is potentially safe to leave the Vault,
      if the Vault's mission allows for this.'
    </p>
    <h2>Disclaimer & Warnings</h2>
    <p>
      The VACS System only monitors weather conditions so keep in mind the following:
      <ul>
        <li>
          NEVER use the VACS System as the only factor in deciding on whether or not it is safe to leave your Vault.
        </li>
        <li>
          ALWAYS use the Vault-Tec Radiation Detection (VRD) System to confirm possible radiation levels local to your Vault to ensure it is safe to leave your Vault.
        </li>
        <li>
          In case the VACS System is not working for your Vault, the Overseer is responsible for assigning a Vault Resident to help assess atmospheric conditions and radiation levels manually, however keep in mind this is entirely at your own risk.
        </li>
      </ul>
    </p>
  </div>
</template>

<script>export default {
  name: 'About'
}
</script>
<!-- styling for the component -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  li {
    list-style: upper-alpha;
  }
</style>
