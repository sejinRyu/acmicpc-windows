const fs = require('fs');
const yaml = require('js-yaml');
const child_process = require('child_process');

const path = __dirname+'/'+process.argv[process.argv.length-1];
const data = yaml.load(fs.readFileSync(path+"/data.yaml").toString());

let count = 1;

for(let value of data)
{
    test("case "+count++, () => {
        expect(value.output.removeEnter()).toEqual(runTest(value));
    });
}


String.prototype.removeEnter = function() {
    var value = this.replace(/(\n| )/g,"");
    value = value.replace(/\r/g, "");
    return value;
   };

function runTest(json){
    fs.writeFileSync("/dev/stdin", json.input.removeEnter());

    let run_process = child_process.spawnSync('node',[path+'/index.js']);

    return run_process.stdout.toString().removeEnter();
}