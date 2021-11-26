const readline = require("readline")
const shell = require("shelljs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const _separator_ = "@@@@@@@@@@@@@@@@@@@@@@@@@@@\n"
const cmd = _separator_ + "1: adb root,2: adb remount,3: adb shell ps | grep meituan\n"
    + ",4: adb disconnect,5: adb devices,6: adb shell netcfg\n"
    + ",7: adb reboot,8: 关闭页面保活,9: 打开页面保活\n" + _separator_

function start() {
    rl.question(cmd, (intxt1) => {
        action(intxt1)
    });
}

function action(intxt) {
    if (intxt == "1") {
        shell.exec("adb root")
    } else if (intxt == "2") {
        shell.exec("adb remount")
    } else if (intxt == "3") {
        shell.exec("adb shell ps | grep meituan")
    } else if (intxt == "4") {
        shell.exec("adb disconnect")
    } else if (intxt == "5") {
        shell.exec("adb devices")
    } else if (intxt == "6") {
        shell.exec("adb shell netcfg")
    } else if (intxt == "7") {
        shell.exec("adb reboot")
    } else if (intxt == "8") {
        shell.exec("adb shell setprop persist.cust.appalive 0")
    } else if (intxt == "9") {
        shell.exec("adb shell setprop persist.cust.appalive 1")
    } else {
        shell.exec("adb connect " + intxt)
    }
    start()
}

start()