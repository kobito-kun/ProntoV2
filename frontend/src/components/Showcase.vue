<template>
  <section class="flex justify-center flex-wrap items-center bg-blue-100 p-10">
    <each-showcase image="lock.png" title="Safe and Secure" description="Users across the world are encrypted with high level technologies to ensure the highest level of security." />
    <each-showcase image="Cards.png" title="Widely Accepted" description="With over 10+ payment methods that you can start using today, your worries of methods are gone." />
    <each-showcase image="Truck.png" title="Fast Delivery" description="With our high-end servers the delivery speed of your digital goods are measured up to miliseconds!" />
    <each-showcase image="Message.png" title="24/7 Support" description="Customer support 24/7 online to help you with whatever problem you're facing. Anytime, anyday immediantly" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EachShowcase from '@/components/EachShowcase.vue';

export default defineComponent({
  name: "Showcase",
  components: {
    EachShowcase
  }
})
</script>