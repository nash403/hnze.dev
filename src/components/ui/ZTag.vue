<script lang="ts">
import type { FunctionalComponent, PropType } from 'vue'
import ZLink from './ZLink.vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: Object as PropType<FunctionalComponent>,
      required: false,
      default: undefined,
    },
    link: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
  render () {
    const enclosingTag = this.link ? ZLink : 'span'
    const enclosingAdditionalAttrs = this.link ? { to: this.link, target: '_blank' } : {}

    return (
      h(enclosingTag as any, {
        class: 'py-1 px-2 inline-flex items-center font-medium',
        ...enclosingAdditionalAttrs,
      }, [
        ...(this.icon ? [h(this.icon, { class: 'mr-1' })] : []),
        this.label,
      ])
    )
  },
})
</script>
