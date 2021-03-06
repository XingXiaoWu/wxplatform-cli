const cusRegs = require('../json/customregist.json');
const { wirteSync, successConsole, errorConsole, getAllTemplates } = require('../utils')
const path = require('path');
function onAdd (name, url) {
    let tmpAll = getAllTemplates()
    if (tmpAll.hasOwnProperty(name)) {
        errorConsole(name + "已经被使用");
        return;
    }
    // 添加
    let tmp = {}
    tmp[name] = url
    let result = { ...tmp, ...cusRegs }
    const cliPath = path.join(__dirname,"/../json/customregist.json")
    // 转成json写入
    wirteSync(cliPath, result)
    successConsole("成功写入,输入wxplatform-cli ls查看最新template")
}

module.exports = (name, url) => {
    onAdd(name, url)
}