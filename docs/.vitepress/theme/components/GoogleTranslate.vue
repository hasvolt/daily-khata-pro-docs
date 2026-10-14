<template>
  <div class="google-translate-wrapper" :class="{ 'is-mobile': isMobile }">
    <div class="translate-icon-wrap" title="Translate page">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="translate-icon"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    </div>
    <div id="google_translate_element" class="google-translate-box"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  // Ensure we are in browser environment
  if (typeof window === 'undefined') return

  // Register Google Translate Init callback
  window.googleTranslateElementInit = function () {
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false
        },
        'google_translate_element'
      )
    }
  }

  // Inject Google Translate script if not already present
  if (!document.getElementById('google-translate-script')) {
    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.type = 'text/javascript'
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.head.appendChild(script)
  } else if (window.google && window.google.translate) {
    window.googleTranslateElementInit()
  }
})
</script>

<style scoped>
.google-translate-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 6px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: border-color 0.2s ease;
  margin-left: 8px;
  margin-right: 8px;
}

.google-translate-wrapper:hover {
  border-color: var(--vp-c-brand-1);
}

.translate-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}

.translate-icon {
  display: block;
}

.google-translate-box {
  display: flex;
  align-items: center;
}

.google-translate-wrapper.is-mobile {
  margin: 12px 0;
  width: 100%;
  justify-content: flex-start;
  padding: 8px 12px;
}
</style>
