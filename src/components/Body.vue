<template>
    <div>
        <p class="text1"><span style="font-weight: 800">Why</span> do we use it?</p>
        <p class="text2">This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen.
            To her surprise, she lost sight of her in a moment.</p>
    </div>
</template>

<script>
    export default {
        name: "Body"
    }
</script>

<style scoped>
    * {
        font-family: "Nunito Sans", sans-serif;
    }

    .text1 {
        color: #282B31;
        font-size: 3rem;
        margin: 30vh 0 5vh 0;
    }

    .text2 {
        color: #676C75;
        font-size: 1rem;
        padding: 0 30vw;
        margin: 0 0 10vh 0;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        .text1 {
            font-size: 1.5rem;
            margin: 15vh 0 5vh 0;
        }

        .text2 {
            font-size: 0.9rem;
            padding: 0 5vw;
            margin: 0 0 5vh 0;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .text1 {
            font-size: 2rem;
            margin: 10vh 0 5vh 0;
        }

        .text2 {
            padding: 0 20vw;
            margin: 0 0 5vh 0;
        }
    }
</style>