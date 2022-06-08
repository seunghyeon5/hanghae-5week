class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        if (this.boards.find(i => i.name === board.name))
            throw error;
        board.addBoard = true;
        return this.boards.push(board);
    }
    findBoardByName(board) {
        return this.boards.find(i => i.name === board);
    }

}

class Board {
    constructor(name) {
        if (name === "" || name === null) {
            throw "error";
        }
        this.addBoard = false;
        this.name = name;
        this.articles = [];
    }
    publish(article) {
        if (!this.addBoard) {
            throw "erorr";
        }
        article.publish = true;
        article.id = `${this.name}-${Math.random()}`
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article){
       const {subject, content, author} = article;
       this.comment = [];
       
       if(subject === "" || subject === null){
            throw "error"
       } 
       if(author === "" || author === null){
            throw "error"
       } 
       if(content === "" || content === null){
            throw "error" 
       } 
       this.subject = subject;
       this.author = author;
       this.content = content;
    }
    reply(comment){
        if(!this.publish){
            throw "error"
        }
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);
    }
    getAllComments(){
        return this.comment;
    }
}

class Comment {
    constructor(comment){
        const {content, author} = comment;
        if(content === "" || content === null){
            throw "error" 
        } 
        if(author === "" || author === null){
            throw "error"
        } 
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};