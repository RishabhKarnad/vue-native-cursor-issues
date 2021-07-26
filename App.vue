<template>
  <view class="container">
    <text-input :style="{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }" v-model="text" />
  </view>
</template>

<script>
export default {
  data: function () {
    return {
      text: '',
    };
  },
  methods: {
    changeX(v) {
      this.text = v;
    },
  },
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
