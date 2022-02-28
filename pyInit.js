const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

const url = 'https://www.acmicpc.net/problem/'+process.argv[process.argv.length-1];
const path = './src/'+process.argv[process.argv.length-1];


if(!fs.existsSync(path))
    fs.mkdirSync(path);

fs.writeFileSync(
    path+'/main.py',
    "import sys\ninput = lambda : sys.stdin.readline().rstrip()\n");

request(url, function(error, response, html){
    if (error) 
        throw error;
    
    let text = '';
    var $ = cheerio.load(html);
    const sampleLength = $('.sampledata').length / 2;

    for(let i = 1; i <= sampleLength; i++)
    {
        text += '- input: |\n';
        text += '    ' + $('#sample-input-'+i).text().trim().replaceAll('\n','\n    ') + '\n';

        text += '  output: |\n';
        text += '    '+ $('#sample-output-'+i).text().trim().replaceAll('\n','\n    ') + '\n\n';
    }

    fs.writeFileSync(path+'/data.yaml', text);
});

