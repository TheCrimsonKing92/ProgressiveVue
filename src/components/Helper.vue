<template>
    <div :key="helper.id" :class="helper.class" v-tooltip="helper.tooltip" class="buyable" @click="tryBuy(helper.id)">
        {{ helper.currentCost }}
    </div>
</template>
<style>
</style>
<script>
    import Vue from 'vue'
    import { VTooltip } from 'v-tooltip'
    Vue.directive('tooltip', VTooltip)

    export default {
        data () {
            return {}
        },
        methods: {
            tryBuy (id) {
                this.$emit('try-buy', id)
            }
        },
        props: ['helper']
    }
</script>
