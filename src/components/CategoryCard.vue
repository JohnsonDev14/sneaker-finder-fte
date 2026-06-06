<template>
  <RouterLink
    :to="`/modelo/${category.id}`"
    class="category-card"
  >
    <img
      :src="category.image"
      :alt="category.name"
    >

    <h3>{{ category.name }}</h3>

    <small>
      Ver modelos
    </small>
  </RouterLink>
</template>

<script setup>
defineProps({
  category: Object
})
</script>

<style scoped>
.category-card{
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
</style>