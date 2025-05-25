<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="width" :height="height" class="stroke-current text-black sm:m-auto">
    <path v-for="(iconFromAsset, index) in iconFromAssets" :key="index" :d=iconFromAsset?.d :fill=iconFromAsset?.fill :stroke-linecap=iconFromAsset?.strokeLineCap
    :clip-rule=iconFromAsset?.clipRule
    :fill-rule=iconFromAsset?.fillRule
    :stroke-linejoin=iconFromAsset?.strokeLineJoin />
  </svg> 
</template>

<script>
import getIcon from '../../assets/icon.ts';
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
    const iconFromAssets = getIcon(icon?.value);

    return {
      iconFromAssets,
    }
  }
}
</script>