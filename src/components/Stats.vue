<template>
    <bs-default-panel title="The Stats">
        <p>
            Current Score: {{ stats.score.current }}
        </p>
        <p>
            Highest Score: {{ stats.score.highest }}
        </p>
        <p>
            Total Clicks: {{ stats.clicks }}
        </p>
    </bs-default-panel>
</template>
<style>
    .stat {
        height: 20px;
        text-align: center;
    }
</style>
<script>
    import BsDefaultPanel from '../components/Bs-Default-Panel'
    export default {
        components: {
            BsDefaultPanel
        },
        data () {
            return {}
        },
        props: ['stats']
    }
</script>
