// 使用反引号包裹 你的内容 这样可以保留换行
const CONTENT = `# 开发工具配置文件夹 git提交时不需要
.idea
# 项目依赖安装文件夹 git提交时不需要
node_modules

# ... 其他你不想要的`

// node.js环境下
const fs = require('fs')
const path = require('path')

console.log(__dirname) // 当前项目文件夹路径 __dirname

const path_license = path.join(__dirname, '.gitignore')
fs.writeFile(path_license, CONTENT, err => {
	if (err) throw err
	
	console.log('你的文件已创建...')
})














