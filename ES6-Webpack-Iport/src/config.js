export const apiKey = 'abc123'

export const url = 'http://wesbos.com'

export function sayHi(name) {
    console.log(`hello there ${name}`)
}

//局部作用域,只会在当前文件，不会向外输出
const age=100
const dog='snickers'
export {age as older,dog}