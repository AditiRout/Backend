homy=(req,res)=>{
    res.render('index',{title:"home"})//directly looks inside the views so directly mention name of ejs file
}

class home {
    
    static set_cookie=(req,res)=>{
        res.send('Cookie set')
    }
    static get_cookie=(req,res)=>{
        res.send('Cookie get')
    }
    static delete_cookie=(req,res)=>{
        res.send('Cookie delete')
    }

}

module.exports= {homy,home}