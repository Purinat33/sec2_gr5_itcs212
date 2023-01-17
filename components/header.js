/*

https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

*/

class Header extends HTMLElement{
    constructor(){
        super();
    }
//Define code snippets
    connectedCallback(){
        this.innerHTML = `
            <style>
                nav{
                    height: 40px;
                    display: box;
                    padding-top: 6px;
                    align-items: center;
                    justify-content: center;
                    background-color: gray;
                }

                ul, li{
                    list-style: none;
                    display: inline;
                }

                .home{
                    margin: auto;
                    margin-top: 0px;
                    width: 0%;
                    position: relative;
                    top: -5px
                }

                .button{
                    position: absolute;
                    right: 55px;
                    margin: auto;
                }

                .search{
                    position: absolute;
                    right: 5px;
                    margin: auto;
                    top: 4px;
                }


            </style>
            <header>
                <nav>
                    <ul class="home">
                        <li><a href="../index.html" target="_self"><img src="../img/home.png" alt="home" width="40" height="40"></a></li>
                    </ul>
                    <ul class="button">
                        <li ><a href="../html/login.html" target="_self"><img src="../img/login.png" alt="login" height="30"></a></li>
                        <li><a href="../html/register.html" target="_self"><img src="../img/register.png" alt="register" height="30"></a></li>
                        
                    </ul>

                    <ul class="search">
                    <li><a href="../html/search.html"><img src="../img/search.png" alt="search" width="35" height="35"></a></li>
                    </ul>
                </nav>
            </header>
            `
    }

}

class Footer extends HTMLElement{
   constructor(){
        super();
    } 
    connectedCallback(){
        this.innerHTML = `
<style>
                nav{
                    height: 40px;
                    display: box;
                    padding-top: 6px;
                    align-items: center;
                    justify-content: center;
                    background-color: gray;
                }

                ul, li{
                    list-style: none;
                    display: inline;
                }

                .home{
                    margin: auto;
                    
                    width: 0%;
                }

                .button{
                    position: absolute;
                    right: 55px;
                    margin: auto;
                }

                .search{
                    position: absolute;
                    right: 5px;
                    margin: auto;
                }

                footer{
                    position: absolute;
                    display: box;
                    bottom: 0;
                    width: 100%;
                    height: 50px;
                    height: 2.5rem;
                }


            </style>
            <footer>
                <nav>
                    
                </nav>
            </footer>
            
        `
    }
}



customElements.define('foot-banner', Footer);
customElements.define('head-banner', Header);