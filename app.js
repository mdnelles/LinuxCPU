const cpu = require('cpu-load');
const df = require('df');
 
console.log("begin....");
// track the CPU load over the next 1 second
cpu(1000, function (load) {
  load //=> 0.03 (3%)
  console.log("Load : " + load);
})


   
df(function (err, table) {
    if (err) {
        console.error(err.stack);
        return;
    }

    console.log(JSON.stringify(table, null, '  '));
});
