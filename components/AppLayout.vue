<script setup lang="ts">
const { lettera } = useAppConfig()
</script>

<template>
  <div>
    <header>{{ lettera?.title || 'My project' }}</header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
body {
  font-family: $dt('font.primary');
  margin: 0;
}

header {
  height: $dt('header.height');
  background: $dt('color.grey');
  display: flex;
  align-items: center;
  padding: 0 20px;
}

main {
  padding: 20px;
}
</style>
