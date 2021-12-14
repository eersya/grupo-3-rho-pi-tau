const users = require('./users');

const path = require('path');
const fs = require('fs');

const userController = {
    detailUser = function(req,res){
        const  id = req.params.id;
        const product = productos.find( item => item.id == id);

        if(user === null){
            res.send("No existe este usuario");
        }else{
            res.send("detallesDeUsuario",{user: users});
        }
    },

    createUser: function(req,res){

    },

    deleteUser: function(req,res){
        const id = req.params.id;
    },

    updateUser: function(req,res){

    }
};

module.exports = userController;