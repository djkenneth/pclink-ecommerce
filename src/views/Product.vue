<template>
  <div>
    <router-view></router-view>
    <v-row justify="center">
      <v-pagination v-model="page" :length="3" color="#fca311"></v-pagination>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1
  })
};
</script>

<style lang="scss" scoped></style>
