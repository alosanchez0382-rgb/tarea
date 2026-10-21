export const index = (req,res)=> {
    res.json({message:"Bienvenido al api de tareas"});

};

export const ping = (req,res)=> {
    res.json({message:"pong"});

}