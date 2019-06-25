<template>
  <MediaLayout>
    <div v-html="$page.media.content"/>
  </MediaLayout>
</template>
<page-query>
    query Post($path: String!){
     post(path: $path) {
      title
      content
    }
    }
</page-query>
<script>
export defualt {
    metaInfo(){
        return {
            title: this.$page.post.title
        }
    }
} 
</script>
