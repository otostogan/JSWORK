// Single Responsobility Principle

class News{
    constructor(title, text){
        this.title = title;
        this.text = text;
        this.modified = false;
    }
    update(text){
        this.text = text;
        this.modified = true;
    }
}

class NewsPrinter{
    constructor(news){
        this.news = news;
    }

    html(){
        return `
            <div class="news">
                <h1 class="news-title"> 
                    ${this.news.title}
                </h1>
                <p>
                    ${this.news.text}
                </p>
            </div>
        `;
    }
    json(){
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        });
    }
    xml(){
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `;
    }
}

const news = new News('Путин', 'Новая конситуция');
