<template>
    <div class="energy-source-panel panel-default">
        <div class="energy-source" :click="emitClick"></div>
    </div>
</template>
<style>
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
<script>
    export default {
        data () {
            return {}
        },
        methods: {
            emitClick () {
                this.$emit('source-click')
            }
        },
        props: ['disabled']
    }
</script>
