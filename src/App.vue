<template>
    <div id="app container">
        <navigation></navigation>
        <energy-source :disabled="sourceDisabled"></energy-source>
        <stats :score="score"></stats>
        <store></store>
    </div>
</template>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        min-height: 200px;
        height: 100%;
    }

    .bottom10 {
        margin-bottom: 10px;
    }

    .bottom15 {
        margin-bottom: 15px;
    }

    .left5 {
        margin-left: 5px;
    }

    .left10 {
        margin-left: 10px;
    }

    .left15 {
        margin-left: 15px;
    }

    .right10 {
        margin-right: 10px;
    }

    .right15 {
        margin-right: 15px;
    }

    .top5 {
        margin-top: 5px;
    }

    .top10 {
        margin-top: 10px;
    }

    .top15 {
        margin-top: 15px;
    }
</style>
<script>
    import Vue from 'vue'
    import EnergySource from './components/Energy-Source'
    import Navigation from './components/Navigation'
    import Stats from './components/Stats'
    import Store from './components/Store'

    const AppComponent = Vue.extend({
        name: 'app',
        components: {
            EnergySource,
            Navigation,
            Stats,
            Store
        },
        data: {
            score: 0,
            sourceDisabled: false
        }
    })

    export default AppComponent

</script>
