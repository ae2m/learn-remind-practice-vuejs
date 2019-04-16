<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toLowerCase | toUpperCase }}</p>
                <hr>
                <button @click="someAlertMixin(text)">Alert : )</button>

            </div>
        </div>
    </div>
</template>

<script>
    import { fruitsMixin } from './FruitsMixin';
    export default {
        data: function(){
            return {
                text: 'Hello filter text !',
                fruits: ['apple','banana']
            }
        },
        mixins: [fruitsMixin]
    }
</script>

<style>

</style>
