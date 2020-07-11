<template>

    <div class="TimerContainer">

        <div>
            <form class="FlexInput" @submit.prevent="() => addNewTimer()">
                <input type="text" class="TimerInput" placeholder="Timer Name" v-model="timerName"/>
                <button class="TimerButton" type="submit">Create Timer</button>
            </form>
        </div>

        <div class="FlexTimer" v-if="true">
            <ul v-if="timers" :key="myKey">
                <li v-for="timer in timers" :key="timer.id" class="TimerList">

                    <div class="SingleTimer">
                        <p class="TimerName">{{timer.name}}</p>

                        <div class="TimerDiv">
                            <div class="RunningTime" v-if="timer.isActive">
                                {{Math.floor((((Date.now() - timer.startedTime) - (timer.restartTime - timer.stoppedTime)) / 1000) / 3600) | appendZero}} :
                                {{Math.floor(((((Date.now() - timer.startedTime) - (timer.restartTime - timer.stoppedTime)) / 1000) / 60) % 60) | appendZero}} :
                                {{Math.floor((((Date.now() - timer.startedTime) - (timer.restartTime - timer.stoppedTime)) / 1000) % 60) | appendZero}}
                            </div>

                            <div class="StoppedTime" v-if="!timer.isActive">
                                {{Math.floor(((timer.stoppedTime - timer.startedTime) / 1000) / 3600)| appendZero}} :
                                {{Math.floor((((timer.stoppedTime - timer.startedTime) / 1000) / 60) % 60) |appendZero}} :
                                {{Math.floor(((timer.stoppedTime - timer.startedTime) / 1000) % 60)| appendZero}}
                            </div>
                        </div>

                        <button v-if="!timer.isActive" class="StartButton"
                                @click="() => {startTimer(timer.id);}">
                            <img src="../assets/play.png" alt="start"/>
                        </button>

                        <button v-if="timer.isActive" class="PauseButton"
                                @click="() => {pauseTimer(timer.id); }">
                            <img src="../assets/pause.png" alt="pause"/>
                        </button>

                        <button class="DeleteButton" @click="() => {deleteTimer(timer.id)}">
                            <img src="../assets/delete.png" alt="delete"/>
                        </button>
                    </div>

                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import {store} from "@/store/store";

    export default {
        name: "TimerMain",
        data() {
            return {
                timers: store.state.timers,
                timerName: "",
                time: new Date(),
                myKey: 0,
            };
        },
        methods: {
            addNewTimer: function () {
                this.$store.dispatch("addNewTimer", this.timerName)
                this.timerName = "";
            },
            deleteTimer: function (id) {
                this.$store.dispatch("deleteTimer", id)
            },
            pauseTimer: function (amount) {
                this.$store.dispatch("pauseTimer", amount)
            },
            startTimer: function (amount) {
                this.$store.dispatch("startTimer", amount)
            },
            rerender() {
                this.myKey++
            }
        },
        filters: {
            appendZero: function (num) {
                if (num < 10) {
                    return "0" + num;
                } else {
                    return num;
                }
            }
        },
        computed: {},
        watch: {},
        mounted() {
            setInterval(() =>
                this.rerender(), 1000)
        },
        updated() {
        },
        created() {
        },
        destroy() {
        }
    }

</script>

<style scoped>
    * {
        font-family: "Nunito Sans", sans-serif;
    }

    .TimerContainer {
        background: #FFFFFF;
        box-shadow: 0 1px 3px rgba(32, 33, 39, 0.12);
        border-radius: 12px;
        width: 40vw;
        height: max-content;
        margin: 0 auto 20vh;
    }

    .FlexInput {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 5vh 0;
    }

    .TimerInput {
        background: #F8F9FA;
        border: 1px solid #E7E8EA;
        border-radius: 6px;
        color: rgba(103, 108, 117, 0.7);
        padding: 1rem;
        font-size: 1.1rem;
        margin-right: 1rem;
        width: 15vw;
    }

    .TimerButton {
        background: linear-gradient(163.14deg, #FF8E64 0%, #FFE641 100%);
        border-radius: 6px;
        font-weight: bold;
        text-align: center;
        color: #FFFFFF;
        border: none;
        font-size: 1.1rem;
        padding: 1rem;
        letter-spacing: 0.1rem;
    }

    .FlexTimer {
        display: flex;
        justify-content: center;
        border-top: 2px solid #E7E8EA;;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .SingleTimer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 25vw;
        margin: 5vh 0;
    }

    .TimerName {
        font-weight: 800;
        color: #5586F2;
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 8vw;
        padding: 0;
    }

    .TimerDiv {
        background: #E7E8EA;
        border: 1px solid #E7E8EA;
        box-sizing: border-box;
        border-radius: 6px;
    }

    .RunningTime {
        color: #676C75;
        font-size: 1rem;
        padding: 1rem;
    }

    .StoppedTime {
        color: #676C75;
        font-size: 1rem;
        background: rgba(255, 72, 118, 0.15);
        padding: 1rem;
    }

    .StartButton {
        background: linear-gradient(135deg, #009FC5 0%, #3CECB0 100%);
        border-radius: 2rem;
        border: none;
        height: 6vh;
        width: 3vw;
    }

    .PauseButton {
        background: linear-gradient(135deg, #7956EC 0%, #2FB9F8 100%);
        border-radius: 2rem;
        border: none;
        height: 6vh;
        width: 3vw;
    }

    .DeleteButton {
        background: linear-gradient(135deg, #F23673 0%, #FCA069 100%);
        border-radius: 0.5rem;
        border: none;
        height: 6vh;
        width: 3vw;
    }

    img {
        height: 3vh;
        width: auto;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        .TimerContainer {
            margin: 0 auto 5vh;
            width: 90vw;
        }

        .FlexInput {
            flex-direction: column;
            padding: 2vh 0;
        }

        .TimerInput {
            padding: 0.5rem;
            font-size: 0.9rem;
            width: 60vw;
            margin-bottom: 1rem;
            margin-right: 0;
        }

        .TimerButton {
            font-size: 0.9rem;
            padding: 0.5rem;
        }

        .SingleTimer {
            width: 80vw;
            margin: 1vh 0;
        }

        .TimerName {
            width: 25vw;
            padding: 0.5rem;
            font-size: 1rem;
        }

        .RunningTime {
            font-size: 0.9rem;
            padding: 0.5rem;
            width: 20vw;
        }

        .StoppedTime {
            font-size: 0.9rem;
            padding: 0.5rem;
        }

        .StartButton {
            border-radius: 3rem;
            height: 6vh;
            width: 10vw;
        }

        .PauseButton {
            border-radius: 3rem;
            height: 6vh;
            width: 10vw;
        }

        .DeleteButton {
            height: 6vh;
            width: 10vw;
        }

        img {
            height: 3vh;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .TimerContainer {
            margin: 0 auto 5vh;
            width: 80vw;
        }

        .TimerInput {
            width: 40vw;
        }

        .SingleTimer {
            margin: 2vh 0;
            width: 55vw;
        }

        .TimerName {
            width: 25vw;
        }

        .StartButton {
            border-radius: 3rem;
            height: 4vh;
            width: 5vw;
        }

        .PauseButton {
            border-radius: 3rem;
            height: 4vh;
            width: 5vw;
        }

        .DeleteButton {
            height: 4vh;
            width: 5vw;
        }

        img {
            height: 2vh;
        }
    }
</style>