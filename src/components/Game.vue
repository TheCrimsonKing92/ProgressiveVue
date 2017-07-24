<template>
    <div class="game top5">
        <energy-source v-on:source-click="onSourceClick" :disabled="source.disabled" class="col-xs-4" style="height: 100%; min-height: 200px;"></energy-source>
        <stats :stats="stats" class="col-xs-4" style="height: 100%; min-height: 200px;"></stats>
        <store v-on:try-buy="onTryBuy" :store="store" class="col-xs-4" style="height: 100%; min-height: 200px;"></store>
    </div>
</template>
<style>
</style>
<script>
    import Constants from '../services/Constants'
    import EnergySource from '../components/Energy-Source'
    import Stats from '../components/Stats'
    import Store from '../components/Store'

    export default {
        components: {
            EnergySource,
            Stats,
            Store
        },
        data () {
            return {
                loaded: false,
                source: {
                    disabled: false
                },
                stats: {
                    clicks: 0,
                    score: {
                        current: 0,
                        highest: 0,
                        parts: 0
                    }
                },
                store: Constants.store,
                timer: {
                    tickHandle: null,
                    ticks: 0
                }
            }
        },
        methods: {
            addClickScore () {
                let base = 1

                let computed = base

                this.addScore(computed)
            },
            addScore (amount) {
                this.stats.score.current += amount

                this.checkHighestScore()
            },
            buyBlock (amount, buyable) {
                this.deductBlocks(amount)
                buyable.purchased = true
            },
            buyScore (buyable) {
                if (!this.canAfford(buyable.currentCost)) {
                    // TODO: Emit alert
                    return
                }

                this.deductScore(buyable.currentCost)
                buyable.amount++
                buyable.purchased = true
                buyable.currentCost = Math.floor(buyable.cost * Math.pow(buyable.costGrowth, buyable.amount))
            },
            canAfford (amount) {
                return this.stats.score.current >= amount
            },
            checkHighestScore () {
                if (this.stats.score.current > this.stats.score.highest) {
                    this.stats.score.highest = this.stats.score.current
                }
            },
            deductScore (amount) {
                this.stats.score.current -= amount

                if (this.stats.score.current < 0) {
                    this.stats.score.current = 0
                }
            },
            getBuyable (id) {
                return this.store.helpers.find(h => h.id === id)
            },
            loadGame () {

            },
            onSourceClick () {
                this.stats.clicks++
                this.addClickScore()
            },
            onTryBuy (id) {
                let buyable = this.getBuyable(id)
                if (!buyable) {
                    return
                }

                this.buyScore(buyable)
            },
            saveGame () {

            },
            tick () {
                if (!this.loaded) {
                    return
                }
            }
        },
        mounted () {
            window.setInterval(this.tick, 1000)
            this.loadGame()
        }
    }
</script>
