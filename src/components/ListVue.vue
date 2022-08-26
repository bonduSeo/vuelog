<template>
  <div v-for="(item, i) in blogContents" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{ item.title }}</h5>
    <p>{{ item.date }}</p>
  </div>
</template>
<script>
export default {
  name: "listVue",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
  props: {
    blogContents: Array,
  },
};
</script>
