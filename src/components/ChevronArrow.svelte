<script lang="ts">
  export let point: 'up' | 'down' = 'down';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  class={`w-10 h-10 accent-color-hover ${point === 'up' ? 'rotate-180' : ''}`}
>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg>
