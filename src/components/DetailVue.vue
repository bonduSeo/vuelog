<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{ blogContents[$route.params.id].title }}</h5>
    <p>{{ blogContents[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
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
