<template>
    <div class="game top5">
        <energy-source v-on:source-click="onSourceClick" :disabled="source.disabled" class="col-xs-4" style="height: 100%; min-height: 200px;"></energy-source>
        <stats :stats="stats" class="col-xs-4" style="height: 100%; min-height: 200px;"></stats>
        <store v-on:try-buy="onTryBuy" :store="store" class="col-xs-4" style="height: 100%; min-height: 200px;"></store>
    </div>
</template>
<style>
    .game {
        height: 20%;
    }
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
                    blocks: {
                        current: 0,
                        highest: 0,
                        parts: 0
                    },
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
                const base = 1

                // If Master, base should be 2

                let power = base

                const handsier = this.getUpgradeByName('Helping Handsier')

                if (handsier.purchased) {
                    power += 4
                }

                const handsiest = this.getUpgradeByName('Helping Handsiest')

                if (handsiest.purchased) {
                    power += 16
                }

                const efficiency = this.getUpgradeByName('Click Efficiency')

                if (efficiency.purchased) {
                    power *= 2
                }

                this.addScore(power)
            },
            addScore (amount) {
                this.stats.score.current += amount

                this.checkHighestScore()
            },
            buyBlock (buyable) {
                if (!this.canAfford(buyable.currentCost, buyable.currency)) {
                    // TODO: Emit alert
                    return
                }

                this.deductBlocks(buyable.currentCost)

                buyable.purchased = true
            },
            buyScore (buyable) {
                if (!this.canAfford(buyable.currentCost, buyable.currency)) {
                    // TODO: Emit alert
                    return
                }

                this.deductScore(buyable.currentCost)

                buyable.purchased = true

                if (buyable.allowsMultiple) {
                    buyable.amount++
                    buyable.currentCost = Math.floor(buyable.cost * Math.pow(buyable.costGrowth, buyable.amount))
                }
            },
            canAfford (amount, currency) {
                if (currency === 'score') {
                    return this.stats.score.current >= amount
                }

                return this.stats.blocks.current >= amount
            },
            calculateAirplaneScore () {
                const airplane = this.getHelperByName('Airplane')

                const basePower = airplane.power
                let power = basePower
                const amount = airplane.amount

                // Upgrades

                return power * amount
            },
            calculateAutoClickerScore () {
                const autoClicker = this.getHelperByName('AutoClicker')

                const basePower = autoClicker.power
                let power = basePower
                const amount = autoClicker.amount

                const helpingHand = this.getUpgradeByName('Helping Hand')

                if (helpingHand.purchased) {
                    power += 1
                }

                return power * amount
            },
            calculateClonerScore () {
                const cloner = this.getHelperByName('Cloner')

                const basePower = cloner.power
                let power = basePower
                const amount = cloner.amount

                // Upgrades

                return power * amount
            },
            calculateConsumerScore () {
                const consumer = this.getHelperByName('Consumer')

                const basePower = consumer.power
                let power = basePower
                const amount = consumer.amount

                // Upgrades

                return power * amount
            },
            calculateDjinnScore () {
                const djinn = this.getHelperByName('Djinn')

                const basePower = djinn.power
                let power = basePower
                const amount = djinn.amount

                // Upgrades

                return power * amount
            },
            calculateHammerScore () {
                const hammer = this.getHelperByName('Hammer')

                const basePower = hammer.power
                let power = basePower
                const amount = hammer.amount

                // Upgrades

                return power * amount
            },
            calculateRobotScore () {
                const robot = this.getHelperByName('Robot')

                const basePower = robot.power
                let power = basePower
                const amount = robot.amount

                // Upgrades

                return power * amount
            },
            calculateScore (buyable) {
                const name = buyable.name

                if (!this.store.helperNames.includes(name)) {
                    return
                }

                if (name === 'AutoClicker') {
                    return this.calculateAutoClickerScore()
                } else if (name === 'Hammer') {
                    return this.calculateHammerScore()
                } else if (name === 'Robot') {
                    return this.calculateRobotScore()
                } else if (name === 'Airplane') {
                    return this.calculateAirplaneScore()
                } else if (name === 'Cloner') {
                    return this.calculateClonerScore()
                } else if (name === 'Djinn') {
                    return this.calculateDjinnScore()
                } else if (name === 'Consumer') {
                    return this.calculateConsumerScore()
                } else {
                    return 0
                }
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
            getHelper (id) {
                return this.store.helpers.find(h => h.id === id)
            },
            getHelperByName (name) {
                return this.store.helpers.find(h => h.name === name)
            },
            getTower (id) {
                return this.store.towers.find(h => h.id === id)
            },
            getUpgrade (id) {
                return this.store.upgrades.find(h => h.id === id)
            },
            getUpgradeByName (name) {
                return this.store.upgrades.find(u => u.name === name)
            },
            loadGame () {
                // get localstorage
                this.loaded = true
            },
            onSourceClick () {
                this.stats.clicks++
                this.addClickScore()
            },
            onTryBuy (buyable) {
                let id = buyable.id
                let type = buyable.type

                if (type === 'helper') {
                    let helper = this.getHelper(id)
                    if (!helper) {
                        return
                    }

                    this.buyScore(helper)
                } else if (type === 'upgrade') {
                    let upgrade = this.getUpgrade(id)
                    if (!upgrade) {
                        return
                    }

                    if (upgrade.purchased && !upgrade.allowsMultiple) {
                        return
                    }

                    this.buyScore(upgrade)
                } else {
                    let tower = this.getTower(id)
                    if (!tower) {
                        return
                    }

                    if (tower.purchased && !tower.allowsMultiple) {
                        return
                    }

                    this.buyBlock(tower)
                }
            },
            saveGame () {

            },
            tick () {
                if (!this.loaded) {
                    return
                }

                let total = 0

                this.store.helpers.forEach(helper => {
                    total += this.calculateScore(helper)
                })

                this.addScore(total)
            }
        },
        mounted () {
            window.setInterval(this.tick, 1000)
            this.loadGame()
        }
    }
</script>
