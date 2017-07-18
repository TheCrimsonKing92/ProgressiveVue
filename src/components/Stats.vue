<template>
    <div class="stats-panel panel-default">
        <div class="stat">
            {{ score }}
        </div>
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
        props: ['score']
    }
</script>
