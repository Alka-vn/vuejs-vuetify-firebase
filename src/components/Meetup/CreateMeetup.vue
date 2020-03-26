<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" offset-sm="3">
                <h4 class="primary--text">Create New Meetup</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <form @submit.prevent="onCreateMeetup">
                    <v-row>
                        <v-col cols="12" sm="6" offset-sm="3">
                            <v-text-field name="title"
                            label="Title"
                            id="title"
                            v-model="title"
                            :rules="rules">
                            </v-text-field>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col cols="12" sm="6" offset-sm="3">
                            <v-text-field name="location"
                            label="Location"
                            id="location"
                            v-model="location"
                            :rules="rules">
                            </v-text-field>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col cols="12" sm="6" offset-sm="3">
                            <v-text-field name="imageUrl"
                            label="Image Url"
                            id="image-url"
                            v-model="imageUrl"
                            :rules="rules">
                            </v-text-field>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col cols="12" sm="6" offset-sm="3">
                            <v-img :src="imageUrl"></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" offset-sm="3">
                            <h4>Choose Date and Time</h4>
                        </v-col>
                    </v-row>
                     <v-row >
                        <v-col cols="12" sm="6" offset-sm="3">
                        <v-date-picker v-model="date"></v-date-picker>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col cols="12" sm="6" offset-sm="3">
                        <v-time-picker v-model="time"></v-time-picker>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col cols="12" sm="6" offset-sm="3">
                            <v-textarea name="description"
                            label="Description"
                            id="description"
                            :rules="rules"
                            v-model="description">
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols=12 sm="6" offset-sm="3">
                            <v-btn class="primary" :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
                        </v-col>
                    </v-row>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data (){
        return {
            rules: [
            value => !!value || 'Required.'
        ],
            title: '',
            location: '',
            imageUrl: '',
            description: '',
            date : '',
            time: new Date()

        }
    },
    computed: {
        formIsValid() {
            return this.title !== '' &&
            this.location !== ''&&
            this.imageUrl !== ''&&
            this.description !== ''

        },
        submittableDateTime () {
            const date = new Date(this.date)
            if (typeof this.time === 'string'){
                const hours = this.time.match(/^(\d+)/)[1]
                const minutes = this.time.match(/:(\d+)/)[1]
                date.setHours(hours)
                date.setMinutes(minutes)
            }
            else {
                date.setHours(this.time.getHours())
                date.setMinutes(this.time.getMinutes())
            }
            console.log(date)
            return date
        }
    },
    methods: {
        onCreateMeetup() {
            if (!this.formIsValid) {
                return
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                description: this.description,
                date : this.submittableDateTime
                
            }
            this.$store.dispatch('createMeetup',meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>

<style>

</style>