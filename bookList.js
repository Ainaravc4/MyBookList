import{Book, BookList} from "./clases.js"

var lista= new BookList();
var n=0;
window.addEventListener("load",main);

function main(){
    document.getElementById("subir").addEventListener("click",inicializar); 

    document.getElementById("lap").addEventListener("click",editarLibro);
    
}
 
function inicializar(){
    cargarDatos();
    crearTabla();
}


function cargarDatos(){

    let titulo=document.getElementById("titulo").value;
    let genero=document.getElementById("genero").value;
    let autor=document.getElementById("autor").value;

    lista.add(new Book(titulo,genero,autor));

    document.getElementById("titulo").value="";
    document.getElementById("genero").value="";
    document.getElementById("autor").value="";
    
    document.getElementById("total").textContent="Total de Libros: "+lista.total;
    document.getElementById("noLeidos").textContent="Nº Libros sin leer:"+lista.librosSinLeer;
    
}

function crearTabla(){  
    n++;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var tr= document.createElement("tr");
    var tdTi= document.createElement("td");
    var tdGe= document.createElement("td");
    var tdAu= document.createElement("td");
    var tdLe= document.createElement("td");
    var tdDa= document.createElement("td");
    


    var papelera= document.createElement("img");
    papelera.src="./papelera.png";
    papelera.style.height="25px";
    papelera.id="papelera";

    for(let libro of lista.myBooks){
        
        tdTi.textContent=libro.title;
        tdGe.textContent=libro.genre;
        tdAu.textContent=libro.author;
        tdLe.textContent="-";
        tdDa.textContent="-";

        tr.appendChild(tdTi);
        tr.appendChild(tdGe);
        tr.appendChild(tdAu);

        tr.appendChild(tdLe);
        tr.appendChild(tdDa);

        tr.appendChild(papelera);       
       
    } 
    tr.addEventListener("click",(e)=>{
        e.target.parentNode.childNodes[3].textContent="Si";
        e.target.parentNode.childNodes[4].textContent=new Date().toLocaleDateString('en-EN', options);
        lista.finishCurrentBook();
        document.getElementById("leidos").textContent=" Nº Libros leidos: "+lista.librosLeidos;
        document.getElementById("noLeidos").textContent="Nº Libros sin leer: "+lista.librosSinLeer;
       
    })
    
    document.getElementById("cuerpo").appendChild(tr); 
    papelera.addEventListener("click",function(e){
        
        e.stopPropagation();
         e.target.parentNode.remove();
         lista.borrar(n);
     });


}

var cuerpo= document.getElementById("cuerpo");

function editarLibro(){
    var vtitulo=document.getElementById("vtitulo").value;
    var ntitulo=document.getElementById("ntitulo").value;
    var ngenero=document.getElementById("ngenero").value;
    var nautor=document.getElementById("nautor").value;

    var trlen=cuerpo.getElementsByTagName("tr");
    for(let tr of trlen)
        if(tr.childNodes[0].textContent==vtitulo){
            if(ntitulo!="")
                tr.childNodes[0].textContent=ntitulo;
            if(ngenero!="")
                tr.childNodes[1].textContent=ngenero;
            if(nautor!="")
                tr.childNodes[2].textContent=nautor;
        }
    
    document.getElementById("vtitulo").value="";
    document.getElementById("ntitulo").value="";
    document.getElementById("ngenero").value="";
    document.getElementById("nautor").value="";
}



