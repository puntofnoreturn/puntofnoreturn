<template>
  <div class="container">
    <div class="title-area">
        <h1 class="title">
            {{ post.attributes.title }}
        </h1>
    </div>
     <div class="content" v-html="post.html" />

  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    try {
        
      let post = await import(`~/content/posts/${params.slug}.md`);
      return {
        post
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>
