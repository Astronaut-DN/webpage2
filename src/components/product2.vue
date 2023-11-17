<template lang="">
    <div>
        <v-row>
        <v-col cols="12">
            <v-row v-show="grid">
            <!-- <v-col v-for="(product, i) in products" 
                  :key="i" 
                  cols="12" 
                  lg="4" 
                  sm="6"> -->
            <v-card class="mx-auto pb-2">
            <img height="200px" src="https://cdn.1112.com/1112/public/images/products/pizza/2pan/162204.png">
            
           
            <v-card-title class="text-capitalize">
                Pizza Hawaiian
            </v-card-title>
            
            <v-card-subtitle> $20 
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="primary">Read More</v-btn>
                <v-spacer> </v-spacer>
                <v-btn class="bg-primary">
                 Add to Cart
                </v-btn>
                </v-card-actions>

            </v-card>
        </v-row>
            </v-col>
            </v-row>
        <!-- </v-col>
     </v-row> -->
    </div>
</template>
<script>
// import { ref } from 'vue';
// import data from '../data/data';


export default {
    name: product,
    component:{ }
    // setup() {

    //     const product = ref(data)
    //     console.log(data)
    //     console.log()
    //     return {product}
    // }
}
// const product = ref(data)
// console.log(data)
</script>
<style lang="">
    
</style>