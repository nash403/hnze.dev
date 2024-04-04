<script lang="ts">
import { defineComponent, resolveComponent } from 'vue'
import { nuxtLinkProps, aLinkProps } from '~/utils/components/ui/link'

export default defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    ...aLinkProps,
  },
  setup (props) {
    function resolveLinkClass (route: any, $route: any, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }) {
      const isEqual = (a1: any, a2: any) => JSON.stringify(a1) === JSON.stringify(a2) // not fail proof
      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass
      }

      if (props.exact && isExactActive) {
        return props.activeClass
      }

      if (!props.exact && isActive) {
        return props.activeClass
      }

      return props.inactiveClass
    }

    const linkComponent = props.nuxt ? resolveComponent('nuxt-link') : resolveComponent('router-link')

    return {
      resolveLinkClass,
      linkComponent,
    }
  },
})
</script>

<template>
  <component
    :is="as"
    v-if="!to"
    key="tag"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
    :class="active ? activeClass : inactiveClass"
  >
    <slot v-bind="{ isActive: active }" :class="{ 'TODO-truncate-impl': !label && truncate }">
      <span v-if="label" :class="{ 'TODO-truncate-impl': truncate }">
        {{ label }}
      </span>
    </slot>
  </component>
  <component
    :is="linkComponent"
    v-else
    key="router"
    v-slot="{ route, href, target, rel, navigate, isActive, isExactActive, isExternal }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="!disabled ? href : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :role="disabled ? 'link' : undefined"
      :rel="rel"
      :target="target"
      :class="active !== undefined ? (active ? activeClass : inactiveClass) : resolveLinkClass(route, $route, { isActive: isActive, isExactActive: isExactActive })"
      @click="(e) => (!isExternal && !disabled) && navigate(e)"
    >
      <slot v-bind="{ isActive: active !== undefined ? active : (exact ? isExactActive : isActive), class: 'TODO-truncate-impl' }">
        <span v-if="label" :class="{ 'TODO-truncate-impl': truncate }">
          {{ label }}
        </span>
      </slot>
    </a>
  </component>
</template>
