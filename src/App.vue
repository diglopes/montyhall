<template>
    <div id="app">
        <h1>Problema de Monty Hall</h1>
        <Gift />
    </div>
</template>

<script>
import Gift from './components/Gift'

export default {
    name: 'App',
    components: {
        Gift
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
        background-image: radial-gradient( circle 848px at 3.8% 67.2%,  rgba(44,45,45,1) 0%, rgba(16,20,18,1) 90.1% );
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
