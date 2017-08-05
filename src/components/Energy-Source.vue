<template>
    <bs-default-panel title="The Source">
        <div :class="{ disabled: disabled }" class="energy-source" @click="emitClick"></div>
    </bs-default-panel>
</template>
<style>
    .energy-source {
        border-radius: 5em;
        background-color: green;
        height: 100%;
        margin-left: 20%;
        min-height: 40px;
        min-width: 40px;
        opacity: 1;
        width: 62%;
    }

    .disabled {
        opacity: 0.3;
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
        methods: {
            emitClick () {
                this.$emit('source-click')
            }
        },
        props: ['disabled']
    }
</script>
