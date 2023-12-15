const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 如果需要全局引入scss,需要在这引入
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/base.scss";`, //引入全局变量
      },
    },
  },
});
