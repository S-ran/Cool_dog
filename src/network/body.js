import {request} from './request'

export function getBody(){
    return request({
        url:'/body',
    })
}
export function getList(){
    return request({
        url:'/body/list',
    })
}
export function getNew(type){
    return request({
        url:'/body/new'+'/'+type,
    })
}
export function getMv(){
    return request({
        url:'/body/mv',
    })
}
export function getRadio(){
    return request({
        url:'/body/radio',
    })
}
export function getSinger(type){
    return request({
        url:'/body/singer'+'/'+type,
    })
}

export function getScrap(){
    return request({
        url:'/body/scrap',
    })
}