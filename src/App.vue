<template>
  <v-app>

    
    <v-main>
      <v-app-bar
      color="cyan"
      class="AppBarcolor">
        <v-menu transition="slide-x-transition">
          <template v-slot:activator="{props}"
          class="vListColor">
          <v-app-bar-nav-icon
            color="cyan-darken-4"
            v-bind="props" 
            height="70"
            width="120"
            >
          </v-app-bar-nav-icon>
          </template>
          <v-list class="vListColor">
            <v-col  class="vListColor">
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            width="250"
            height="100"
            variant="outlined"
            density="default"
            color="grey"
            size="large"
            class="vListColor">
            
            <v-list-item-title
            class="vListColor"><div class="vListColor">{{ item.title }}</div></v-list-item-title>


            </v-list-item>
          </v-col>
          </v-list>
        </v-menu>


        <v-content></v-content>

        <div >
          <span> <img style="height: 50px; width: 50px;" src="https://cdn-icons-png.flaticon.com/512/2981/2981011.png"/></span> &nbsp;&nbsp; </div>
        
        
        <h1> Neanea Shop</h1>
        
        
        <v-spacer></v-spacer>

        <v-btn 
        variant="tonal"
        color="white" @click="$router.push('/login')">
         Log In
        </v-btn>
      </v-app-bar>
    
      <router-view/>
      
    </v-main>


  </v-app>
</template>

<script>
import colors from 'vuetify/util/colors'

export default {
  name: 'App',

  data: () => ({
    items: [
      {title: 'Our Product'},
      {title: 'On sale Items'},
      {title: 'Account setting'},
      {title: 'Contact Us'},
    ]
  }),
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500&display=swap');
.vListColor {
  background: #80DEEA;
  font-family: 'Nunito', sans-serif;
  font-size: 24px;
  
}
.AppBarcolor {
background-color: #00838F;;
font-family: 'Nunito', sans-serif;
font-size: 100%;


}

</style>
