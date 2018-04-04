<template>
    <div class="home">

    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        mounted(){
            this.$store.dispatch('authenticate')
        }
    }
</script>

<style scoped></style>