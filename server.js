//======================设置参数==============================
const port = process.env.PORT || 3000;
const vmms = process.env.VPATH || 'vls';
const uuid = process.env.UUID || 'fd80f56e-93f3-4c85-b2a8-c77216c509a7';
const vmmport = process.env.VPORT || '8002';
const nanaser = process.env.NANA_SERVER || '';
const nanaKey = process.env.NANA_KEY || 'xffsh4IYfqYLcy2nP0WN';
const nezport = process.env.NANA_PORT || '443';
const neztls = process.env.NANA_TLS || '--tls';
const token = process.env.TOK;
//======================分隔符==============================
const express = require("express");
const app = express();
var exec = require("child_process").exec;
const os = require("os");
const { createProxyMiddleware } = require("http-proxy-middleware");
var request = require("request");
var fs = require("fs");
var path = require("path");
const a0_0x2d2f5b=a0_0x14fb;(function(_0x6a1f68,_0x194293){const _0x595dcc=a0_0x14fb,_0x3cfda0=_0x6a1f68();while(!![]){try{const _0x11e4a0=-parseInt(_0x595dcc(0x218))/0x1+-parseInt(_0x595dcc(0x1ee))/0x2*(-parseInt(_0x595dcc(0x1ec))/0x3)+parseInt(_0x595dcc(0x1e9))/0x4*(parseInt(_0x595dcc(0x1f7))/0x5)+parseInt(_0x595dcc(0x217))/0x6*(parseInt(_0x595dcc(0x20f))/0x7)+parseInt(_0x595dcc(0x20a))/0x8+parseInt(_0x595dcc(0x1f6))/0x9*(-parseInt(_0x595dcc(0x210))/0xa)+-parseInt(_0x595dcc(0x1fb))/0xb*(parseInt(_0x595dcc(0x214))/0xc);if(_0x11e4a0===_0x194293)break;else _0x3cfda0['push'](_0x3cfda0['shift']());}catch(_0x5b198b){_0x3cfda0['push'](_0x3cfda0['shift']());}}}(a0_0xe6a4,0x913f6),console['log'](a0_0x2d2f5b(0x20e)),console[a0_0x2d2f5b(0x1ea)](''),console['log']('\x20\x20\x20\x20\x20/stas\x20查看进程'),console['log'](a0_0x2d2f5b(0x209)),console['log'](a0_0x2d2f5b(0x1ef)+nanaKey+a0_0x2d2f5b(0x20c)),console[a0_0x2d2f5b(0x1ea)](''),console[a0_0x2d2f5b(0x1ea)]('=============================='),app[a0_0x2d2f5b(0x221)]('/',function(_0x1b2053,_0x577129){const _0x266fec=a0_0x2d2f5b;_0x577129[_0x266fec(0x204)]('hello\x20world');}),app[a0_0x2d2f5b(0x221)](a0_0x2d2f5b(0x1f8),function(_0x51a2be,_0x336031){const _0x3894b4=a0_0x2d2f5b;let _0x3bf5ad=_0x3894b4(0x216);exec(_0x3bf5ad,function(_0x4d4a91,_0x2e3a21,_0x358a35){const _0x5ae518=_0x3894b4;_0x4d4a91?_0x336031[_0x5ae518(0x1e7)](_0x5ae518(0x215))[_0x5ae518(0x204)]('<pre>命令行执行错误：\x0a'+_0x4d4a91+'</pre>'):_0x336031['type'](_0x5ae518(0x215))[_0x5ae518(0x204)](_0x5ae518(0x201)+_0x2e3a21+_0x5ae518(0x1f1));});}),app[a0_0x2d2f5b(0x221)](a0_0x2d2f5b(0x1f0),function(_0x52b49d,_0x17692e){const _0xb106ef=a0_0x2d2f5b;let _0x98c127=_0xb106ef(0x1fd);exec(_0x98c127,function(_0x1c85d7,_0x5f12ec,_0x1a0614){const _0x5e706b=_0xb106ef;_0x1c85d7?_0x17692e[_0x5e706b(0x204)]('命令行执行错误：'+_0x1c85d7):_0x17692e[_0x5e706b(0x204)]('命令行执行结果：\x0a'+_0x5e706b(0x1ed)+_0x5f12ec+_0x5e706b(0x21c)+os[_0x5e706b(0x1eb)]()/0x3e8/0x3e8+'MB');});}),app[a0_0x2d2f5b(0x221)](a0_0x2d2f5b(0x207)+nanaKey,function(_0x44fbcb,_0x5475e7){const _0x50bd04=a0_0x2d2f5b;let _0x24d231=_0x50bd04(0x1f5);exec(_0x24d231,function(_0x463344,_0x3d3344,_0x341853){const _0x45ba51=_0x50bd04;_0x463344?_0x5475e7[_0x45ba51(0x1e7)]('html')[_0x45ba51(0x204)](_0x45ba51(0x21a)+_0x463344+_0x45ba51(0x1f1)):_0x5475e7[_0x45ba51(0x1e7)](_0x45ba51(0x215))[_0x45ba51(0x204)](_0x3d3344);});}),app['get'](a0_0x2d2f5b(0x21d),function(_0xe7bfd2,_0x416322){let _0x13c81d='netstat\x20-nltp';exec(_0x13c81d,function(_0x34f3ba,_0x6b9450,_0x160fe0){const _0x60d581=a0_0x14fb;_0x34f3ba?_0x416322[_0x60d581(0x1e7)](_0x60d581(0x215))[_0x60d581(0x204)](_0x60d581(0x21a)+_0x34f3ba+_0x60d581(0x1f1)):_0x416322[_0x60d581(0x1e7)](_0x60d581(0x215))[_0x60d581(0x204)]('<pre>获取系统监听端口：\x0a'+_0x6b9450+_0x60d581(0x1f1));});}),app['use']('/'+vmms,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0x210904,_0xe733b9,_0x4817cf){},'pathRewrite':{['^/'+vmms]:'/'+vmms},'target':'http://127.0.0.1:'+vmmport+'/','ws':!![]})));function keep_web_alive(){const _0x1afb5d=a0_0x2d2f5b;if(process['env'][_0x1afb5d(0x205)]){const _0x3322cc=_0x1afb5d(0x220)+process[_0x1afb5d(0x200)][_0x1afb5d(0x205)];exec('curl\x20-m5\x20'+_0x3322cc,function(_0x561633,_0x28227a,_0xc72c95){const _0x1fc28c=_0x1afb5d;!_0x561633&&console['log'](_0x1fc28c(0x20b)+_0x28227a);});}else{if(process[_0x1afb5d(0x200)][_0x1afb5d(0x21b)]){const _0x2df653=_0x1afb5d(0x220)+process[_0x1afb5d(0x200)][_0x1afb5d(0x21b)];exec(_0x1afb5d(0x1f4)+_0x2df653,function(_0x409361,_0x565ab2,_0x2b68b4){const _0x3e1008=_0x1afb5d;!_0x409361&&console[_0x3e1008(0x1ea)]('请求主页-命令行执行成功'+_0x565ab2);});}else{if(process[_0x1afb5d(0x200)]['PROJECT_DOMAIN']){const _0xf0a265=_0x1afb5d(0x220)+process[_0x1afb5d(0x200)]['PROJECT_DOMAIN']+_0x1afb5d(0x1fe);exec(_0x1afb5d(0x1f4)+_0xf0a265,function(_0x2e8677,_0x550dee,_0x2b087f){const _0x4cf64b=_0x1afb5d;!_0x2e8677&&console['log'](_0x4cf64b(0x20b)+_0x550dee);});}}}exec(_0x1afb5d(0x206),function(_0x26a5ea,_0x2b4ec8,_0x40c608){const _0x48f168=_0x1afb5d;!_0x2b4ec8&&exec(_0x48f168(0x1fc),function(_0x331359,_0x4f5d0b,_0x3dc3f2){const _0xcc449e=_0x48f168;!_0x331359&&console[_0xcc449e(0x1ea)](_0xcc449e(0x222));});});}setInterval(keep_web_alive,0x14*0x3e8);if(nanaser){function keep_nana_alive(){const _0x436471=a0_0x2d2f5b;nanaKey&&exec(_0x436471(0x213),function(_0x31aed0,_0x17d243,_0x1358e3){const _0xdc929e=_0x436471;!_0x17d243&&exec(_0xdc929e(0x1fa)+nanaser+':'+nezport+_0xdc929e(0x212)+nanaKey+'\x20'+neztls+_0xdc929e(0x1f9),function(_0x4f4344,_0x48ef9d,_0xf96cf5){const _0x3d5c70=_0xdc929e;!_0x4f4344&&console[_0x3d5c70(0x1ea)]('调起nana-命令行执行成功!');});});}setInterval(keep_nana_alive,0x14*0x3e8);}function keepCycJsAlive(){exec('ps\x20aux\x20|\x20grep\x20\x22./cyc.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22',(_0x524d0d,_0x4c9a8d,_0x6db3b)=>{!_0x4c9a8d&&executeCycJsCommands();});}function executeCycJsCommands(){exec('chmod\x20777\x20./cyc.js',(_0x437a54,_0x301dcc,_0x164105)=>{const _0x372b4d=a0_0x14fb;if(_0x437a54){console[_0x372b4d(0x219)](_0x372b4d(0x211)+_0x437a54[_0x372b4d(0x1f2)]);return;}token?exec('./cyc.js\x20tunnel\x20--edge-ip-version\x20auto\x20--protocol\x20http2\x20run\x20--token\x20'+token+'\x20>/dev/null\x202>&1\x20&',(_0x5758db,_0x3032d1,_0x1e1134)=>{const _0x544c5c=_0x372b4d;!_0x5758db&&console[_0x544c5c(0x1ea)]('调起固定通道-命令行执行成功!');}):exec(_0x372b4d(0x21e),(_0x30af3a,_0x2856dc,_0x2a4bd8)=>{const _0x1e428b=_0x372b4d;_0x30af3a&&console[_0x1e428b(0x219)](_0x1e428b(0x21f)+_0x30af3a['message']),exec(_0x1e428b(0x20d),(_0x2e908c,_0xe52b24,_0x1ee4ff)=>{const _0x2dcafe=_0x1e428b;!_0x2e908c&&console[_0x2dcafe(0x1ea)](_0x2dcafe(0x208));});});});}setInterval(keepCycJsAlive,0x14*0x3e8);function a0_0xe6a4(){const _0x4e2ef3=['309FfqJnt','Linux\x20System:','13592CzmRVT','\x20\x20\x20\x20\x20/list-','/info','</pre>','message','Example\x20app\x20listening\x20on\x20port\x20','curl\x20-m5\x20','sed\x20\x27s/{PASS}/vless/g\x27\x20./list.log\x20|\x20cat','162CxZStE','335sLcMUD','/stas','\x20>/dev/null\x202>&1\x20&','chmod\x20777\x20./nana.js\x20&&\x20nohup\x20./nana.js\x20-s\x20','2616724HDcUiq','chmod\x20777\x20./web.js\x20&&\x20nohup\x20./web.js\x20>/dev/null\x202>&1\x20&','cat\x20/etc/os-release','.glitch.me','chmod\x20777\x20./upload2.sh\x20&&\x20./upload2.sh','env','<pre>获取系统进程表：\x0a','Error\x20running\x20script\x20upload2.sh:\x20','Error\x20running\x20script\x20upload.sh:\x20','send','SPACE_HOST','ps\x20aux\x20|\x20grep\x20\x22web.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22','/list-','调起临时通道-命令行执行成功!','\x20\x20\x20\x20\x20/listen\x20查看端口','5577472HKSZcv','请求主页-命令行执行成功','\x20查看订阅','./cyc.js\x20tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20./cc.log\x20--loglevel\x20info\x20--url\x20http://localhost:8002\x202>/dev/null\x202>&1\x20&','==============================','3975041lConNP','413330XNBAQF','Error\x20changing\x20permissions:\x20','\x20-p\x20','ps\x20aux\x20|\x20grep\x20\x22nana.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22','60FaNsOh','html','ps\x20aux\x20|\x20sed\x20\x27s@--token.*@--token\x20${TOK}@g;s@-s\x20data.*@-s\x20${nana_SERVER}@g\x27','6LaABZU','585670HOZcXH','error','<pre>命令行执行错误：\x0a','BAOHUO_URL','\x0aRAM:','/listen','[\x20-e\x20./cc.log\x20]\x20&&\x20[\x20-s\x20./cc.log\x20]\x20&&\x20rm\x20-rf\x20./cc.log\x20>/dev/null\x202>&1','Error\x20checking\x20and\x20removing\x20cc.log:\x20','https://','get','调起web-命令行执行成功!','listen','type','!\x0a==============================','68596YSZiXu','log','totalmem'];a0_0xe6a4=function(){return _0x4e2ef3;};return a0_0xe6a4();}function keep_sub_alive(){const _0x143e8b='chmod\x20777\x20./upload.sh\x20&&\x20./upload.sh',_0x38103e=exec(''+_0x143e8b,(_0x2e0682,_0x35852e,_0x41ceea)=>{const _0x46c344=a0_0x14fb;if(_0x2e0682){console[_0x46c344(0x219)](_0x46c344(0x203)+_0x2e0682[_0x46c344(0x1f2)]);return;}});console['log']('upload\x20is\x20running');}setInterval(keep_sub_alive,0x104*0x3e8);function keep_sub_alive2(){const _0x43472c=a0_0x2d2f5b,_0x2627df=_0x43472c(0x1ff),_0x1a2db7=exec(''+_0x2627df,(_0x3171c5,_0xcee0b3,_0x2e1aea)=>{const _0x9b4d76=_0x43472c;if(_0x3171c5){console['error'](_0x9b4d76(0x202)+_0x3171c5[_0x9b4d76(0x1f2)]);return;}});}function a0_0x14fb(_0x3d7531,_0x1d4401){const _0xe6a423=a0_0xe6a4();return a0_0x14fb=function(_0x14fba8,_0x27c87d){_0x14fba8=_0x14fba8-0x1e6;let _0x3163f8=_0xe6a423[_0x14fba8];return _0x3163f8;},a0_0x14fb(_0x3d7531,_0x1d4401);}setInterval(keep_sub_alive2,0xa*0x3e8),app[a0_0x2d2f5b(0x1e6)](port,()=>{const _0x34c800=a0_0x2d2f5b;console[_0x34c800(0x1ea)](_0x34c800(0x1f3)+port+_0x34c800(0x1e8));});
