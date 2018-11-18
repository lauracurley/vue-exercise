<template>
  <div class="post-card -shadow">
    <h4 class="title">{{ post.title }}</h4>
    <p class="highlight">by {{ user.username }} from {{ user.company.name }}</p>
    <span class="eyebrow">{{ post.body }}</span>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  computed: {
    user() {
      return this.$store.state.user.usersById[this.post.userId];
    },
  },
};
</script>

<style scoped>
  .post-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .post-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
  .post-card > .title {
    margin: 0;
  }
  .highlight {
    margin: 0;
    color: seagreen;
  }
</style>
