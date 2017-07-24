<template>
    <bs-default-panel title="The Store">
        <div class="row helpers" style="margin-top: -5px">
            <div :key="helper.id" v-for="helper of store.helpers" :class="helper.class" v-tooltip="helper.tooltip" @click="tryBuy(helper.id)" class="buyable">
                {{ helper.currentCost }}
            </div>
        </div>
        <div class="row upgrades">
            <div :key="upgrade.id" v-for="upgrade of store.upgrades" :class="upgrade.class" @click="tryBuy(upgrade.id)" class="buyable">
                {{ upgrade.cost }}
            </div>
        </div>
        <div class="row towers" >
            <div :key="tower.id" v-for="tower of store.towers" :class="tower.class" @click="tryBuy(tower.id)" class="buyable">
                {{ tower.cost }}
            </div>
        </div>
    </bs-default-panel>
</template>
<style>
    .airplane {
        background-color: purple;
    }
    .auto-clicker {
        background-color: red;
    }
    .buyable {
        cursor: default;
        float: left;
        height: 45px;
        margin-left: 10px;
        margin-top: 5px;
        width: 45px;
    }
    .click-tower {
        background-color: aqua;
    }
    .cloner {
        background-color: teal;
    }
    .consumer {
        background-color: pink; 
    }
    .cost-tower {
        background-color: chocolate;
    }
    .djinn {
        background-color: orange;
    }
    .hammer {
        background-color: blue;
    }
    .helping-hand {
        background-color: mediumslateblue;
    }
    .power-tower {
        background-color: cornflowerblue;
    }
    .robot {
        background-color: green;
    }
</style>
<script>
    import BsDefaultPanel from '../components/Bs-Default-Panel'
    import Vue from 'vue'
    import { VTooltip } from 'v-tooltip'
    Vue.directive('tooltip', VTooltip)

    export default {
        components: {
            BsDefaultPanel
        },
        data () {
            return {}
        },
        methods: {
            tryBuy (id) {
                this.$emit('try-buy', id)
            }
        },
        props: ['store']
    }
</script>
