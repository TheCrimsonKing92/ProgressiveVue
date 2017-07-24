<template>
    <bs-default-panel title="The Store">
        <div class="row helpers" style="margin-top: -5px">
            <helper :key="helper.id" :helper="helper" v-for="helper of store.helpers" v-on:try-buy="tryBuy(helper.id, 'helper')"></helper>
        </div>
        <div class="row upgrades">
            <div :key="upgrade.id" v-for="upgrade of store.upgrades" :class="upgrade.class" @click="tryBuy(upgrade.id, 'upgrade')" class="buyable">
                {{ upgrade.cost }}
            </div>
        </div>
        <div class="row towers" >
            <div :key="tower.id" v-for="tower of store.towers" :class="tower.class" @click="tryBuy(tower.id, 'tower')" class="buyable">
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
    import Helper from '../components/Helper'

    export default {
        components: {
            BsDefaultPanel,
            Helper
        },
        data () {
            return {}
        },
        methods: {
            tryBuy (id, type) {
                this.$emit('try-buy', {
                    id: id,
                    type: type
                })
            }
        },
        props: ['store']
    }
</script>
