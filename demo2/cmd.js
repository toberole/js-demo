#!/usr/bin/env node
// #!/usr/bin/env node 代表调用/usr/bin/env，将后面值作为参数。env是个Linux命令，它会按照当前环境变量设置（主要是PATH变量），
// 查找名为node的可执行文件，然后用后面的参数启动这个可执行文
// 获取命令行参数
console.log('hello ', process.argv[2]);