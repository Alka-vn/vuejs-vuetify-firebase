<template>
    <v-container>
            <v-row>
                <v-col cols='12'>
                    <v-card class="info"> 
                    <div class="d-flex">
                        <v-avatar
                        class = "ma-3"
                        size="125"
                        tile
                        >
                        <v-img :src="pic"></v-img>
                        </v-avatar>
                        <v-container>
                            <v-row>
                                <div >
                                <v-card-title
                                class="headline white--text"
                                v-text="title"
                                >
                                </v-card-title>
                                <v-card-subtitle v-text="details"></v-card-subtitle>
                                </div>
                            </v-row>
                            <v-row>
                                <v-card-action>
                                <v-btn text>
                                    View Meetup
                                </v-btn>
                            </v-card-action>
                            </v-row>
                        </v-container>
                    </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
export default {
    data () {
        return {
            pic:'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            title:'Meetup at Newyork',
            details:'Date:12 december 2020'
        }
    }
}
</script>

<style>

</style>