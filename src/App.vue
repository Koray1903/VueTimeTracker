<template>
    <div id="app">
        <Header/>
        <Body/>
        <Timer/>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import Header from "@/components/Header";
    import Body from "@/components/Body";
    import Timer from "@/components/TimerMain";

    import {store} from "@/store/store";

    export default {
        name: "App",
        store,
        components: {
            Header,
            Body,
            Timer,
            Footer
        }
    };
</script>

<style>
    html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100%;
        height: 100%;
        background-color: #F2F2F2;
        text-align: center;
        font-family: "Nunito Sans", sans-serif;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
