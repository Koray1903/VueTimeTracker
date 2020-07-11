<template>
    <div class="FooterDiv">

        <p class="Brand">AppStarter</p>

        <div class="FlexDiv1">
            <div class="FlexDiv2">
                <p style="font-size: 0.9rem; color:#999EA8; margin:0">Created with</p>
                <img style="margin: 0 0.3rem 0 0.3rem" src="../assets/heart.png" alt="heart"/>
                <p style="font-size: 0.9rem; color: #999EA8; margin:0">by</p>
                <p style="font-size: 0.9rem; font-weight: bold; color: #282B31; margin: 0 0 0 0.3rem">Sergey
                    Azovskiy</p>
            </div>
            <p style="font-size: 0.9rem; color: #999EA8; margin:0">© AppStarter, 2017</p>
        </div>

        <div style="display: flex">
            <img class="socialMediaLogo" src="../assets/Twitter.png" alt="twitter"/>
            <img class="socialMediaLogo" src="../assets/Facebook.png" alt="facebook"/>
            <img class="socialMediaLogo" src="../assets/Instagram.png" alt="instagram"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Footer"
    };
</script>

<style scoped>
    * {
        font-family: "Nunito Sans", sans-serif;
    }

    .FooterDiv {
        border: 1px solid #E7E8EA;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: max-content;
        background-color: #FFFFFF;
        padding: 5vh 10vw 5vh 10vw ;
    }

    .Brand {
        font-weight: 800;
        font-size: 2rem;
        color: #282B31;
        margin: 0;
    }

    .FlexDiv1 {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    .FlexDiv2 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .socialMediaLogo {
        width: 3rem;
        height: 3rem;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        .FooterDiv {
            height: 20vh;
            padding: 1rem 0 1rem 0;
            flex-direction: column;
        }

        .Brand {
            font-size: 1rem;
        }

        .socialMediaLogo {
            width: 2rem;
            height: 2rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        /* LOOKS GOOD */
    }

</style>