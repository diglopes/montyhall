<template>
    <div class="door__area">
        <div class="door__frame">
            <Gift v-if="open && hasGift"/>
        </div>
        <div class="door">
            <div class="door__number">{{ number }}</div>
            <div class="door__knob"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift'

export default {
    name: 'Door',
    components: {
        Gift
    },
    props: {
        number: {},
        hasGift: { type: Boolean },
    },
    data: function() {
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style lang="scss">
    $border: 5px solid brown;

    .door {
        position: absolute;
        top: 5px;
        height: 295px;
        width: 170px;
        background: chocolate;
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items: center;


        &__area{
            position: relative;
            width: 200px;
            height: 310px;
            border-bottom: 10px solid #aaa;
            margin-bottom: 20px;
            font-size: 3rem;
            display: flex;
            justify-content: center;
        }

        &__frame {
            position: absolute;
            height: 300px;
            width: 180px;  
            border-left: $border;
            border-right: $border;
            border-top: $border;

            display: flex;
            justify-content: center;
            align-items: flex-end;
        }

        &__knob {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: brown;
            align-self: flex-start;
            margin-top: 60px;
        }
    }

</style>
