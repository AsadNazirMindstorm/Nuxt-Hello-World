<template>
    <v-container>
        <v-form @submit.prevent="handleSubmit" class="w-[50%] mx-auto">
            <v-col>

                <v-text-field v-model="firstName" label="First Name" required></v-text-field>


                <v-text-field v-model="lastName" label="Last Name" required></v-text-field>

                <v-btn type="submit" color="primary">Submit</v-btn>
            </v-col>

        </v-form>
        <!-- <v-alert v-if="submittedData" type="success" class="mt-4">
            Form submitted successfully!<br>
            <strong>First Name:</strong> {{ submittedData.firstName }}<br>
            <strong>Last Name:</strong> {{ submittedData.lastName }}
        </v-alert> -->
    </v-container>
</template>

<script>

import db from '~/db/db';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            submittedData: null,
        };
    },
    methods: {
        async handleSubmit() {

            alert("First name is : " + this.firstName);
            const res = await $fetch('/api/addUser', {
                method: 'POST',
                query: {
                    'firstName': this.firstName,
                    'lastName': this.lastName
                }
            })

            if (res.id != 0) {
                alert("user entered successfully")
            }
            // Optionally, handle form submission, e.g., send data to an API
        }
    }
};
</script>

<style scoped>
/* Add any additional styling here */
</style>