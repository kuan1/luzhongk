<!-- http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html -->

## commit 的类别

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

#### 安装依赖

```bash
npm install -g conventional-changelog-cli
npm install -g commitizen
```

#### 使其支持 Angular 的 Commit message 格式

```bash
commitizen init cz-conventional-changelog --save --save-exact
```
