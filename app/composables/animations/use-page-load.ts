import gsap from 'gsap'

export function pageLoadGSAP(target: gsap.DOMTarget, onComplete?: () => void) {
  if (!target) {
    return { cleanup: () => {} }
  }
  const context = gsap.context(() => {
    const timeline = gsap.timeline()
    timeline.fromTo(
      target,
      { y: 15, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out', onComplete },
      0.5,
    )
  })
  return {
    cleanup: () => context.revert(),
  }
}
