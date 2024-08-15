<template>
  <v-container>
    <!-- Vuetify Table -->
    <v-data-table :items="userList" item-key="id" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Users</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn color="blue">Edit</v-btn>
        <v-btn color="red">Delete</v-btn>
      </template>
    </v-data-table>

    <!-- Dialog for Add/Edit -->
    <!-- <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogType === 'add' ? 'Add User' : 'Edit User' }}</span>
        </v-card-title>
        <v-card-subtitle>
          <v-form>
            <v-text-field v-model="form.firstName" label="First Name" required></v-text-field>
            <v-text-field v-model="form.lastName" label="Last Name" required></v-text-field>
          </v-form>
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue">Save</v-btn>
          <v-btn color="grey">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script setup lang="ts">
import type { NewUserSchema } from '~/schemas/NewUserSchema';

const res: any = await $fetch('/api/allUsers');
// const headers = {"First Name", "Last Name", "Action"};
const userList: NewUserSchema[] = res.response;
</script>
