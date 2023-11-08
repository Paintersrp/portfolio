<script lang="ts">
  import Navigator from './Navigator.svelte';

  export let pathname: string;
</script>

{#if pathname === '/'}
  <Navigator position="bottom" link="/projects" />
{/if}

{#if pathname === '/projects'}
  <Navigator position="top" link="/" />
  <Navigator position="bottom" link="/third" />
{/if}

{#if pathname === '/third'}
  <Navigator position="top" link="/projects" />
{/if}
