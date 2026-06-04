<template>
  <div>
    <Header />
    <Navbar />
    <HeroBanner />
    <Features />

    <section class="container">
      <div class="section-header">
        <h2>Categorias Populares</h2>
        <a href="#">Ver Todas</a>
      </div>

      <div class="categories-grid">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import HeroBanner from '../components/HeroBanner.vue'
import Features from '../components/Features.vue'
import CategoryCard from '../components/CategoryCard.vue'

import { categories } from '../data/categories'
</script>