const almacenar=[];


function agregarLibro(titulo, autor, aPublicacion,ISBN){

  const libro={
    titulo,autor,aPublicacion,ISBN
  };
  
  almacenar.push(libro);
  console.log("Libro agregado:", libro);
}

function listasLibros(){
  if(almacenar.length===0){
    console.log("no hay libros en la lista");
    return;
  }
  console.log("lista de libros:", almacenar);
}

function BuscarLibro(titulo){

if(almacenar.length){
  for(let i= 0; i<almacenar.length; i++){
    if(almacenar[i].titulo===titulo){

      console.log("libro Encontrado:", almacenar[i]);
      return;
    }
}
}
}

function BuscarAutor(autor){
  if(almacenar.length){
    for(let i= 0; i<almacenar.length; i++){
      if(almacenar[i].autor===autor){

        console.log("autor encontrado:", almacenar[i]);
        return;
      }
  }
  }
}
agregarLibro("Cien años de soledad","Gabriel garcia marquez",1967,"1234567890");
agregarLibro("Don Quijote de la Mancha","Miguel de cervantes",1605,"0987654321");
listasLibros();
BuscarLibro('Cien años de soledad');
BuscarAutor('Gabriel garcia marquez');
