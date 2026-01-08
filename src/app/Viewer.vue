<template>
  <div ref="element" class="container" />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModelStore } from "@/stores/model-store/modelStore.ts";

// @ts-ignore
const { element } = storeToRefs(useModelStore())
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>