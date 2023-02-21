<template>
  <svg xmlns="http://www.w3.org/2000/svg" :fill=iconObject?.styles?.fill :stroke-linecap=iconObject?.styles?.strokeLineCap
  :clip-rule=iconObject?.styles?.clipRule
  :fill-rule=iconObject?.styles?.fillRule
  :stroke-linejoin=iconObject?.styles?.strokeLineJoin viewBox="0 0 24 24" :width="width" :height="height" class="stroke-current text-black h-28 sm:m-auto">
    <path :d=iconObject?.path />
  </svg> 
</template>

<script>
import getIcon from '@/assets/icon.ts';
import { toRefs } from '@vue/reactivity';
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
    },
    width: {
      type: Number,
      default: 112,
    },
    height: {
      type: Number,
      default: 112,
    },
  },
  setup(props) {
    const { icon } = toRefs(props);
    const iconObject = getIcon(icon?.value);

    return {
      iconObject,
    }
  }
}
</script>