<template>
  <div class="FX_FXZF_LOGIN">
    <div class="login">
      <div class="content">
        <div class="header">
          <h1 class="title">This is login page!</h1>
        </div>
        <div class="body">
          <div class="form-group">
            <label class="form-label" for="username"></label>
            <input class="form-input" id="username" type="text" placeholder="请输入用户名"/>
          </div>
          <div class="form-group">
            <label class="form-label" for="password"></label>
            <input class="form-input" id="password" type="password" placeholder="请输入密码"/>
          </div>
          <div class="form-group">
            <label class="form-label" for="remanber"></label>
            <input class="form-input" id="remanber" type="checkbox"/>
          </div>
        </div>
        <div class="footer">
          <button class="btn btn-confirm" @click="login">登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'Login',
    data() {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_FXZF_LOGIN {
  }
</style>
