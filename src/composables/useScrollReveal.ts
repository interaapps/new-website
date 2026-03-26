import { nextTick, onBeforeUnmount, onMounted, type Ref } from 'vue'
import { gsap } from '@/lib/gsap'

type RevealOptions = {
  selector?: string
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

export function useScrollReveal(scope: Ref<HTMLElement | null>, options: RevealOptions = {}) {
  let ctx: gsap.Context | null = null

  const {
    selector = '.js-reveal',
    y = 32,
    duration = 1,
    stagger = 0.12,
    start = 'top 82%',
  } = options

  onMounted(async () => {
    await nextTick()

    const root = scope.value
    if (!root) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(root.querySelectorAll(selector), { clearProps: 'all', autoAlpha: 1 })
      return
    }

    ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(selector)

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            y,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration,
            delay: index * stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start,
              once: true,
            },
          },
        )
      })
    }, root)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}
