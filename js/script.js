'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');
  console.log(event);

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  event.preventDefault();
  const clickedElement = this;
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');


  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /*  [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = ''){

  /* [DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* [DONE] for each article */

  let html ='';

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for(let article of articles){



    /* [DONE] get the article id */

    const articleId = article.getAttribute('id');

    /* [DONE] find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId +  '"><span>' + articleTitle +  '</span></a></li>';
    console.log(linkHTML);

    /* create HTML of the link */

    titleList.insertAdjacentHTML('beforeend', linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;

}

generateTitleLinks();
const links = document.querySelectorAll('.titles a');
console.log(links);

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function generateTags(){
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for(let article of articles){

    /* find tags wrapper */

    const titleList = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */

    let html='';

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){
      console.log(tag);

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('Created HTML of the link');

      /* add generated code to html variable */

      html = html + linkHTML;
    }

    /* END LOOP: for each tag */


    /* insert HTML of all the links into the tags wrapper */

    titleList.innerHTML = html;

  /* END LOOP: for every article: */
}
}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;
  console.log('Tag was clicked');

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-','');

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}


function addClickListenersToTags(){
  /* find all links to tags */

  const allTagLinks = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */

  for(let allTagLink of allTagLinks){

    /* add tagClickHandler as event listener for that link */

    allTagLink.addEventListener('click' , tagClickHandler);
    console.log(allTagLink);

  /* END LOOP: for each link */
}
}

addClickListenersToTags();

function generateAuthors(){
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* START LOOP: for every article: */

  for(let article of articles){

    /* find authors wrapper */

    const titleList = article.querySelector(optArticleAuthorSelector);
    console.log(article);

    /* make html variable with empty string */

    let html='';

    /* get author from data-author attribute */

    const articleAuthor = article.getAttribute('data-author');
    console.log(articleAuthor);

    /* generate HTML of the link */

    const linkHTML = '<a href ="#author' + articleAuthor + '"><span>' + articleAuthor + '</span></a>';
    console.log('Created html of the link');

    /*  add generated code to html variable */

    html = html + linkHTML;
    console.log(html);

     /* insert HTML of all the links into the authors wrapper */

     titleList.innerHTML = html;

      /*End loop for every article */

  }
}

function addClickListenersToAuthors(){

  /* [DONE] find all links to authors */

  const allAuthorLinks = document.querySelectorAll('a[href^="#author"]');

  /* [DONE] start loop: for each link */

  for(let allAuthorLink of allAuthorLinks){

    /* [DONE] add AuthorClickHandler as event listener for that link */

    allAuthorLink.addEventListener('click', authorClickHandler);
    // console.log(allAuthorLink);

  /* [DONE] end loop: for each link */
  }
}

addClickListenersToAuthors();

function authorClickHandler(event){

  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make a new constant named "ClickedElement" and give it value of "this" */

  const clickedElement = this;
  // console.log(clickedElement);

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');
  // console.log(href);

  /* [DONE] make a new constant author and extract author from the href  constant */

  const author = href.replace('#author', '');
  // console.log(author);

  /* [DONE] find all authors links with class active */

  const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author"]');
  // console.log(activeAuthorLinks);

  /* [DONE] start loop for each active author link */

  for(let activeAuthorLink of activeAuthorLinks){

    /* [DONE] remove class active */

    activeAuthorLink.classList.remove('active');

    /* end loop for each active author link */

  }

  /* [DONE] find all author links with href attribute equal to the href constant */

  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  // console.log(authorLinks);

  /* [DONE] start loop for each found author link */

  for(let authorLink of authorLinks){

    /* [DONE] add class active */

    authorLink.classList.add('active');
    // console.log(authorLink);

    /* [DONE] end loop for each found author link */

  }

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-author="' + author + '"]');

}
