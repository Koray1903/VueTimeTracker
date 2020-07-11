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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5vh 10vw 0 10vw;
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
        font-size: 1.1rem;
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
            padding: 2vh 5vw 0 5vw;
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
        }

        .FlexDiv {
            width: 55vw;
        }

        p {
            font-size: 1rem;
        }

        button {
            font-size: 1rem;
            padding: 0.4rem;
        }

        .Brand {
            font-size: 2rem;

        }

    }
</style>