<script lang="ts">
  export let id: string;
  export let heading: string;
</script>

<section
  {id}
  class="w-full block justify-center text-white px-9 py-12 2xl:px-44 xl:px-24 xl:py-24 lg:py-12 lg:px-12 md:flex"
>
  <div
    class="flex-shrink-0 uppercase text-left md:text-right w-auto md:w-[150px] lg:w-[200px] xl:w-[200px] xl:mr-[70px] mr-[50px] font-bold tracking-widest accent-color"
  >
    {heading}
  </div>
  <div
    class="font-light text-base max-w-[650px] w-full pt-7 sm:pt-7 md:pt-0 pl-7 sm:pl-7 md:pl-12 lg:pl-0"
  >
    <slot />
  </div>
</section>
