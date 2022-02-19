const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

const url = 'https://www.acmicpc.net/problem/'+process.argv[2];
const path = './'+process.argv[2];


if(!fs.existsSync(path))
    fs.mkdirSync(path);

fs.writeFileSync(
    path+'/index.js', 
    "const input = require('fs').readFileSync('/dev/stdin').toString();");

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

