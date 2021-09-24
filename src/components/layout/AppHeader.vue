<template>
  <div class="navbar-fixed">
    <nav class="black darken-4">
      <div class="nav-wrapper">
        <div class="container">
          <router-link to="/" class="brand-logo"><span class="yellow-text text-darken-2">Poke</span> Cloud</router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/pokemons">Pokemons</router-link></li>
            <li><a href="#">About</a></li>
            <li>
              <header-cart />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import HeaderCart from '@/components/HeaderCart/index'
export default {
  name: 'AppHeader',
  components: {
    HeaderCart
  }
}
</script>