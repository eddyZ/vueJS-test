<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Caaaaaaake!!</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a cake page</p>
        <ul>
          <li v-for="cake in cakes">
            {{ cake.name }}
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
        cakes: [
          { name: 'cheese cake', price: 2 , chocolate: false },
          { name: 'lemon tarte', price: 3, chocolate: true },
          { name: 'chocolate cake', price:2, chocolate: true }
        ]
      }
    }
}
</script>
