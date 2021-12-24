const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function saveUsers(newUsers) {
    fs.writeFileSync(usersFilePath, JSON.stringify(newUsers));
}


const userController = {
    detailUser: function(req,res){
        const  id = req.params.id;
        const product = productos.find( item => item.id == id);

        if(user === null){
            res.send("No existe este usuario");
        }else{
            res.send("detallesDeUsuario",{user: users});
        }
    },

    createUserView: function(req,res){
        res.render('formularioDeRegistro');
    },

    createUser: function(req,res){
        const newUser ={
            id: users[-1].id + 1,
            ... req.body,
            image: 'default.png'
        }
        users.push(newUser);
        saveUsers(users);
        res.redirect('/');

    },

    deleteUser: function(req,res){
        const id = req.params.id;
        const finalUsers = users.filter(user => user.id != id);
        saveUsers(finalUsers);
        res.redirect('/');
    },

    updateUser: function(req,res){
        const id = req.params.id;
        let  producToEdit = users.find(user => user.id == id);
        producToEdit = {
            id: producToEdit.id,
            ...req.body,
        };

        const finalUsers = users.map(user => {
            if(user.id == producToEdit.id) {
                return user = {...producToEdit};
            }
            return user;
        });

        saveUsers(finalUsers);
        res.redirect('/');
    }
};

module.exports = userController;