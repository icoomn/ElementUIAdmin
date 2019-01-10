<template>
  <div class="login-box">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
      <h3 class="title">系 统 登 录</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          autocomplete="off"
          placeholder="账 号: admin"
          prefix-icon="el-icon-goods">
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="textType"
          v-model="loginForm.password"
          @keyup.native.enter="login('loginForm')"
          autocomplete="off"
          placeholder="密 码: admin"
          prefix-icon="el-icon-time">
          <i slot="suffix" class="el-input__icon el-icon-view btn-eye" @click="changeType"></i>
        </el-input>
      </el-form-item>
      <el-form-item v-show="showMsg" style="margin-bottom:0;">
        <span class="text-danger">提示：用户名或密码错误，请重试！</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')" class="login-btn" v-loading="loading">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: ' ', trigger: 'blur' }
        ],
        password: [
          { required: true, message: ' ', trigger: 'blur' }
        ]
      },
      loading: false,
      showMsg: false,
      textType: 'password'
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$http.post('/api/login', this.loginForm).then((res) => {
            if (res.data) {
              // 延迟两秒，演示登录按钮加载效果
              setTimeout(() => {
                this.loading = false
                sessionStorage.setItem('user', JSON.stringify(this.loginForm))
                this.$router.replace({ path: '/console' })
              }, 2000)
            } else {
              this.loading = false
              this.showMsg = true
            }
          })
        } else {
          console.log('login failed')
          return false
        }
      })
    },
    changeType () {
      this.textType = (this.textType === 'password' ? 'text' : 'password')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #20222A;
  .login-form {
    border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #f5f5f5;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 5px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .btn-eye {
      cursor: pointer;
    }
    .text-danger {
      color: #F56C6C;
    }
    .login-btn {
      margin: 35px 0 10px 0;
      width: 100%;
    }
  }
}

</style>
