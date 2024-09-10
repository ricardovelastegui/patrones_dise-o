//ejemplo SINGLETON para manejar base de datos

//queremos crear una database, no queremos que haya muchas, solo una 
class  Database {
    private static instance: Database;
    private constructor(){}

    public static getInstance(): Database{
        if(!Database.instance){ //preguntamos si ya existe la instancia si si no hace nada y dame la q ya tienes, sino crea una nueva instancia 
            Database.instance = new Database();
        }
        return Database.instance;
    }
    public query(query: string): void{
        console.log(`executing query: ${query}`)
    }
}

//ahora puedo..no se, crear ya mi base de datos, nono! que hablo, ya no la tengo ni q crear
//automaticamente se va a crear

const db = Database.getInstance();
db.query('CREATE TABLE Productos ( ProductoID INT PRIMARY KEY, Nombre NVARCHAR(50),Precio DECIMAL(10, 2),Stock INT);')

/*
no tengo a andar CONTROLANDO que la creacion ni nada, lo hace automatico
*/

