<template>
    <div class="FlexNavBar">
        <p class="Brand">AppStarter</p>
        <div class="FlexDiv">
            <p>Features</p>
            <p>Video Tour</p>
            <p>Reviews</p>
            <p>Pricing</p>
            <button>GET IT FREE</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    };
</script>

<style scoped>
    * {
        font-family: "Nunito Sans", sans-serif;
    }

    .FlexNavBar {
        position: absolute;
        display: flex;
        justify-content: space-between;
        padding: 5vh 0 0 5vw;
        width: 80vw;
    }

    .Brand {
        font-size: 3rem;
        font-weight: 800;
        color: #FFFFFF;
    }

    .FlexDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 35vw;
    }

    p {
        margin: 0;
        font-size: 1rem;
        color: #FFFFFF;
    }

    button {
        background: #FFFFFF;
        border-radius: 6px;
        border: none;
        text-align: center;
        letter-spacing: 0.1rem;
        font-weight: bold;
        color: #282B31;
        padding: 0.8rem;
        font-size: 1rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        .FlexNavBar {
            flex-direction: column;
            width: 90vw;
            padding: 2vh 0 0 5vw;
            height: 12vh;
        }

        .Brand {
            font-size: 2rem;
        }

        .FlexDiv {
            width: 90vw;
        }

        p {
            font-size: 0.8rem;
        }

        button {
            font-size: 0.8rem;
            padding: 0.2rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .FlexNavBar {
            width: 90vw;
        }

        .FlexDiv {
            width: 60vw;
        }

        .Brand {
            font-size: 2rem;

        }

    }
</style>