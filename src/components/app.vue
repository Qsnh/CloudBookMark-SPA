<style scoped>
    @import '../styles/common.css';
</style>
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isLoading: true,
            }
        },
        ready () {
            this.isLoading = false;
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
