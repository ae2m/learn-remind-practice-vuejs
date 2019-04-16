<template>
    <div>
            <slot></slot>   
            <hr>
            <slot name="quote"></slot>  
            <slot name="subTitle">Default Slot !</slot>  
    </div>    
</template>

<script>
export default {
   
}
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: center;
    }

    h2{
        color:red;
    }
</style>


