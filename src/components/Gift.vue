<template>
    <div class="gift">
        <div class="gift__tie-1"></div>
        <div class="gift__tie-2"></div>
        <div class="gift__top"></div>
        <div class="gift__body"></div>
    </div>
</template>

<script>
export default {
    name: 'Gift'
}
</script>

<style lang="scss">
    .gift {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 10;

        &__top {
            width: 100px;
            height: 25px;
            background: #7aa944;
        }

        &__body {
            width: 90px;
            height: 60px;
            background: #5c7e32; 
        }

         &__tie-1 {
            width: 15px;
            height: 85px;
         }

         &__tie-2 {
            width: 90px;
            height: 15px;
            top: 45px;
         }

        &__tie-1, &__tie-2 {
            position: absolute;
            background: #C70039;
        }
    }
</style>
