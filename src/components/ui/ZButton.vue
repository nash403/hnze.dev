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
    leadingIcon: {
      type: Object as PropType<FunctionalComponent>,
      default: undefined
    },
    trailingIcon: {
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
      return (props.icon && props.prepend) || (props.icon && !props.append) || (props.loading && !props.append) || props.leadingIcon
    })

    const isTrailing = computed(() => {
      return (props.icon && props.append) || (props.loading && props.append) || props.trailingIcon
    })

    const leadingIconComponent = computed(() => {
      if (props.loading) {
        return props.loadingIcon
      }

      return props.leadingIcon || props.icon
    })

    const trailingIconComponent = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon
      }

      return props.trailingIcon || props.icon
    })

    return {
      linkProps,
      isLeading,
      isTrailing,
      leadingIconComponent,
      trailingIconComponent
    }
  },
})
</script>

<template>
  <ZLink :type="type" :disabled="disabled || loading" v-bind="{ ...linkProps, ...$attrs }" :class="class">
    <slot name="prepend" :disabled="disabled" :loading="loading">
      <component :is="leadingIconComponent" v-if="isLeading && leadingIconComponent" :class="[prependClass, loading && loadingClass ? loadingClass : '']" aria-hidden="true" />
    </slot>

    <slot truncate-class="TODO-truncate-impl">
      <component v-if="loading && icon && !isLeading && !isTrailing" :is="icon" aria-hidden="true" :class="loading && loadingClass ? loadingClass : ''" />
      <span v-else-if="label" :class="{ 'TODO-truncate-impl': truncate }">
        {{ label }}
      </span>
    </slot>

    <slot name="append" :disabled="disabled" :loading="loading">
      <component :is="trailingIconComponent" v-if="isTrailing && trailingIconComponent" :class="[appendClass, loading && loadingClass ? loadingClass : '']" aria-hidden="true"  />
    </slot>
  </ZLink>
</template>
