<script lang="ts">
  export let id: string;
</script>

<section
  {id}
  class=" text-gray-50 h-screen flex flex-col justify-around max-w-[1400px] mx-auto py-[70px] px-12 sm:py-[120px] md:px-[70px] lg:px-24"
>
  <slot />
</section>
