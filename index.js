//浏览器信息
let browser = (function () {
    let browser = {isIE: false, ieVersion: -1, isEdge: false};
    let ua = window.navigator.userAgent.toLowerCase();

    //用于检测是否ie，及其版本
    if (ua.indexOf("edge") > -1) {
        browser.isEdge = true;
    } else if (ua.indexOf("rv:11") > -1) {
        browser.isIE = true;
        browser.ieVersion = 11;
    } else if (ua.indexOf("msie") > -1) {
        browser.isIE = true;
        browser.ieVersion = parseInt(ua.toLowerCase().match(/msie ([\d.]+)/)[1]);
    }

    browser.platform = {
        isMac: window.navigator.platform.toUpperCase().indexOf('MAC') >= 0,
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };

    // browser.isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
    browser.isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false;
    browser.isSafari = false;
    browser.isChrome = false;
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            browser.isChrome = true;
        } else {
            browser.isSafari = true;
        }
    }
    return browser;
})()

export default browser

