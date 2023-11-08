<script lang="ts">
  export let onClick: () => void;
  export let link: string;
  export let linkText: string;
</script>

<a
  on:click={onClick}
  href={link}
  class="text-5xl md:text-6xl font-bold accent-color hover:text-amber-300 text-center leading-tight mb-4 hover:underline"
  >{linkText}</a
>
