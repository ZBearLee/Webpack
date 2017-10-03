import md5 from 'md5';
// 模块 module 封装
// 只为某个功能 并向外提供
import { url } from './config';
export default function User(name, email, website) {
  return {name, email, website};
}

export function createURL(name) {
  return `${url}/users/${name}`;
}
export function gravatar(email) {
  const hash = md5(email.toLowerCase());
  const photoUrl = `https://www.gravatar.com/avatar/${hash}`;
  return photoUrl;
}
