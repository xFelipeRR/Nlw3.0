const Database = require('./db')
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
    lat: "-4.1327695",
    lng: "-38.234493",
    name: "Lar dos garotos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "98972578",
    images: [
        "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1595803330237-83a3a8698450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours:"Horários de visitas Das 8h até 18h",
    open_on_weekends: "0"
        

    })
    
    
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);

    

    
})