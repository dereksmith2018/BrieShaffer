module.exports = {
  siteName: "Brie Shaffer",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'images/**/*.md',
        typeName: 'Post',
        remark: {

        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  }
}