<script setup lang="ts">
import IconLogo from '~icons/hnze/logo'
import IconWarning from '~icons/hnze/warning'
</script>

<template>
  <div class="text-center p-12 h-full space-y-20">
    <div>
      <IconLogo class="text-[13rem] mx-auto transition-all duration-[0.3s] " />
    </div>
    <p class="transition-all duration-[0.3s] bg-[color:var(--color-secondary)] text-[color:var(--bg-secondary)] p-[15px] rounded-[5px] inline-flex items-center">
      <IconWarning class="mr-3" /> {{ $t('app.warning_site_under_construction') }}
    </p>
    <div>
      <ColorModePicker />
    </div>
  </div>
</template>
