<template>
    <nav class="navigation">
        <div class="logo"></div>
        <button v-for="link of links"  class="btn btn-default nav-btn left15 top5">{{ link.name }}</button>
    </nav>
</template>
<style>
    .logo {
        background-image: url('../assets/logo.png');
        background-size: 45px;
        float: left;
        height: 45px;
        width: 45px;
    }
    .navigation {
        max-height: 1%;
    }
</style>
<script>
    const base = 'https://thecrimsonking.net'
    export default {
        data () {
            return {
                links: [
                    {
                        name: 'Home',
                        location: base
                    },
                    {
                        name: 'About',
                        location: base + '/about'
                    }
                ]
            }
        },
        methods: {
            emitClick () {
                this.$emit('source-click')
            }
        },
        props: ['disabled']
    }
</script>
