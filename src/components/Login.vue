<script setup lang="ts">
import { useRouter } from 'vue-router'
import ElementPlus from 'element-plus'
import {ref} from "vue";

import { reactive } from 'vue'
// do not use same name with ref
const form = reactive({
  name: '',
  password:''
})

const router = useRouter()
const onSubmit = () => {
  console.log('submit!')
  window.localStorage.setItem("isLogin",'true')
  router.push('/')
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>电子商城</el-header>
      <el-main class="form-row">
        <div class="black-box">
          <el-row >
            <el-col :span="24">
              <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-input
                    v-model="form.name"
                    style="max-width: 600px"
                    placeholder="请输入姓名"
                >
                  <template #prepend>姓名</template>
                </el-input>
                <el-input
                    v-model="form.password"
                    style="max-width: 600px"
                    placeholder="请输入密码"
                >
                  <template #prepend>密码</template>
                </el-input>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">登录</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>

      </el-main>
      <el-footer class="footer" style="">
        <p>唯一指定作者:qsxes|ncnmb</p>
      </el-footer>
    </el-container>
  </div>

</template>


<style scoped>
.common-layout {
  min-height: 100vh;
  background-image: url("/Pink_face_shop_animation_Orange.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.common-layout .el-main {
  flex: 1;
}
.form-row{
  align-items: center;
  justify-content: center;
  display: flex;
}

.black-box{
  padding: 100px;
  background: rgba(0, 0, 0, 0.1);
  border: 3px solid silver;
  box-shadow:
      0 0 3px darkgray,
      0 0 4px white,
      0 0 5px rgba(226, 230, 230,0.2);
}
body>*{
  padding: 0;
}
</style>