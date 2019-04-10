<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <Door number="1" :hasGift="false"/>
    </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: {
        Door
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
</style>
