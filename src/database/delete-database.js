const Database = require('./db');

Database.then(async db => {

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato pelo ID
    //const Orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3" ')
    //console.log(Orphanage)

    // deletar um dado da tabela
    //await db.run('DELETE FROM orphanages WHERE id = "2" ')
})