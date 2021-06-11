/**
* @author chuwei
* @date 2021/3/10 10:11
* @description:校验手机号
**/
function checkPhone(phone) {
  return /^1\d{10}$/.test(phone)
}

/**
* @author chuwei
* @date 2021/3/10 10:12
* @description:校验邮箱
**/
function checkMail(mail) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(mail)
}

/**
* @author chuwei
* @date 2021/3/10 10:12
* @description:校验url
**/
function checkUrl(url) {
  return /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(url)
}

/**
* @author chuwei
* @date 2021/3/10 10:12
* @description:校验身份证
**/
function checkIdCard(card) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(card)
}

/**
* @author chuwei
* @date 2021/3/10 10:12
* @description:校验邮编
**/
function checkPostCode(postcode) {
  return /^[1-9]\d{5}(?!\d)$/.test(postcode)
}

/**
* @author chuwei
* @date 2021/3/10 10:12
* @description:校验日期
**/
function checkDate(date) {
  return /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(date)
}

/**
* @author chuwei
* @date 2021/3/10 10:12
* @description:校验ios
**/
function checkIos() {
  return /iphone/i.test(navigator.userAgent)
}

/**
* @author chuwei
* @date 2021/3/10 10:13
* @description:校验安卓
**/
function checkAndroid() {
  return /android/i.test(navigator.userAgent)
}

/**
* @author chuwei
* @date 2021/3/10 10:13
* @description:校验移动端
**/
function checkMobile() {
  return /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i.test(navigator.userAgent)
}

/**
* @author chuwei
* @date 2021/3/10 10:13
* @description:校验微信
**/
function checkWeChat() {
  return /MicroMessenger/i.test(navigator.userAgent)
}

/**
* @author chuwei
* @date 2021/3/10 10:13
* @description:浅复制
**/
function copy(target) {
  let res
  let targetType = checkType(target)
  if (targetType === 'Object') {
    res = {}
  } else if (targetType === 'Array') {
    res = []
  } else {
    return target
  }
  for (let i in target) {
    let value = target[i]
    if (checkType(value) === 'Object' || checkType(value) === 'Array') {
      res[i] = copy(value)
    } else {
      res[i] = value
    }
  }
  return res
}

/**
* @author chuwei
* @date 2021/3/10 10:13
* @description:设置一个Session
**/
function setSessionStorage(key, value) {
  if (window.sessionStorage) {
    sessionStorage.setItem(key, JSON.stringify(value))
  } else {
    alert('您的浏览器不支持sessionStorage存储')
  }
}

/**
* @author chuwei
* @date 2021/3/10 10:14
* @description:获取一个Session
**/
function getSessionStorage(key) {
  if (window.sessionStorage) {
    return JSON.parse(sessionStorage.getItem(key))
  } else {
    alert('您的浏览器不支持sessionStorage存储')
  }
}

/**
* @author chuwei
* @date 2021/3/10 10:14
* @description:删除一个Session
**/
function removeSessionStorage(key) {
  if (window.sessionStorage) {
    sessionStorage.removeItem(key)
  } else {
    alert('您的浏览器不支持sessionStorage存储')
  }
}

/**
* @author chuwei
* @date 2021/3/10 10:14
* @description:设置一个LocalStorage
**/
function setLocalStorage(key, value) {
  if (window.localStorage) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    alert('您的浏览器不支持localStorage存储')
  }
}

/**
* @author chuwei
* @date 2021/3/10 10:14
* @description:获取一个LocalStorage
**/
function getLocalStorage(key) {
  if (window.localStorage) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    alert('您的浏览器不支持localStorage存储')
  }
}

/**
* @author chuwei
* @date 2021/3/10 10:14
* @description:删除一个LocalStorage
**/
function removeLocalStorage(key) {
  if (window.localStorage) {
    localStorage.removeItem(key)
  } else {
    alert('您的浏览器不支持localStorage存储')
  }
}

/**
* @author chuwei
* @date 2021/3/10 9:59
* @description:获取url上的query参数
**/
function getQuery(key) {
	return decodeURI(window.location.search.replace(
		new RegExp("^(?:.*[&\\?]" + encodeURI(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
}

/**
* @author chuwei
* @date 2021/3/10 10:01
* @description:生成n-m的随机数
**/
function random(n, m) {
	n = +n || 0
	m = +m || 0
	return Math.random() * (m - n) + n
}

/**
* @author chuwei
* @date 2021/3/10 10:05
* @description:生成n-m的随机整数
**/
function randomInt(n, m) {
	n = +n || 0
	m = +m || 0
	return Math.round(Math.random() * (m - n) + n)
}

/**
* @author chuwei
* @date 2021/3/10 10:20
* @description:获取一个对象的数据类型
**/
function getObjType(obj) {
	return Object.prototype.toString.call(obj).slice(8,-1)
}

const echo_utils={
	checkPhone,
	checkMail,
	checkUrl,
	checkIdCard,
	checkPostCode,
	checkDate,
	checkIos,
	checkAndroid,
	checkMobile,
	checkWeChat,
	copy,
	setSessionStorage,
	getSessionStorage,
	removeSessionStorage,
	setLocalStorage,
	getLocalStorage,
	removeLocalStorage,
	getQuery,
	random,
	randomInt,
	getObjType
}

if (typeof window !=="undefined"){
	window.echo_utils=echo_utils
}

module.exports = echo_utils