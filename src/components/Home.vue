<template>
        <v-container>
            <v-row wrap
            :justify="justify"
            class="mt-2">
                <v-col class="text-xs-center text-sm-right">
                    <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
                </v-col>
                <v-col class="text-sm-left text-xs-center">
                    <v-btn large router to="/meetups/new" class="info">Organize Meetups</v-btn>
                </v-col>
            </v-row>
            <v-row class="mt-2">
                <v-carousel>
                    <v-carousel-item
                    v-for="(item,i) in meetups"
                    :key="i"
                    :src="item.imageUrl"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    >
                    <div class="title">
                        {{item.title}}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
            <v-row wrap
            :justify="justify"
            class="mt-2">
               <p>Join Our Meetups</p>
            </v-row>
        </v-container>  
</template>

<script>
export default {
    data () {
        return{
            justify: 'center',
            meetups: [
                {
                    imageUrl:'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id:'aefkjhigashdjoi',
                    title:'Meetup in NewYork' 
                },
                {
                    imageUrl:'https://static.toiimg.com/photo/48201473/.jpg',
                    id:'aefkjhigashdjoi',
                    title:'Bakers Meetup' 
                }
            ]
        }
    }
}
</script>

<style scoped>
.title{
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    padding: 20px;
    justify-content: center;
        
}
</style>