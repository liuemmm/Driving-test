import {request} from './request'

export default async (store,options)=>{
    let {type,subject,pagesize}=options;
    let data = await request({
        type,
        subject,
        pagesize,
        chapter:''
    });
    store.commit('setData',data.result.list);
    store.commit('setMsg',data.msg)
    console.log(store.state);
}
