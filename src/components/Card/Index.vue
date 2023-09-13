<template>
    <div class="container custom-container py-5 position-relative"> 
        <div class="row">
            <div class="col-md-6 z-1">
                 <div class="parallax-container" ref="parallaxContainer">  
                    <img :src="pastel" class="pastel-image"/>
                    <!-- <div class="smoke-effect" ref="smokeEffect" id="smokeEffect"></div> -->
                 </div>
            </div>
            <div class="col-md-6 ">
                <img :src="pasteis" class="img-pasteis"/>
            </div>
        </div>  
    </div>
    <div class="container custom-container mt-5">
         <div class="card custom">
            <div class="card-header p-4">
                <div class="row">
                    <div class="col-md-9 ps-5">
                        <h4 class="text-brown">Monte aqui o seu cardápio. O que está esperando?</h4>
                    </div>
                    <div class="col-md-3 d-flex justify-content-evenly align-items-center">
                        <label class="form-check-label" for="comida">Comida</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="comida" autocompleted="" v-model="type.hasDrink" @click="toggleChecked">
                            <label class="form-check-label">Bebida</label>
                        </div>
                    </div>

                 
                    
                </div>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <div class="row mt-n">
                        <div class="col-sm-4 mb-3">
                            <input class="form-control" type="text" placeholder="Título do pedido" v-model="menu.title" required>
                            <div class="text-danger f-robotoBold" v-if="error"><small>{{ error }}</small></div>
                        </div>
                        <div class="col-sm-5 mb-3">
                             <input class="form-control" type="text" placeholder="Sabor" v-model="menu.flavor" required>
                             <div class="text-danger f-robotoBold" v-if="error"><small>{{ error }}</small></div>
                        </div>
                        <div class="col-sm-3 mb-3">
                            <input class="form-control" type="text" placeholder="R$" min="0" v-model.lazy="menu.value" v-money="money" required>
                            <div class="text-danger f-robotoBold" v-if="error"><small>{{ error }}</small></div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <textarea class="form-control" placeholder="Descrição" id="textarea" rows="3" v-model="menu.description" required></textarea>
                    </div>
                    <div class="col mb-3">
                        <div class="form-control text-center">
                            <label for="file" class="file-label">
                               <font-awesome-icon :icon="['fas', 'cloud-arrow-down']" size="2xl" style="color: #E43636;" />
                                <span class="f-robotoRegular">Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.</span> 
                            </label>
                            <input type="file" id="file" accept="image/*" class="file-input-field" @change="upload($event)" required/>
                        </div>
                    </div>
                </div>
                 <div class="row custom-buttons">
                    <div class="col d-flex justify-content-end align-items-end">
                        <button class="btn btn-danger" @click="clear">LIMPAR</button>
                    </div>
                    <div class="col d-flex justify-content-start align-items-end">
                        <button class="btn btn-warning" @click="store">CADASTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Menu/>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>
import pasteis from '/public/img/pasteis.png'
import pastel from '/public/img/pastelParalax.png'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons'
library.add( faCloudDownload)

import Menu from '@components/Menu/Index.vue'

import VueSweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import {VMoney} from 'v-money'

import { mapActions, mapGetters } from 'vuex'

export default {
    name: "CardComponent",
    components: {
        FontAwesomeIcon,
        Menu,
    },
    directives: {
        VueSweetAlert,
        money: VMoney
    },
    computed:{
        ...mapGetters({
            menu: 'menu/menu',
            error: 'menu/error',
            type: 'menu/type'
        })
    },
    methods:{
        ...mapActions({
            store: 'menu/store',
            clear: 'menu/clear'
        }),
        upload(event){
            this.menu.image = event.target.files[0];
            if (this.menu.image) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.menu.image = e.target.result;
                };
                reader.readAsDataURL(this.menu.image);
            }
        },
        showAlert(message) {
            this.$swal({
                title: 'Alerta!',
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#E43636',
                cancelButtonText: 'Não! cancelar.',
                confirmButtonText: 'Sim! alterar.'
            }).then((result) => {

                if (!result.isConfirmed) {                    
                    this.type.hasDrink = !this.type.hasDrink

                    this.$swal(
                        'Cancelado!',
                        'Alteração de cadastro cancelada.',
                        'success'
                    )
                }else{
                    this.$swal(
                        'Alterado!',
                        'Alteração de cadastro realizada com sucesso.',
                        'success'
                    )
                }
            })
        },        
        toggleChecked() {
            if (!this.type.hasDrink) {
                this.showAlert("Deseja realmente alterar o cadastro para Bebida?");
            } else {
                this.showAlert("Deseja realmente alterar o cadastro para Comida?");
            }
        },
    },
    data(){
        return{
            pasteis,
            pastel,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                precision: 2,
                masked: false
            }
        }
    }
}
</script>

