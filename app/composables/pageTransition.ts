export function usePageTransition() {
  const isPageTransitionDisabled = useState(() => false)
  return {
    isPageTransitionDisabled,
  }
}
