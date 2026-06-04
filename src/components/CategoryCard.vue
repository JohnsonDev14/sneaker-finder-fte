<template>
  <div class="category-card">

    <img
      :src="category.image"
      :alt="category.name"
    >

    <h3>{{ category.name }}</h3>

    <small>
      Ver modelos
    </small>

  </div>
</template>

<script setup>
defineProps({
  category: Object
})
</script>