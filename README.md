# 06 初始化
pnpm create vite
创建工程
pnpm run dev
启动


#  代码规范 eslint
https://git.lingyu.org.cn/learn/naive-admin-pro/wiki/03-代码规范工具

安装
@mistjs/eslint-config-vue 该项目已经写好的规则
pnpm add eslint @mistjs/eslint-config-vue -D

新增配置文件.elsintrc
{

    //继承默认规则
    "extends":"@mistjs/eslint-config-vue",
    //个人新增规则
    "rules":{
    }
}

# git hooks husky  提交代码
husky可以将git内置的钩子暴露出来，在git hooks中导致的无法提交钩子的问题。

#unocss 原子的css引擎 预设
