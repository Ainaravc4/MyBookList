class BookList{
    constructor(){
        this.myBooks=[];
        this.currentBook=0;
        this.numNoLeido=0;
        this.ultimo
    }

    add(book){
        this.myBooks.push(book);
    }

    finishCurrentBook(){
        if(this.currentBook<=this.myBooks.length)
            this.currentBook++;
        this.myBooks[this.currentBook-1].read=true;
        this.myBooks[this.currentBook-1].readDate= new Date();
        this.ultimo=this.currentBook;
        //return this.ultimo;

    }

    siguienteLibro(){
        for(this.i of this.myBooks)
            if(this.i.read==false)
                return this.i;
    }
    borrar(n){
        delete this.myBooks[n];
    }

    get libroActual(){
        return this.myBooks[this.currentBook];//esto coje el libro que esta en la posicion indicada
    }

    get librosLeidos(){
        return this.myBooks.filter((libro)=>libro.read).length;//si devuelve falso lo quista de la lista
    }
    
    get librosSinLeer(){
        return this.myBooks.filter((libro)=>!libro.read).length;
    }
    get total(){
        return this.myBooks.length;
    }


}

class Book{
    constructor(title, genre, author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.readDate= 0;

    }
}

export{Book, BookList};