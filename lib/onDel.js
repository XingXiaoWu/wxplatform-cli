const registries = require('../json/registries.json');
const cusRegs = require('../json/customregist.json');
const _ = require('lodash')
const { wirteSync, successConsole, errorConsole } = require('../utils')
function onDel (name) {
    if (registries.hasOwnProperty(name)) {
        errorConsole(name + "为预设定模板,不可删除");
        return;
    } else if (!cusRegs.hasOwnProperty(name)) {
        errorConsole(name + "模板不存在,请检查输入是否正确");
        return;
    }
    // 添加
    let result = _.omit(cusRegs, name)
    // 转成json写入
    wirteSync('/json/customregist.json', result)
    successConsole("成功删除,输入wxplatform-cli ls查看最新template")
}

module.exports = (name) => {
    onDel(name)
}