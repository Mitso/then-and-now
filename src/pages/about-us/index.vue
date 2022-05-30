<template>
    <section class="container">
        <div class="top">
            <Nav/>
        </div>
        <div class="content">
            <h1 class="heading heading--primary">About us</h1>
            <p class="paragraph">We are a grass roots public goods implementation and retroactiove payment platform that uses cryptocurrency payments from Cadarno catalyst funding pool.</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AboutUs'
    }
</script>

<style lang="scss">
    @import '../../assets/styles/variables';



    .heading--primary {
        font-family: 'Prompt', sans-serif;
        text-align: center;
    }
</style>