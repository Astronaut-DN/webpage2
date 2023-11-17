<template lang="">
  <div id="home">
    
  <!-- Carousal สไลด์ โปรโมชั่นต่างๆ -->
   <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover"
    height="500"
    width="800"
    >
     <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
   </v-carousel>
  

<v-container>
   <v-row height="230">

    <v-col order="6">
  <v-sheet>
    <v-dialog width="100%"
        height="200">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"
    width="150%" height="100"> </v-btn>
  </template>
  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
    </v-dialog>
  </v-sheet>
    </v-col>

    <v-col order="6">
  <v-sheet>
    <v-dialog width="100%"
        height="200">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"
    width="150%" height="100"> </v-btn>
  </template>
  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
    </v-dialog>
  </v-sheet>
    </v-col>

    <v-col order="6">
  <v-sheet>
    <v-dialog width="100%"
        height="200">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="Open Dialog"
    width="150%" height="100"> </v-btn>
  </template>
  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
    </v-dialog>
  </v-sheet>
    </v-col>

   </v-row>
</v-container>

</div>
<v-container>

<v-col cols="12" noglutters>
  <v-row >
<v-col cols="3">
  <v-card aling="center">
    <img height="280" src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg">
      <v-card-title class="text-capitalize">
      Pizza Hawaiian
      </v-card-title>
        <v-card-subtitle> $20 
        </v-card-subtitle>

<v-card-actions>
  <v-dialog >
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" text="Readmore"> </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            text="Close Dialog"
            @click="isActive.value = false">
            </v-btn>
          </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <v-spacer> </v-spacer>
  <v-btn class="bg-primary"> Add to Cart </v-btn>
</v-card-actions>
</v-card>
</v-col>


<v-col cols="3">
<v-card aling="center">
    <img height="280" src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg">
      <v-card-title class="text-capitalize">
      Pizza Hawaiian
      </v-card-title>
        <v-card-subtitle> $20 
        </v-card-subtitle>

<v-card-actions>
  <v-dialog >
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" text="Readmore"> </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            text="Close Dialog"
            @click="isActive.value = false">
            </v-btn>
          </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <v-spacer> </v-spacer>
  <v-btn class="bg-primary"> Add to Cart </v-btn>
</v-card-actions>
</v-card>
</v-col>


<v-col cols="3">
<v-card aling="center">
    <img height="280" src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg">
      <v-card-title class="text-capitalize">
      Pizza Hawaiian
      </v-card-title>
        <v-card-subtitle> $20 
        </v-card-subtitle>

<v-card-actions>
  <v-dialog >
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" text="Readmore"> </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            text="Close Dialog"
            @click="isActive.value = false">
            </v-btn>
          </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <v-spacer> </v-spacer>
  <v-btn class="bg-primary"> Add to Cart </v-btn>
</v-card-actions>
</v-card>
</v-col>

<v-col cols="3">
<v-card aling="right">
    <img height="280" src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg">
      <v-card-title class="text-capitalize">
      Pizza Hawaiian
      </v-card-title>
        <v-card-subtitle> $20 
        </v-card-subtitle>

<v-card-actions>
  <v-dialog >
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props" text="Readmore"> </v-btn>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            text="Close Dialog"
            @click="isActive.value = false">
            </v-btn>
          </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <v-spacer> </v-spacer>
  <v-btn class="bg-primary"> Add to Cart </v-btn>
</v-card-actions>
</v-card>
</v-col>

<v-spacer></v-spacer>
  </v-row>
</v-col>

</v-container>
</template>

<script >


export default {
    data () {
      return {
        // ใส่รูปภาพโปรโมชั่นตรงนี้
        items: [
          {
            src: 'https://cdn.1112.com/1112/public/images/products/pizza/Nov2023/732019_TH_CTA.jpg',
          },
          {
            src: 'https://img.salehere.co.th/p/1200x0/2023/03/01/ztghtgyncw3u.jpg',
          },
          {
            src: 'https://cms.dmpcdn.com/food/2022/06/14/9415a9c0-ebad-11ec-84e8-2b64ecfcbcf6_original.jpg',
          },
          {
            src: 'https://img.salehere.co.th/p/1200x0/2021/01/16/csxojbgbivem.jpg',
          },
          
        ],
      }
    }
}
  
</script>


<style lang="">

</style>