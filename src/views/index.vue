<style>
.page { margin-top: 200px; }
.web-name { font-weight: 200; }
.web-menu { line-height: 30px; }
</style>

<template>
    <Row type="flex" justify="center" class="page">
        <i-col span="8" class="text-center">
            <div class="logo"><img src="../images/logo.png" width="200" height="60" :alt="web.name"></div>
            <h1 class="web-name">云书签 <small>您的书签管理专家！</small></h1>
            <div class="web-menu">
                <a v-link="{name: 'login'}">登录</a> | <a v-link="{name: 'register'}">注册</a>
            </div>
        </i-col>
    </Row>    
</template>

<script>
export default {
    data() {
        return {
            web: {
                name: '云书签',
                url: 'https://cloudbookmark.cn'
            }
        }
    }
}
</script>
