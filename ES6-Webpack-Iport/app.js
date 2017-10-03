// loadash针对数组，集合等提供的工具函数，专门解决数组中的问题
// map  filter   ......   

/* import User,{createURL,gravatar} from './src/user'   //User类是一个更大的概念，所以应该放在{}之外，单独的进行引入

import { uniq } from 'lodash'   //解构，引入某一个功能
//引入部门配置
import { apiKey as Key, url ,sayHi,older,dog} from './src/config'//解构式的引入，import ?as ?可以实现重命名
console.log(older)
 */





// 8-29 Tuesday am

// {} 解构
// uniq 忽略重复的数据 
// lodash 针对数组，等提供的工具函数
// map filter ....
// 引入部分配
import { uniq } from 'lodash'

// 模块化机制方案      as 重命名
import {apiKey as Key, url, sayHi, dog, older } from './src/config'
console.log(old)    //100
// sayHi('Wesbos')
console.log(Key,url)    //abc123 http://wesbos.com 


import User, { createURL,gravatar } from './src/user'
const wes = new User('Wes Bos', 'wesbos@gmail', 'wesbos.com')
const profile = createURL(wes.name 

)
console.log(profile)
const image = gravatar(wes.email)
console.log(image)


