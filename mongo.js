// db.posts.insertMany([
//     {
//         name:'one',
//         title:'sea',
//         tags:['tech','news'],
//         likes:3,
//         url:'www.inshta.in',
//         date:new Date("2022-02-12"),
//         comments:{
//             user:'astha',
//             mssg:'very good',
//             likes:0,
//             date:new Date()

//         }
//     },
//     {
//         name:'two',
//         title:'stars',
//         tags:['ocean','news'],
//         likes:6,
        
//         date:new Date("2022-02-24"),
//         comments:[{
//             user:'ananya',
//             mssg:'very good',
//             likes:67,
//             date:new Date()

//         }]
//     },
//     {
//         name:'third',
//         title:'science',
//         tags:['tech','news','educate'],
//         likes:100,
//         url:'www.inshta.in',
//         date:new Date("2022-02-12"),
        
//     }
//     ]
// )

// db.posts.find({likes:100})
// db.posts.find({$and:[{likes:100},{name:"third"}]})//anything inside curly braces then : used for equality 
// db.posts.find({$or:[{likes:100},{name:"two"}]})
// db.posts.find({$nor:[{likes:6},{name:'third'}]})
// db.posts.find({likes:{$not:{$gt:10}}})
// db.posts.find({likes: {$gt:10}, $or: [{by: "tutorials point"},
//    {title: "MongoDB Overview"}]}).pretty()
// db.posts.find().sort({title:1,name:1}).pretty()
// db.posts.createIndex({"title":1})
// db.posts.getIndexes()
// db.posts.dropIndexes({title:1})


module.exports.people=[
    {name:"one",id:1},
    {name:"two",id:2},
    {name:"three",id:3},
    {name:"four",id:4},
    {name:"five",id:5}
]

//module.exports={people}
