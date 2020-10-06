<template>
  <div>
    <v-badge
      :content="content"
      :value="value"
      color="error"
      overlap
      class="mr-7"
    >
      <v-btn :to="route" icon small depressed>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-badge>
  </div>
</template>

<script>
export default {
  props: {
    content: Number,
    value: Number,
    route: Object,
    icon: String
  }
};
</script>
