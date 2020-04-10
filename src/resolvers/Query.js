// Query is used for searching
const Query = {
    comments(parent,args,{db},info){
        if(!args.query){
            return db.comments
        }
    },
    posts(parent,args,{db},info){
        if(!args.query){
            return db.posts
        }
        return db.posts.filter((post)=>{
            const isTitleMatch = post.title.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
            const isBodyMatch = post.body.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },
    users(parent,args,{db},info){
        if(!args.query){
            return db.users
        }
        return db.users.filter((user)=>{
            return user.name.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
        })
    },
    me(){
       return {
           id: '123098',
           name: 'Ferb',
           email: 'Ferbious@gmail.com',
       }
   },
    post(){
        return{
        id:'45698a',
        title:'Selling Drug Online',
        body:'It is good to use drug or not',
        published:false
    }
   } 
}

export {Query as default}