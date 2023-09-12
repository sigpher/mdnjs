let choi = {
    name: "choi",
    age: 20,
    addr: "jm",
}

let json = JSON.stringify(choi, ["name", "addr"]);
console.log(json);

let obj = JSON.parse(json);
console.log(obj);

// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, (key, value)=> {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( meetup.date.getDate() ); // 现在正常运行了！