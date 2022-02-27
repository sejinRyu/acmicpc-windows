const fs = require('fs');
const yaml = require('js-yaml');
const child_process = require('child_process');

const path = __dirname+'/src/'+process.argv[process.argv.length-1];
const data = yaml.load(fs.readFileSync(path+"/data.yaml").toString());

let count = 1;

for(let value of data)
{
    test("case "+count++, () => {
        expect(value.output.trim()).toEqual(runTest(value));
    });
}



function runTest(data){
    let run_process;

    if(fs.existsSync(path+'/main.py')){
        run_process = child_process.spawnSync('python',[path+'/main.py'],{input:data.input.trim()});
    } else if(fs.existsSync(path+'/index.js')){
        fs.writeFileSync("/dev/stdin", data.input.trim());
        run_process = child_process.spawnSync('node',[path+'/index.js']);
    }
        

    return run_process.stdout.toString().replaceAll('\r\n','\n').trim() + run_process.stderr.toString();
    
}