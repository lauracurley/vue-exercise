<template>
  <div class="blog-container">
    <!-- TODO: display posts for filter terms dynamically instead of hard-coding to userId of 1-->
    <PostList class="current-user" :userId="user.currentUserId"/>
    <PostList class="all-users"/>
  </div>
</template>

<script>
import PostList from '@/components/PostList';
import { mapState } from 'vuex';

// Create a Blog view since we may want multiple "pages" as our app grows
export default {
  components: {
    PostList,
  },
  created() {
    this.$store.dispatch('post/fetchPosts');
    this.$store.dispatch('user/fetchUsers');
  },
  computed: {
    ...mapState(['post', 'user']),
  },
};
</script>

<style>
  .blog-container {
    display: flex;
    justify-content: space-between;
  }
  .current-user {
    margin: 20px;
  }
  .all-users {
    margin: 20px;
  }
</style>
