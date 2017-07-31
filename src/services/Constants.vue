<script>
    const buyable = (item, index) => {
        let asIdItem = idItem(item, index)
        let asBuyable = Object.assign({}, asIdItem, {
            amount: asIdItem.amount ? asIdItem.amount : 0,
            allowsMultiple: asIdItem.allowsMultiple ? asIdItem.allowsMultiple : false,
            class: asIdItem.class ? asIdItem.class : asIdItem.name.toLowerCase(),
            cost: asIdItem.cost ? asIdItem.cost : 10,
            costGrowth: asIdItem.costGrowth ? asIdItem.costGrowth : 1.08,
            currency: 'score',
            purchased: false
        })

        let withCost = Object.assign({}, asBuyable, {
            currentCost: Math.floor(asBuyable.cost * Math.pow(asBuyable.costGrowth, asBuyable.amount))
        })

        return Object.assign({}, withCost, {
            tooltip: generateBuyableTooltip(asBuyable)
        })
    }
    const generateBuyableTooltip = buyable => `Owned: ${buyable.amount} Next Costs ${buyable.currentCost} score`
    const generateHelperTooltip = helper => `Base power ${helper.power} ${helper.tooltip}`
    const helper = (item, index) => {
        let asBuyable = buyable(item, index)
        let asHelper = Object.assign({}, asBuyable, {
            allowsMultiple: true,
            power: asBuyable.power ? asBuyable.power : 1
        })

        return Object.assign({}, asHelper, {
            tooltip: generateHelperTooltip(asHelper),
            type: 'helper'
        })
    }
    const idItem = (item, index) => Object.assign({}, item, { id: index })
    const tower = (item, index) => {
        let asBuyable = buyable(item, index)

        return Object.assign({}, asBuyable, {
            allowsMultiple: false,
            currency: 'block',
            type: 'tower'
        })
    }
    const upgrade = (item, index) => {
        let asBuyable = buyable(item, index)

        return Object.assign({}, asBuyable, {
            allowsMultiple: false,
            type: 'upgrade'
        })
    }

    const baseUrl = 'https://thecrimsonking.net'

    const classes = [
        {
            name: 'Builder',
            description: 'Specializes in block-based construction'
        },
        {
            name: 'Master',
            description: 'Aids mouse and clicker production'
        },
        {
            name: 'Mechanic',
            description: 'Improves the performance of mechanical helpers'
        },
        {
            name: 'Medic',
            description: 'Reduces toxicity production'
        },
        {
            name: 'Thief',
            description: 'Discounts store prices'
        }
    ].map(idItem)

    const helpers = [
        {
            name: 'AutoClicker',
            class: 'auto-clicker',
            description: 'Helps you gain score by weakly clicking the source',
            cost: 50,
            power: 1
        },
        {
            name: 'Hammer',
            description: 'Earns score by smashing the source',
            cost: 250,
            power: 5
        },
        {
            name: 'Robot',
            description: 'An AI optimizing score production routines',
            cost: 1000,
            power: 10
        },
        {
            name: 'Airplane',
            description: 'An allied airplane to drop score en masse',
            cost: 15000,
            power: 50
        },
        {
            name: 'Cloner',
            description: 'Creates perfect score by cloning parts of the source',
            cost: 50000,
            power: 100
        },
        {
            name: 'Djinn',
            description: 'An ancient fire spirit mystically connected to the source',
            cost: 300000,
            power: 250
        },
        {
            name: 'Consumer',
            description: 'An anti-helper that consumes score to produce blocks',
            cost: 5000,
            power: -1
        }
    ].map(helper)

    const links = [
        {
            name: 'Home',
            location: baseUrl
        },
        {
            name: 'About',
            location: baseUrl + '/about'
        }
    ].map(idItem)

    const towers = [
        {
            name: 'Click Tower',
            class: 'click-tower',
            description: 'Increases Click Power',
            cost: 5000
        },
        {
            name: 'Cost Tower',
            class: 'cost-tower',
            description: 'Reduces Costs',
            cost: 2500
        },
        {
            name: 'Power Tower',
            class: 'power-tower',
            description: 'Increases Helper Power',
            cost: 1500
        }
    ].map(tower)

    const upgrades = [
        {
            name: 'Helping Hand',
            class: 'helping-hand',
            description: '+1 AutoClicker power',
            cost: 200
        },
        {
            name: 'Click Efficiency',
            class: 'click-efficiency',
            description: 'Double AutoClicker and mouse power',
            cost: 500
        },
        {
            name: 'Heavier Hammers',
            class: 'heavier-hammers',
            description: 'Double hammer power',
            cost: 1250
        },
        {
            name: 'Helping Handsier',
            class: 'helping-handsier',
            description: '+4 AutoClicker and mouse power',
            cost: 2500
        },
        {
            name: 'Cybernetic Synergy',
            class: 'cybernetic-synergy',
            description: '+8 power per Hammer and Robot pair',
            cost: 9000
        },
        {
            name: 'Helping Handsiest',
            class: 'helping-handsiest',
            description: '+16 AutoClicker and mouse power',
            cost: 11000
        },
        {
            name: 'Extended Cargo',
            class: 'extended-cargo',
            description: '+25% Airplane power',
            cost: 22000
        },
        {
            name: 'Buddy System',
            class: 'buddy-system',
            description: '+100% Airplane power',
            cost: 85000
        },
        {
            name: 'Cloner Overdrive',
            class: 'cloner-overdrive',
            description: '+40% cloner power',
            cost: 300000
        },
        /*
        {
            name: 'Efficient Operations'
        },
        */
        {
            name: 'The Awakening',
            class: 'the-awakening',
            description: 'Djinn sacrifice current power to reach full potential',
            cost: 2500000
        },
        {
            name: 'Audible Motivation',
            class: 'audible-motivation',
            description: '+2% Djinn power per AutoClicker. +1% AutoClicker power per Djinn',
            cost: 5000000
        }
    ].map(upgrade)

    export default {
        baseUrl: baseUrl,
        classes: classes,
        links: links,
        store: {
            helpers: helpers,
            helperNames: helpers.map(h => h.name),
            towers: towers,
            towerNames: towers.map(t => t.name),
            upgrades: upgrades,
            upgradeNames: upgrades.map(u => u.name)
        }
    }
</script>