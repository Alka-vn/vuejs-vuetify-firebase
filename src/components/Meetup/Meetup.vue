<template>
    <v-container>
        <v-row >
            <v-col cols=12>
                <div class="d-flex flex-column justify-start">
                <v-card>
                    <v-card-title>
                        <h6>{{meetup.title}} </h6>
                    </v-card-title>
                    <v-img :src="meetup.imageUrl"></v-img>
                    <v-card-text>
                        <div>
                         <p>{{meetup.date | date}} - {{meetup.location}} </p>
                        </div>
                        <div>
                            {{meetup.description}}
                        </div>
                    </v-card-text>
                    <v-card-actions>
                            <v-btn block class="primary">
                            Register
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            </v-col>
            
        </v-row>
    </v-container>
</template>


<script>
export default {

    props: ['id'],

    computed: {
        meetup () {
            console.log(this.id) 
             return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>