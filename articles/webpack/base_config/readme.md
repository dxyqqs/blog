
# Webpack常用基本配置
![nature][nature]
## basic structure
```javascript
const webpack_config = {
  entry:{},
  output:{},
  module:{},
  resolve:{},
  externals:{},
  plugins:{},
  devServer:{},
  devtool:"",
}
```
## entry
作为入口属性，``entry``非常简单。这里给出一个表格，说明``entry``赋值的类型以及作用
```javascript
const webpack_config = {
  entry:{ // or ['main.js'] / "main.js"
    index:"test.js"
  }
}
```
|Type|E.g.|Description|
|:--|:--|:--|
|``String``|"test.js"|不推荐使用，无法自定义chunk name(默认是``main``)|
|``Array``|["test.js"]|Array类型可以将包含的多个文件合并，但不推荐使用，理由同上|
|``Object``|{index:"test.js"}|为了格式同一，建议使用以对象的方式来创建入口文件，这种方式可以创建多个不同入口文件，这对**Multi Page Application(MPA)**来说非常重要|

和``entry``有关的就这么多了，这里还有有用的东西值得注意一下:
```javascript
const webpack_config = {
  entry:{ // or ['main.js'] / "main.js"
    index:["test.js"] // 这里在Object中用了数组
  }
}
```
数组的作用就是将一组没有关联的文件打包，在后面的优化章节会了解到一些有用的东西
## output
先给出一个表格，来看看有哪些常用的属性
```javascript
const path = require('path')
const webpack_config = {
  output:{
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    sourceMapFilename: '[file].map'
  }
}
```














[nature]:https://unsplash.it/980/100/?random
