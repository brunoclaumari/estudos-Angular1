class CardNews extends HTMLElement{

    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});   
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const autor = document.createElement("span");
        autor.textContent = `By ${this.getAttribute("autor") || "Anonymous"}`;

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");  
        newsContent.textContent = this.getAttribute("content");
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("image") || "../../assets/pessoa_default.jpg";
        newsImage.alt = "Foto notícia"

        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
        .card {
            width: 80%;
            box-shadow: 8px 10px 29px 4px rgba(0, 0, 0, 0.76);
            -webkit-box-shadow: 8px 10px 29px 4px rgba(0, 0, 0, 0.76);
            -moz-box-shadow: 8px 10px 29px 4px rgba(0, 0, 0, 0.76);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          
          .card__left {
              /* width: 70%; */
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 10px;
          }
          .card__left > a {
              margin-top: 15px;
              font-size: 25px;
              color: black;
              text-decoration: none;
          }
          
          .card__left > span{
              font-weight: 400;
          }
          
          .card__left > p{
              color: rgb(70, 70, 70);
          }
          
          .card__right {
              width: 30%;
          }
          
          .card__right > img {
              width: 100%;              
          }
          
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);