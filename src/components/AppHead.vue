<template>
  <div></div>
</template>

<script>
import { toRefs } from 'vue';
import { useMeta } from 'vue-meta';

export default {
  props: { 
    meta:{ 
      type: Object,
    },
  },
  setup(props) {
    const { meta } = toRefs(props);
    useMeta({
      title: 'Personal Portfolio',
      meta: [
        { property: 'og:description', content: 'A personal portfolio that showcases my skill and personal information' },
        { property: 'og:image', content: meta.value.image },
        { property: 'og:url', content: meta.value.url },
        { property: 'og:type', content: 'website' },
        { property: 'og:author', content: meta.value.fullName },
        { property: 'og:keywords', content: 'personal, portfolio, Data Analyst' },
      ],
    });
  },
};
</script>
