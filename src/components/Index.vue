<template>
    <Header/>
    <Card/>
    <Footer/>
</template>

<style lang="scss">
    @import "@basePath/assets/style/main.scss";
</style>

<script>

import Header from './Header/Index.vue';
import Card from './Card/Index.vue';
import Footer from './Footer/Index.vue';

export default {
    name: 'IndexComponent',
    components: {
        Header,
        Card,
        Footer
    }
}
</script>