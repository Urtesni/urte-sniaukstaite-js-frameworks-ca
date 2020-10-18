<template>
  <div class="header">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-weight: 600;
  letter-spacing: 0;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 60px;
  text-transform: uppercase;
  font-size: 1.5rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: "Krona One", sans-serif;
}

#nav a.router-link-exact-active {
  color: rgb(82, 38, 47);
}
</style>
