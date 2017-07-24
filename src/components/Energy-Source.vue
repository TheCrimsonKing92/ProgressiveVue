<template>
    <bs-default-panel title="The Source">
        <div :class="{ disabled: disabled }" class="energy-source" @click="emitClick"></div>
    </bs-default-panel>
</template>
<style>
    .energy-source {
        border-radius: 5em;
        background-color: green;
        height: 120px;
        margin-left: 100px;
        min-height: 40px;
        min-width: 40px;
        opacity: 1;
        width: 120px;
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
