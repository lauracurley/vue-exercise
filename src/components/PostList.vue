<template>
  <div>
    <!-- Implement logic to allow filtering on things other than userId -->
    <div v-if="!!userId">
      <h2>Posts for {{ user.usersById[userId]['username'] }}</h2>
      <PostEntry v-for="post in postsByUserId" :key="post.id" :post="post"/>
    </div>
    <div v-else>
      <h2>All Posts</h2>
      <PostEntry v-for="post in post.posts" :key="post.id" :post="post"/>
    </div>
  </div>
</template>

<script>
import PostEntry from '@/components/PostEntry';
import { mapState } from 'vuex';

export default {
  props: {
    userId: Number,
    required: false,
  },
  components: {
    PostEntry,
  },
  // TODO: Investigate more performant ways to get posts for the current user
  // Create a list of posts for the current user
  computed: {
    postsByUserId() {
      return this.$store.state.post.posts.filter(post => post.userId === this.userId);
    },
    ...mapState(['post', 'user']),
  },
};
</script>
