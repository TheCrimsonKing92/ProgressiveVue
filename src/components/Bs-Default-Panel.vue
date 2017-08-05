<template>
    <div class="panel panel-default" style="height: 100%;">
        <div style="height: 20%; margin-bottom: 5%;">
            <h4>
                {{ title }}
            </h4>
        </div>
        <div class="content-slot">
            <slot>
                Default slot content for Bs-Default-Panel
            </slot>
        </div>
    </div>
</template>
<style>
    .content-slot {
        height: 70%;
        padding-bottom: 5%;
    }
</style>
<script>
    export default {
        data () {
            return {}
        },
        props: ['title']
    }
</script>
