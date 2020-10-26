export default {
    setData(state,data){
        state.data=data;
        localStorage.setItem('data',JSON.stringify(data));
    },
    setMsg(state,msg){
        state.msg=msg;
    },
    setHeaderTitle(state,routerName){
        switch ((routerName)) {
            case 'index':
                state.headerTitle='驾照考题';
                break;
            case 'test':
                state.headerTitle='正在答题';
                break;
            case 'result':
                state.headerTitle='答题结果';
                break;
            default:
                state.headerTitle='驾照题库';
                break;
        }
    },
    setTestAns(state,msg){
        let {index,pick}=msg;
        state.data[index].pick=pick;
        localStorage.setItem('data',JSON.stringify(state.data));
    }
}
