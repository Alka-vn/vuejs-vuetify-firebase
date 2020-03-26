<template>
    <v-container>
        <v-row >
            <v-col cols=12>
                <div class="d-flex flex-column justify-start">
                <v-card>
                    <v-card-title>
                        <h6 class="primary --text">{{meetup.title}} </h6>
                    </v-card-title>
                    <v-img :src="meetup.imageUrl"></v-img>
                    <v-card-text>
                        <div>
                            <p>{{meetup.date}} - where it takes place</p>
                        </div>
                        <div>
                            New York City (NYC), often called the City of New York or simply New York (NY), is the most populous city in the United States. With an estimated 2018 ..
                        </div>
                    </v-card-text>
                    <v-card-action >
                            <v-btn block class="primary">
                            Register
                        </v-btn>
                    </v-card-action>
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
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>