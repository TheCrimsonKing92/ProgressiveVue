<template>
    <nav class="navigation">
        <div class="logo"></div>
        <button :key="link.id" v-for="link of links" style="float: left;"  class="btn btn-default nav-btn left15 top5" @click="navigate(link.location)">{{ link.name }}</button>
    </nav>
</template>
<style>
    .logo {
        background-image: url('../assets/smallLogo.png');
        background-size: 45px;
        float: left;
        height: 45px;
        width: 45px;
    }
    .navigation {
        height: 45px;
        width: 100%;
    }
</style>
<script>
    import Constants from '../services/Constants'

    export default {
        data () {
            return {
                links: Constants.links
            }
        },
        methods: {
            navigate (location) {
                window.location.href = location
            }
        },
        props: ['disabled']
    }
</script>
