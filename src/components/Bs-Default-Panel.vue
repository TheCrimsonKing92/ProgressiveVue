<template>
    <div class="panel panel-default">
        <div class="panel-header">
            <h4>
                {{ title }}
            </h4>
        </div>
        <div class="panel-body">
            <slot>
                Default panel content from slot :O
            </slot>
        </div>        
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        props: ['title']
    }
</script>
