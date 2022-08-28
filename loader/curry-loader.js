const REG = /<script>([\s\S]+?)<\/script>/;
module.exports = (source) => {
    const __source = source.match(REG)
    return __source && __source[1]? __source[1] : source;
}

// 判断当前模块是否为主模块，如果为主模块，则运行以下代码
// 用来对loader进行单独测试
if(require.main === module){
    const source = `
    <script>
    export default {
        a: 1
    }
</script>
    `;
    const match = source.match(REG)
}