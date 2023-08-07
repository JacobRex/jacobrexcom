<template>
  <PortfolioProject v-bind="project" />
</template>

<script setup>
const route = useRoute();
const project = portfolio.find(project => project.id === route.params.project)
</script>