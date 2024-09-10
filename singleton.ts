//comenzamos la clase excalibur

class Excalibur {
    //vamos a crear la instancia, la vamos hacer privada y estatica, porque la idea es no acceder a la instancia de manera directa
    //sino que solo sea la clase quien acceda a ella
    private static instance: Excalibur | null = null; //la inicializamos en null

    //luego definimos el constructor, va a ser privado para evitar la instanzacion externa, es decir
    //evitar que se use new para instanciar un nuevo objeto
    private constructor(){}

    //definimos el metodo getinstance, haciendolo publico y estatico, devolviendo una instancia de excalibur   
    //este metodo va a ser estatico para obtener la instancia unica 
    /*
    cuando decimos que un metodo es estatico es porque pertenece a la clase en si misma en lugar de pertenecer a las instancias
    individuaes, es decir a los objetos q se crean a partir de la clase, por tanto podremos acceder a getinstance sin la necesidad
    de instanciar la clase excalibur y esto es conveniente porque el constructor no es accesible ya q lo hemos declarado como privado
    */
    public static getInstance():Excalibur {
        //validamos q la inst no exista previamente
        if(!Excalibur.instance){
            //si no existe la creamos y mostramos un mensaje por unica vez
            Excalibur.instance = new Excalibur();
            console.log("se ha forjado la espada")
        }
        return Excalibur.instance;
        //asi nos aseguramos q solo exista una 
    }

    //finalmente agrego un metodo como parte de la logica del negocio que será adaptado al requerimiento
    public portaEspada(): void{
        console.log("el elegido empuña la espada!");
    }
}

//con esta analogia crearemos 2 portadores de la espada, el rey arturo y un paladin
//amnbor podran obtener la instancia de la espada
const espadaReyArturo = Excalibur.getInstance();
const espadaPaladin = Excalibur.getInstance();
espadaReyArturo.portaEspada();
espadaPaladin.portaEspada();
//primero el rey arturo y luego el paladin, lo q aqui pasa es que ambos estan usando la misma espada, el mismo objeto, la misma
//instancia de excalibur
console.log(espadaReyArturo==espadaPaladin);
console.log(espadaReyArturo, espadaPaladin);
/*
como vemos en la salida de la terminal el primer mensaje q muestra es q se ha forjado la legendaria espada, esto es porque no existia
la instancia previamente, asi q a partir de ahi cualquier otro llamado a getInstance simplemente va a omitir la creacion y retorna 
la instancia actual
Como 2do y 3er mensaje 
el ultimo mensaje vemos la comparacion de nuestro log, verificamos q la espada del rey arturo es la del paladin pq de hecho son el mismo objeto
es la misma instancia de la clase
*/