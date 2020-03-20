import {request} from './request'

export function getFoot(){
    return request({
        url:'/foot',
    })
}
