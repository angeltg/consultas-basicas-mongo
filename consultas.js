db.createUser({
    user: 'Fazt',
    pw: '123',
    roles: ['readWrite','dbAdmin']
})

db.clientes.insert({
    firstName:'Issac',
    lastName: 'Asimov'
})
db.clientes.insert([
    { firstName: 'Elena', lastName: 'Gracía'},
    { firstName: 'Juan', lastName: 'Lopez'},
    { firstName: 'Peni', lastName: 'Fernandez'}
    ])
db.clientes.find({firstName:'Issac'});
db.clientes.update({firstName: 'Issac'},
                    { firstName: 'Issac',
                    lastName: 'Asimov',
                    dni: '32545785h'})

// Para modificar sólo un dato
db.clientes.update({_id: ObjectId('5cfe7865defa8e49d47c2ec6')},
                    { $set: {age: 45}})
//Para incremtar un valor en 5
db.clientes.update({_id: ObjectId('5cfe7865defa8e49d47c2ec6')},
                    { $inc: {age: 5}})
//Para decrementar un valor en 1
db.clientes.update({_id: ObjectId('5cfe7865defa8e49d47c2ec6')},
                    { $inc: {age: -1}})                    
//Para borrar un campo
db.clientes.update({_id: ObjectId('5cfe7865defa8e49d47c2ec6')},
                    { $unset: {age: 1}})
//Intenta modificar la colección y si no lo encuentra lo crea              
db.clientes.update({firstName: "Sonia"}, { $set: { firstName: "Sonia"}}, {upsert:true })
// Para renombra un campo
db.clientes.update({firstName: "Sonia"}, { $rename: {"firstName" : "primerNombre"}})
//Para eliminar un registro. Con justOne solo borra un registro.
db.clientes.remove({_id: ObjectId("5cfe79c9defa8e49d47c2ec7")},{justOne: true})

//Para busquedas por varias coincidencias
db.clientes.find({
    $or: [{firstName: 'Elena'}, {firstName: 'Juan'}]
})

//Insertamos datos para búsqueda numérica
db.clientes.insert([
    {
        firstName: "Ramiro",
        lastName: "Suarez",
        age: 55
    },
    {
        firstName: "Patricia",
        lastName: "Corral",
        age: 37
    },
    {
        firstName: "Iago",
        lastName: "Fernández",
        age: 41
    }
])
//Busca mayores de 40
db.clientes.find({ age: { $gt: 40 }})
//Busca menores de 40
db.clientes.find({ age: { $lt: 40 }})
//Busca mayores de 40 y menores de 50
db.clientes.find({ age: { $gt: 40, $lt:50 }})

db.clientes.insert({
    firstName: "Antonio",
    lastName: "Banderas",
    address: {
        streat: "Real",
        city: "London"
    }
})
db.clientes.find({ "address.city": "London"})

//Buscar los campos que contengan como LIKE %nio%
db.clientes.find({ firstName: {$regex: "nio"}});

//Para ordenar de A a Z
db.clientes.find().sort({lastName: 1})
//Para ordenar de Z a A
db.clientes.find().sort({lastName: -1})
//El contador
db.clientes.count()
db.clientes.find({"address.city":"London"}).count()

//Limitados
db.clientes.find().limit(3)

//Usando javascript
db.clientes.find().forEach(function(doc){ print(doc.firstName)})