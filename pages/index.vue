<script setup lang="ts">
const code = $ref("\nconsole.log('TypeScript Editor')\n")
</script>

<template>
  <div>
    <MonacoEditor
      v-model="code"
      lang="typescript"
      :options="{ theme: 'vs-dark' }"
      class="min-h-100vh"
    />
  </div>
</template>
