<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='appQuote'">Quote</button>
                <button @click="selectedComponent='appAuthor'">Author</button>
                <button @click="selectedComponent='appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <!-- skip : state -> destroy life cycle-->
                <keep-alive>
                    <component :is="selectedComponent">

                        <p> Default Component {{ selectedComponent }}</p>

                    </component>
                </keep-alive>
                <!--
                <app-quote >
                    <h2>{{ quoteTitle }}</h2>
                    <p>A wonderful Quote </p>
                    <p slot="quote">A wonderful Quote slot ! </p>
                </app-quote>
                -->

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './component/Quote.vue';
    import New from './component/New.vue';
    import Author from './component/Author.vue';

    export default {
        data: function(){
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components:{
            'appQuote': Quote,
            'appNew': New,
            'appAuthor': Author
        }
    }
</script>

<style scoped>

    h2{
        color:green;
    }

</style>
