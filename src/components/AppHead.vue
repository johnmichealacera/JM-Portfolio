<template>
  <metainfo v-if="isClient" />
</template>

<script>
import { toRefs, onBeforeMount, computed } from 'vue';
import { useMeta } from 'vue-meta';

export default {
  props: { 
    meta: { 
      type: Object,
    },
  },
  setup(props) {
    const { meta } = toRefs(props);
    // const ssrContext = useSSRContext();
    const isClient = computed(() => typeof window !== 'undefined');

    // console.log('ssrContext', ssrContext);

    // On client-side, use the useMeta function to handle meta tags
    if (isClient.value) {
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
    }

    // On server-side, populate meta tags using the ssrContext
    // onBeforeMount(() => {
    //   if (!isClient.value) {
    //     const { meta: serverMeta } = ssrContext || {};
    //     if (serverMeta) {
    //       serverMeta.title = 'Personal Portfolio';
    //       serverMeta.meta = [
    //         { property: 'og:description', content: 'A personal portfolio that showcases my skill and personal information' },
    //         { property: 'og:image', content: meta.value.image },
    //         { property: 'og:url', content: meta.value.url },
    //         { property: 'og:type', content: 'website' },
    //         { property: 'og:author', content: meta.value.fullName },
    //         { property: 'og:keywords', content: 'personal, portfolio, Data Analyst' },
    //       ];
    //     }
    //   }
    // });

    return {
      isClient,
    };
  },
};
</script>
