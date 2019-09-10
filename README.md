#webpack-test

### How to run:

> `yarn install`
>
> `yarn build:dll`
>
> `yarn dev`

然后在dll目录中, 可以看到vendor.dll的相关文件

在dist目录中, 可以看到打包好的app.js (只包含业务代码, vendor代码在dll中)

访问index.html, 在console中可以看到app.js正常执行
