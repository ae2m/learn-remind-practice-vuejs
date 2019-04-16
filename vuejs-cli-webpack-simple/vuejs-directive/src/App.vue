<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-local-highlight:background.delayed.otherMod="{mainColor:'red' , delayTime:1000}"> Highlight Custum directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives:{
            'local-highlight': {
                bind(el, binding, vnode){
                    if(binding.modifiers['delayed']){
                        setTimeout(function(){
                            alert(1);
                        },binding.value.delayTime);
                    }
                if(binding.arg == 'background'){
                el.style.color = binding.value.mainColor;
                }else{
                el.style.color = 'green';
        }
                }
            }
        }
    }
</script>

<style>

</style>
