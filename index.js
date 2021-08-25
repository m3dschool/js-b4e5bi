// Import stylesheets
import './style.css';
var obj = {
  first: 'nohj',
  gender: 'FEMALE',
  name: 'ethan',
  age: 26
};
delete obj.age;
var str = obj.age;

for (let k in obj) {
  console.log(k);
  console.log(obj[k]);
  console.log(k + ':' + obj[k]);
}

var ks = Object.keys(obj);
console.log(ks);
var ts = ks.toString();
console.log(ts);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>` + ts + `</h1>`;
