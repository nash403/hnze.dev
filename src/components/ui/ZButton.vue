<script lang="ts">
import { getZLinkProps, nuxtLinkProps, zLinkProps } from '~/lib/utils/link'

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
