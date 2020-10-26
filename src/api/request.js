import axios from 'axios'

function request(options) {
    let {type,subject,pagesize} =options,
        data={
            type,
            subject,
            pagesize,
            appkey:'ee55c004ed632222',
            sort:'rand',
            chapter:''
        };
    return new Promise((resolve,reject)=>{
        axios({
            url:'/api/driverexam/query',
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:new URLSearchParams(data).toString()
        }).then((res)=>{
            resolve(res.data);
        }).catch((err)=>{
            reject(err);
        })
    })
}

export  {request}
