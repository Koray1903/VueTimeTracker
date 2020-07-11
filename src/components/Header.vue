<template>
    <div class="HeaderDiv">
        <NavBar/>

        <img class="AppIcon" src="../assets/AppIcon.png" alt="AppIcon"/>
        <p class="LandingText"><span style="font-weight: 800">AppStarter.</span> Best landing page for
            web and
            mobile
            apps</p>
        <img class="Tablet" src="../assets/Tablet.png" alt="Tablet"/>
        <div class="ButtonDiv">
            <button class="Button1">Download Now</button>
            <button class="Button2">Watch Video</button>
        </div>
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar";

    export default {
        name: "Header",
        components: {
            NavBar
        }
    };
</script>

<style scoped>
    * {
        font-family: "Nunito Sans", sans-serif;
    }

    .HeaderDiv {
        background: url("../assets/Background.png") top;
        background-size: cover;
        height: 90vh;
    }

    .AppIcon {
        position: absolute;
        left: 10vw;
        top: 30vh;
        height: 10vh;
    }

    .LandingText {
        font-size: 2.5rem;
        color: #FFFFFF;
        position: absolute;
        left: 10vw;
        top: 40vh;
        width: 40vw;
        text-align: left;
    }

    .Tablet {
        position: absolute;
        right: 15vw;
        top: 20vh;
        height: 80vh;
    }

    .ButtonDiv {
        position: absolute;
        top: 70vh;
        left: 10vw;
    }

    .Button1 {
        background: linear-gradient(163.33deg, #FF8E64 0%, #FFE641 100%);
        border-radius: 6px;
        border: none;
        color: #FFFFFF;
        padding: 0.8rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        margin-right: 1rem;

    }

    .Button2 {
        background: #FFFFFF;
        border-radius: 6px;
        border: none;
        color: #282B31;
        padding: 0.8rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        font-size: 1rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        .HeaderDiv {
            height: 80vh;
        }

        .AppIcon {
            height: 10vh;
            top: 20vh;
        }

        .LandingText {
            top: 30vh;
            width: 90vw;
            font-size: 1rem;
        }

        .Tablet {
            top: 55vh;
            right: 25vw;
            height: 35vh;
        }

        .ButtonDiv {
            top: 45vh;
        }

        .Button1 {
            padding: 0.5rem;
            font-size: 0.8rem;
        }

        .Button2 {
            padding: 0.5rem;
            font-size: 0.8rem;
        }
    }


    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .HeaderDiv {
            height: 55vh;
        }

        .AppIcon {
            height: 8vh;
            top: 20vh;
        }

        .LandingText {
            top: 25vh;
            width: 50vw;
            font-size: 1.6rem;
        }

        .Tablet {
            top: 15vh;
            right: 10vw;
            height: 35vh;
        }

        .ButtonDiv {
            top: 38vh;
        }
    }

</style>