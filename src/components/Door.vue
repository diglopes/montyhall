<template>
    <div class="door__area">
        <div class="door__frame" :class="{selected:selected && !open}">
            <Gift v-if="open && hasGift"/>
        </div>
        <div 
            class="door" 
            @click="selected = !selected"
            :class="{open}"
        >
            <div class="door__number" :class="{selected}">{{ number }}</div>
            <div 
                class="door__knob" 
                :class="{selected}"
                @click="open = true"
            >
            </div>
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
    $selected-border: 5px solid yellow;

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

        &.open {
            background: #0007;

            & .door__knob, & .door__number {
                display: none;
            }
        }

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
            transition: .3s ease;

            &.selected {
                border-left: $selected-border;
                border-right: $selected-border;
                border-top: $selected-border;
            }
        }

        &__knob {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: brown;
            align-self: flex-start;
            margin-top: 60px;
            transition: .3s ease;

            &.selected{
                background: yellow;
            }
        }

        &__number {
            transition: .3s ease;

            &.selected{
                color: yellow;
            }
        }

    }

</style>
