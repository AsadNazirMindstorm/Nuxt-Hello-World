<template>
  <v-sheet class="bg-deep-purple h-[100vh]" rounded>
    <v-card class="mx-auto h-[60%] w-[40%] py-10 px-10 flex justify-center items-center">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field v-model="email" type="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email"
          clearable></v-text-field>


        <v-text-field v-model="password" :readonly="loading" :rules="[required]" label="Password"
          placeholder="Enter your password" clearable></v-text-field>

        <br>

        <v-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit" variant="elevated" block>
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">

export default {
  setup() {
    const form = ref(false);
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const router = useRouter(); // Access the router instance

    const onSubmit = () => {
      if (!form.value) return;

      loading.value = true;

      setTimeout(() => {
        loading.value = false;
        alert("Your email is " + email.value);
        router.push('/dashboard/'); // Navigate to the next page
      }, 0); // Simulated delay
    };

    const required = (v: any) => !!v || 'Field is required';

    return {
      form,
      email,
      password,
      loading,
      onSubmit,
      required,
    };
  },
};
</script>