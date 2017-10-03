/* //输出User类
//跟User相关的方法
//www.zhihu.com/u/lzx....
//想要得到小家的地址，手里有用户名，不用去实例化，因为是可配置的


import { url } from './config'

import md5 from 'md5'

export default function User(name, email,
    website) {
    return {
        name, email, website
    }
}

export function createURL(name) {
    return `${url}/users/${name}`
}

export function gravatar(email){   //邮箱是唯一的
    const hash=md5(email.toLowercase())      //md5进行加密,加密后不会是明文邮箱了，是用户的隐私，头像是唯一的
    const photoURL=``
    return photoURL
}


const wes=new User('Wes Bos','wesbos@gmail.com','wesbos.com')

const profile=createURL(wes.name)

console.log(profile) */

// 输出User类
// 跟User相关的方法 
// www.zhihu.com/u/shunwuyu 


// 得到小家的地址，手里有用户名 不用实例化
// 可配置的



import { url } from './config'
import md5 from 'md5'
export default function User(name, email,
    website) {
    return {
        name, email, website
    }
}
export function createURL(name) {
    return `${url}/users/${name}`
}
export function gravatar(email) {
    // 隐私 头像也是唯一的 
    const hash = md5(email.toLowerCase())
    const photoURL = `https://www.gravatar.com/avatar/${hash}`
    return photoURL
}
