<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Pets</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is an animal's page</p>
        <ul>
        <li v-for="animal in animals">
               {{animal.name}}
        </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
data () {
      return {
        animals: [
          { name: 'dog', size: 40 },
          { name: 'cat', size: 20 },
          { name: 'dolphin', size: 200 }
        ]
      }
    }}
</script>
