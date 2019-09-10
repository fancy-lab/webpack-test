#webpack-test

### How to run:

> `yarn install`
>
> `yarn build:dll`
>
> `yarn dev` or `yarn prod`

然后在dll目录中, 可以看到vendor.dll的相关文件

在 dist目录(production) 或 dev_dist目录(development) 中, 可以看到打包好的app.js (只包含业务代码, vendor代码在dll中)

访问index.html, 在console中可以看到app.js正常执行
