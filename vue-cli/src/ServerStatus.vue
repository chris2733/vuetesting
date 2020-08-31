<template>
  <div>
      <div class="row">
          <div class="col-8">
              <h4>Server Status: {{ status }}</h4>
          </div>
          <div class="col-4">
              <button @click="changeStatus">Change status</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = "'Salright";
        }
    }
}
</script>

<style lang="scss">
</style>
