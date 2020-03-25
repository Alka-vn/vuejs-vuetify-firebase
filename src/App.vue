<template>
  <v-app>
     <v-navigation-drawer 
  v-model="sideNav"
   absolute temporary color="#9575CD">
   <v-list>
     <v-list-item link 
     v-for="item in menuItems" 
     :key="item.title"
     :to="item.link">
       <v-list-item-icon>
       <v-icon>{{ item.icon}}</v-icon>
     </v-list-item-icon>
     <v-list-item-content>{{item.title}}</v-list-item-content>
     </v-list-item>
     
   </v-list>
  </v-navigation-drawer>
  <div>
     <v-app-bar class="primary" dense dark>
      <v-app-bar-nav-icon 
      @click="sideNav=!sideNav"
      class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title absolute>
        <router-link to="/" tag="span" style="cursor:pointer">Meet Up</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text 
        v-for="item in menuItems" 
        :key="item.title" 
        :to="item.link">
          <v-icon>{{item.icon}}</v-icon>{{item.title}}
        </v-btn>
      </v-toolbar-items>
      </v-app-bar>
  </div>
  <main>
    <router-view></router-view>
  </main>
  </v-app>
  
</template>

<script>

export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    sideNav:false,
    menuItems:[
      { icon: 'mdi-account-multiple',title: 'View Meetups', link: '/meetups'},
      { icon: 'mdi-calendar',title: 'Organize meetups', link: '/meetups/new'},
      { icon: 'mdi-account-circle',title: 'Profile', link: '/profile'},
      { icon: 'mdi-account',title: 'Sign Up', link: 'signup'},
      { icon: 'mdi-lock-reset',title: 'Sign In', link:'signin'}
    ]
  }),
};
</script>
