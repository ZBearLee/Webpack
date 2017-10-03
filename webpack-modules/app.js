// lodash 是一个常用的函数util集合
// underscore
import { uniq } from 'lodash';
import { apiKey as key, url, sayhi, old, dog} from './src/config';
// sayhi('吵吵');
import User, { createURL, gravatar} from './src/user';
const wes = new User('WesBos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);
console.log(image);
let oImg = document.createElement('img');
oImg.src = image;
document.getElementById('app').appendChild(oImg);
