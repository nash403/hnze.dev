<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'
import { getZLinkProps, nuxtLinkProps, zLinkProps } from './link.utils'

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    ...zLinkProps,
    loading: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    prepend: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: () => ''
    },
  },

  setup (props, { slots }) {
    const linkProps = computed(() => getZLinkProps(props))

    return {
      linkProps,
    }
  },
})
</script>

<template>
  <ZLink :type="type" :disabled="disabled || loading" v-bind="{ ...linkProps, ...$attrs }" :class="class">
    <slot name="prepand" :disabled="disabled" :loading="loading">
    </slot>

    <slot>
    </slot>

    <slot name="append" :disabled="disabled" :loading="loading">
    </slot>
  </ZLink>
</template>
~/components/ui/link/link
