<script lang="ts">
export default {
  setup (_, { slots }) {
    const hasOneRoot = (slot: ArrayLike<any>) => Array.isArray(slot) && slot.length === 1
    const datesSlot = slots.dates?.() ?? []
    const titleSlot = slots.title?.() ?? []
    const logoSlot = slots.logo?.() ?? []
    const summarySlot = slots.summary?.() ?? []
    return () => (
      h('div', {
        class: 'md:grid md:grid-cols-3 md:gap-3 print:grid print:grid-cols-3 print:gap-3 print:break-inside-avoid',
      }, [
        ...(hasOneRoot(datesSlot) ? datesSlot : [h('div', datesSlot)]),
        ...(
          hasOneRoot(titleSlot)
            ? [h(titleSlot[0], { class: 'md:col-span-2 print:col-span-2' })]
            : [h('div', { class: 'md:col-span-2 print:col-span-2' }, titleSlot)]
        ),
        h('div', logoSlot),
        ...(
          hasOneRoot(summarySlot)
            ? [h(summarySlot[0], { class: 'md:col-span-2 print:col-span-2' })]
            : [h('div', { class: 'md:col-span-2 print:col-span-2' }, summarySlot)]
        ),
      ])
    )
  },
}
</script>
