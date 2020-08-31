<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <myapp-header></myapp-header>
                    <div class="row">
                        <div class="col-6">
                            <myapp-serverstatus v-for="server in 7"></myapp-serverstatus>
                        </div>
                    </div>
                    <myapp-footer></myapp-footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    components: {
        'myapp-header': Header,
        'myapp-footer': Footer
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
