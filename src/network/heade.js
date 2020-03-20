import {request} from './request'

export function getHead(){
    return request({
        url:'/heade',
    })
}
