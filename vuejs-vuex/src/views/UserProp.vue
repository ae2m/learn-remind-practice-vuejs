<template>
    <div class="user">
        <h1>This page is [ dynamic routing with props ] : {{ usernameProp }} </h1>
    </div>
</template>

<script>
export default {
    props: {
        usernameProp: {
            type: String
        }
    }
}
</script>

<style>

</style>
