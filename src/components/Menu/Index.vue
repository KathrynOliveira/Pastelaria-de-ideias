<template>
    <div v-if="menus.length > 0" class="separator my-5">
        <h4>Veja como será apresentado ao cliente</h4>
    </div>
    <div class="container custom-container my-5">
        <div v-if="menus.length > 0">
            <div class="row" v-for="(menu, index) in menus" :key="index">
                <div class="col-md-4 position-col">
                    <div class="card mb-3 custom-h">
                        <div v-if="!type.hasDrink">
                            <img :src="menu.image || '/img/images.png'" class="img-fluid rounded position-relative" alt="imagem-cardapio">
                        </div>
                        <div v-else>
                            <img :src="menu.image || '/img/drinks.jpg'" class="img-fluid rounded position-relative" alt="imagem-cardapio">
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card mb-3 mobile">
                        <div class="card-header ps-5 py-3 bg-red d-flex justify-content-between">
                            <h4 class="text-yellow">"{{ menu.title }}"</h4>
                            <h4 class="text-white">{{ menu.value }}</h4>
                        </div>
                        <div class="card-body ps-5 py-3">
                            <p class="card-text text-brown">Sabor: <span> {{ menu.flavor }} </span></p>
                            <p class="card-text text-brown">Descrição: <span> {{ menu.description || 'Não possui descrição' }} </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card p-5">
                <font-awesome-icon :icon="['fas', 'face-sad-tear']" bounce size="2xl" style="color: #FFCA00;" />
                <h4 class="text-center text-yellow mt-3">Não possui cardápio cadastrado.</h4>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>
import { mapGetters } from 'vuex'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
library.add(faSadTear)

export default {
    name: "menuComponent",

    components:{ FontAwesomeIcon },

    computed:{
        ...mapGetters({
            menus: 'menu/menus',
            type: 'menu/type'
        })
    },
}
</script>