import axios from 'axios'

export function request(config){
    //创建axios实列
    const instance = axios.create({
        baseURL:'http://139.196.235.199',
        timeout:5000
    })

    return instance(config)
}

    // fetch('http://localhost:8080/ab').then(res=>res.json()).then(data=>{
    //     console.log(data);
    //     this.message.push(...data.data.info)
    //     this.logo = this.message.map(i => i.icon.replace('/{size}',''))
    //     console.log(this.logo.length)
    // })