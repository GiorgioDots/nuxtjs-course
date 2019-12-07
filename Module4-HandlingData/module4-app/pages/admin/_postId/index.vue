<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
export default {
  layout: "admin",

  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Giorgio",
        title: "My awesome post",
        content: "Super amazing, thanks!",
        thumnailLink:
          "https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
      }
    };
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>