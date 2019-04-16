<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <div class="form" >
            <div v-if="!started" class="form-question">
                <label for="doorsAmount">Quantas portas?</label>
                <input 
                    type="text" 
                    id="doorsAmount" 
                    size="3"
                    v-model.number="doorsAmount"
                >
            </div>
            <div v-if="!started" class="form-question">
                <label for="selectedDoor">Qual a porta é premiada?</label>
                <input 
                    type="text"
                    id="selectedDoor"
                    size="3"
                    v-model.number="selectedDoor"
                >
            </div>
            <button v-if="!started" @click="startGame">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in doorsAmount" :key="i">
                <Door :hasGift="i === selectedDoor" :number="i"/>
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: {
        Door
    },
    data: function() {
        return {
            started: false,
            doorsAmount: 3,
            selectedDoor: null
        }
    },
    methods: {
        startGame() {
            if(this.doorsAmount > 0 && this.selectedDoor > 0 && this.selectedDoor <= this.doorsAmount) {
                this.started = true
            }
        }
    }
}
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        color: #fff;
        background: #7B8E10;
    }

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;

        & h1 {
            border: 1px solid #f6f6f6;
            padding: 20px;
            margin-bottom: 60px;
        }
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .form,
    .form input,
    .form button {
        margin-bottom: 10px;
        font-size: 2rem;
    }

    .doors {
        align-self: stretch;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .form-question {
        width: 100%;
        display: flex;
    }

    label {
        margin-right: auto;
    }

    input {
        text-align: center;
        width: 60px;
        margin-left: 20px;
    }

    button {
        cursor: pointer;
        padding: 5px 15px;
    }
</style>
