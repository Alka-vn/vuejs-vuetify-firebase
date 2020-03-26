<template>
        <v-container>
            <v-row wrap
            class="mt-2">
                <v-col class="text-xs-center text-sm-right">
                    <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
                </v-col>
                <v-col class="text-sm-left text-xs-center">
                    <v-btn large router to="/meetups/new" class="info">Organize Meetups</v-btn>
                </v-col>
            </v-row>
            <v-row class="mt-2">
                <v-carousel style="cursor:pointer">
                    <v-carousel-item
                    v-for="(item,i) in meetups"
                    :key="i"
                    :src="item.imageUrl"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="onLoadMeetup(item.id)"
                    class='justify-center'
                    >
                    <v-container class="fill-height align-end justify-center">
                        <div class="title">
                            {{item.title}}
                        </div>    
                    </v-container>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
            <v-row wrap
            class="mt-2">
               <p>Join Our Meetups</p>
            </v-row>
        </v-container>  
</template>

<script>
export default {

    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        }
    },

    methods:{
        onLoadMeetup(id){
            this.$router.push('/meetups/'+id)
        }
    }
}
</script>
<style scoped>
.title{
    background-color: rgba(0, 0, 0, 0.3);
    margin: 38px;
    padding: 15px;
    color: white;
}
</style>