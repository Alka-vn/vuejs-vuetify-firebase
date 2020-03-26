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
            description: ''

        }
    },
    computed: {
        formIsValid() {
            return this.title !== '' &&
            this.location !== ''&&
            this.imageUrl !== ''&&
            this.description !== ''

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
                date : new Date()
            }
            this.$store.dispatch('createMeetup',meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>

<style>

</style>