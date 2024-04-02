<script lang="ts">
import { computed, defineComponent } from 'vue'
import { getZLinkProps, nuxtLinkProps, zLinkProps } from './link.utils'
import type { FunctionalComponent, PropType } from 'vue'

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
      default: false,
    },
    loadingClass: {
      type: String,
      default: ''
    },
    appendClass: {
      type: String,
      default: ''
    },
    prependClass: {
      type: String,
      default: ''
    },
    loadingIcon: {
      type: Object as PropType<FunctionalComponent>,
      default: undefined,
    },
    prependIcon: {
      type: Object as PropType<FunctionalComponent>,
      default: undefined
    },
    appendIcon: {
      type: Object as PropType<FunctionalComponent>,
      default: undefined
    },
    icon: {
      type: Object as PropType<FunctionalComponent>,
      default: undefined,
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: () => ''
    },
  },

  setup (props, { slots }) {
    const linkProps = computed(() => getZLinkProps(props))

    const isLeading = computed(() => {
      return (props.icon && props.prepend) || (props.icon && !props.append) || (props.loading && !props.append) || props.prependIcon
    })

    const isTrailing = computed(() => {
      return (props.icon && props.append) || (props.loading && props.append) || props.appendIcon
    })

    const prependIconComponent = computed(() => {
      if (props.loading) {
        return props.loadingIcon
      }

      return props.prependIcon || props.icon
    })

    const appendIconComponent = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon
      }

      return props.appendIcon || props.icon
    })

    return {
      linkProps,
      isLeading,
      isTrailing,
      prependIconComponent,
      appendIconComponent,
    }
  },
})
</script>

<template>
  <ZLink :type="type" :disabled="disabled || loading" v-bind="{ ...linkProps, ...$attrs }" :class="class">
    <slot name="prepend" :disabled="disabled" :loading="loading">
      <component :is="prependIconComponent" v-if="isLeading && prependIconComponent" :class="[prependClass, loading && loadingClass ? loadingClass : '']" aria-hidden="true" />
    </slot>

    <component v-if="loading && icon && !isLeading && !isTrailing" :is="icon" aria-hidden="true" :class="loading && loadingClass ? loadingClass : ''" />
    <slot v-else truncate-class="TODO-truncate-impl">
      <span v-if="label" :class="{ 'TODO-truncate-impl': truncate }">
        {{ label }}
      </span>
    </slot>

    <slot name="append" :disabled="disabled" :loading="loading">
      <component :is="appendIconComponent" v-if="isTrailing && appendIconComponent" :class="[appendClass, loading && loadingClass ? loadingClass : '']" aria-hidden="true"  />
    </slot>
  </ZLink>
</template>
