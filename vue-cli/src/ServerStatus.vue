<template>
    <div class="">
        <h1>{{ msg }}</h1>
        <button type="button" name="button" @click="changeStatus">Click meh</button>
        <hr>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            msg: 'Hello World....'
        }
    },
    methods: {
        changeStatus() {
            this.msg = 'Hello there';
        }
    }
}
</script>

<style lang="scss">
</style>
