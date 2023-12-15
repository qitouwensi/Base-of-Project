<template>
  <div class="layout" @click.capture="userDialogVisible = false">
    <el-container>
      <el-header>
        <div class="title">
          <div class="circle">
            <!-- <div></div>
            <div></div> -->
          </div>
          <div class="logo">云文件</div>
        </div>
        <div class="operate-area">
          <el-input
            v-model="searchFileName"
            prefix-icon="el-icon-search"
            placeholder="输入关键字搜索"
          ></el-input>
          <div class="right">
            <el-button type="primary" class="upload-button">
              <i class="el-icon-upload el-icon--right"></i>
              上传文件
            </el-button>
            <div class="user" @click.prevent="userDialogVisible = true">
              <el-avatar
                :size="50"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <div class="user-name">Koto</div>
              <!-- 弹窗 -->
              <div class="user-dialog" v-show="userDialogVisible">
                <div @click="">我的</div>
                <div @click="logoutHandle" class="red">退出账号</div>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <div class="menu">
          <div class="menu-item"></div>
        </div>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          icon: "",
          key: "",
          path: "",
          name: "",
        },
      ],
      userDialogVisible: false,
      searchFileName: "",
    };
  },
  methods: {
    logoutHandle() {
      this.$confirm("是否需要退出当前账号, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
        })
        .catch(() => {
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.layout,
.el-container {
  height: 100%;
}
.layout {
  padding: 25px 35px;
  box-sizing: border-box;
}
.el-header {
  display: flex;
  align-items: center;
  padding: 0;
  height: auto !important;
  .title {
    display: flex;
    align-items: center;
    width: 400px;
    .circle {
      position: relative;
      height: 60px;
      &::after {
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #cad2ff;
        top: 50%;
        margin-top: -25px;
      }
      &::before {
        content: "";
        border-radius: 50%;
        position: absolute;
        width: 32px;
        height: 32px;
        background-color: #7288fa;
        bottom: 3px;
        left: 20px;
        z-index: 9;
      }
    }
    .logo {
      color: $themecolor;
      font-size: 20px;
      padding-left: 60px;
    }
  }
  .operate-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 400px);
    .right {
      display: flex;
      align-items: center;
      padding-right: 10px;
      .user {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        .user-dialog {
          position: absolute;
          top: 65px;
          right: -35px;
          width: 200px;
          height: 110px;
          border-radius: 30px;
          padding: 10px 20px;
          box-sizing: border-box;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          .red {
            color: red;
          }
          div {
            border-bottom: 1px solid #eee;
            height: 40px;
            line-height: 40px;
          }
        }
        .user-name {
          padding: 10px 0 0 20px;
        }
      }
      .upload-button {
        border-radius: 30px;
        margin-right: 40px;
      }
    }
    ::v-deep .el-input {
      width: 482px;
      input {
        border: none !important;
        outline: none;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0px 30px 40px rgba(89, 104, 178, 0.0588235294117647);
      }
      .el-input__icon {
        color: #000 !important;
      }
    }
  }
}
.menu {
  width: 400px;
}
</style>
