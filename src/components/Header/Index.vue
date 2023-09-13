<template>
    <div class="col-md-12 background-header pt-2 position-absolute"> 
        <img :src="logoPastel" class="img-pastel"/>
        <img :src="text" class="img-text"/>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>
import logoPastel from '/public/img/logoPastel.svg'; 
import text from '/public/img/text.svg';

export default {
    name: "headerComponent",

    data(){
        return{
           logoPastel,
           text
        }
    }
}
</script>