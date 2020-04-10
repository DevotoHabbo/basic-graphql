// Comment Array
const comments = [{
    id:'1',
    text:'This post is bullshit',
    author:'1',
    post:'1'
},{
    id:'2',
    text:'This post is not true',
    author:'1',
    post:'1'
},{
    id:'3',
    text:'This post is full of crap',
    author:'2',
    post:'2'
},{
    id:'4',
    text:'This post is kinda bad',
    author:'3',
    post:'3'
}]


// Post Array []

const posts = [{
    id:'1',
    title:'How to sell drug online',
    body:'It is not easy to do so',
    published: true,
    author: '1'
},{
    id:'2',
    title:'How to use drug',
    body:'Smoke or plug it in',
    published: false,
    author:'1'
},{
    id:'3',
    title:'How to make a portal',
    body:'Learn how to make it first',
    published: false,
    author:'2'
}]


// Users Array []

const users = [{
    id:'1',
    name:'Ferb',
    email:'ferb@gmail.com'
},{
    id:'2',
    name:'Dev',
    email:'dev@gmail.com'
},{
    id:'3',
    name:'Mike',
    email:'mike@gmail.com'
}]

const db = {
    users,
    posts,
    comments
}


export {db as default}