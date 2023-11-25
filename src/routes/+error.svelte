<script>
  import { page } from '$app/stores';
  import { FullSection } from '$comp';
  import SubSection from '$comp/SubSection.svelte';
</script>

<FullSection id="error">
  <SubSection id="error-msg" heading={'Error'}>
    <pre class="whitespace-pre-wrap accent-color tracking-wide">
        {JSON.stringify($page, undefined, 2)}
    </pre>
  </SubSection>
</FullSection>
