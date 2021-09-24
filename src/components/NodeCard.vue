<template>
  <div class="node-card card">
    <router-link
      :to="`/pokemons/${node.name}`"
      class="node-card__image card-image">
      <img 
        v-if="node.sprites"
        :src="node.sprites.front_default" 
        width="96px" 
        height="96px">
    </router-link >
    <div class="node-card__content card-content">
      <div class="node-card__title">{{node.name}}</div>
      <span class="node-card__price new badge red" data-badge-caption="$">{{ node.price }}</span>
      <button 
        @click="addToCart(node)"
        class="node-card__add-to-cart btn">
        <i class="material-icons left">
          shopping_cart
        </i>
        Add
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NodeCard',
  props: ['node'],
  methods: {
    ...mapMutations({
      addToCart: `cart/add_to_cart`   
    })
  }
}
</script>

<style lang="scss" scoped>
  .node-card {
    display: block;
    transition: transform .2s ease-in-out;
    color: rgba(0, 0, 0, 0.87);

    &:hover {
      transform: scale(1.05);

      .node-card__add-to-cart {
        display: block;
      }
    }

    &:active {
      transform: scale(.9);
    }

    &__image {
      display: block;
      background-image: url(../assets/card-image-transparent.png);

      & img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    &__content {
      padding: .25rem 1rem !important;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.87);
    }

    &__title {

    }

    &__price {
      position: absolute;
      top: .25rem;
      right: .25rem;
    }

    &__add-to-cart {
      position: absolute;
      bottom: 32px;
      right: .25rem;
      left: .25rem;
      width: 95%;
      display: none;
    }
  }
</style>