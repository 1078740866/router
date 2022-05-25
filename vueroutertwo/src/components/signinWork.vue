<template>
  <form v-on:submit.prevent="doLogin">
    <div>
      <label>User ID</label>
      <input type="text" placeholder="customer id" v-model="user.userId" />
      <label for="id">邮箱地址:</label>
      <input type="text" placeholder="请输入邮箱地址" v-model="user.email"/>@
      <select>
        <option value="163">163.com</option>
        <option value="gmail">gmail.com</option>
        <option value="qq">qq.com</option>
      </select>
      <br /><br />
      <div class="password">密码:<input type="password" size="30" v-model="user.password"/></div>
      <br />
      <div style="height: 30px">
        性別：
        <form action="">
          <input type="radio" name="sex" value="male" />男
          <input type="radio" name="sex" value="female" />女
        </form>
      </div>
      <br />
      <div>备注:<textarea v-model="message"></textarea></div>
      <br /><br />
      <div class="agreement">
        <input type="checkbox" id="text" />同意
        <a href="http://www.runoob.com/" target="_blank"> "隐私条款" </a>
        和"隐私相关选项"
      </div>
      <br />
      <button @click="gotolink" type="submit">提交</button>
      <input type="reset" value="重置" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  name: "signinWork",
  props: {
    msg: String,
  },
  methods: {
    gotolink() {
      
      this.$router.replace('/homePage');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 300px;
  height: 80px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #c3f285;
}
</style>
