let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./slider');
function read(cb){
    fs.readFile('./good.json','utf8',(err,data)=>{
        //文件错误或是没长度时
        if(err || data.length === 0){
            cb([])
        }else{
            cb(JSON.parse(data))
        }
    })
}
function write(data,cb){
    fs.writeFile('./good.json',JSON.stringify(data),'utf8',cb)
}
let offset = 5;   //每一页数据是五条
http.createServer((req,res)=>{
    
    //cors跨域
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //允许哪个方法可以跨域
    // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader("X-Powered-By", ' 3.2.1')
    // res.setHeader('content-type','text/json;charset=utf8');
    //如果是options直接返回成功
    if (req.method == 'OPTIONS') return res.end('200')
    let {pathname,query} = url.parse(req.url,true);
    //轮播图接口
    if(pathname === '/slider'){
        return res.end(JSON.stringify(sliders));
    }
    //首页列表接口
    if(pathname === '/new'){
        read((data)=>{
            setTimeout(() => {
                res.end(JSON.stringify(data));
            }, 2000);
        })
        return
    }
    if(pathname === '/list'){
        let id = parseInt(query.id);
        switch (req.method) {
            //删除商品
            case "DELETE":
                if(id){
                    read(data=>{
                        data = data.filter(item=>item.id!=id)
                        //把新的数据重新写会到json文件里
                        write(data,()=>{
                            res.end(JSON.stringify({}))
                        })
                    })
                }
                break;
                //修改商品
            case "PUT":
                let str = '';
                req.on('data',chunk=>{
                    str+=chunk
                });
                req.on('end',()=>{
                    let list  = JSON.parse(str)
                    read(data=>{
                        let lists = data.map(item=>{
                            if(item.id == id){
                                return list
                            }
                            return item
                        })
                        write(lists,()=>{
                            res.end(JSON.stringify(list))
                        })
                    })
                })
                break;
                //添加商品
            case "POST":
                let str1 = '';
                req.on('data',chunk=>{
                    str1+=chunk
                })
                req.on('end',()=>{
                    let addNew = JSON.parse(str1)
                    read(data=>{
                        addNew.id = data.length?data[data.length-1].id+1:1
                        data = [...data,addNew]
                        
                        write(data,()=>{
                            return res.end(JSON.stringify(addNew))
                            console.log(addNew)
                        })
                    })
                })
            break;    
        }
        read((data)=>{
            if(id){
                let good = data.find(item=>item.id == id)
                if(good){
                    res.end(JSON.stringify(good)) 
                }else{
                    res.end(JSON.stringify({}))
                }
            }else{
                res.end(JSON.stringify(data))
            }
        })
        return;
    }
    //分页接口
    if(pathname === '/page'){
        //offset每次五条
        let page = parseInt(query.page);
            if(!page){
                page = 1;
            }
            page = page - 1;
            //默认有下一页
        let hasmore = true;
        read((data)=>{
            // let numlist = Math.ceil(data.length/offset);
            let pagedata = data.slice(page*offset,page*offset+offset);
            // console.log(pagedata)
            let lastIndex = page*offset+offset
            //如果当前最后的索引大于data的长度，则表示没有数据了
            if(lastIndex > data.length){
                hasmore = false
            }
            res.end(JSON.stringify({
                data:pagedata,hasmore
                //hasmore:page>=numlist?false:true,
                //numlist
            }))
        })
        return
    }
    res.end('404');
}).listen(3000,()=>{
    console.log('3000启动成功');
})