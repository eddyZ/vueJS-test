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
            {{ cake.name }}, pieces left: {{cake.pieces}} <v-btn dark v-on:click="eatCake(cake)">Eat</v-btn>
          </li>
        </ul>
        <p>There are {{availablePiecesOfCake}} pieces of cake left.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        cakes: [
          { name: 'cheese cake', pieces: 2 , chocolate: false },
          { name: 'lemon tarte', pieces: 3, chocolate: true },
          { name: 'chocolate cake', pieces:20, chocolate: true }
        ]
      }
    },
    methods: {
      eatCake (cake){
        if(cake.pieces > 0)
          cake.pieces --;
      }
    },
    computed: {
      availablePiecesOfCake(){
        let total = 0;
        this.cakes.forEach(function(cake){
          total += cake.pieces;
        });
        return total;
      }
    },
    watch: {
      availablePiecesOfCake (nrOfPieces) {
        if(nrOfPieces < 6)
          alert("Ohh, only little cake left!")
      }
    }
}
</script>
