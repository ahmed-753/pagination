


async function  getData(){
    const reponse = await  fetch(
        `https://jsonplaceholder.typicode.com/posts`
    );
    const data = await reponse.json();
    return data
}

async function main(){
    const postsData = await  getData();
    let currentPage = 5
    let postsPer = 10

    function  displayList( arrData,rowPerPage,page){
        const postsWrapper = document.querySelector('.posts')
        postsWrapper.innerHTML = '';
        page--;

        const start = rowPerPage * page ;
        const end = start + rowPerPage;
        const  paginationData = arrData.slice(start,end)

        paginationData.forEach((el) => {
            const post = document.createElement('div')
            post.classList.add = ('post')
            post.innerHTML = `<span>${el.id}</span>-${el.title}`
            postsWrapper.appendChild(post)
        })
    }

    function displayPagination(arrData,rowPerPage) {
        const paginationWrapper = document.querySelector('.pogination')
        const pagesCount = Math.ceil(arrData.length / rowPerPage);

        const ulListWrapper = document.createElement('ul')

        ulListWrapper.classList.add('pogination__list')

        for (let i = 0; i < pagesCount; i++) {
            const liBtnEl = displayPaginatoonBtn(i + 1);
            liBtnEl.textContent = i + 1
            ulListWrapper.appendChild(liBtnEl)
        }
        paginationWrapper.appendChild(ulListWrapper)
    }

    function  displayPaginatoonBtn(page){
        const  liBtnEl = document.createElement('li')
        liBtnEl.classList.add('pogination__item')
        liBtnEl.textContent = page;
        liBtnEl.addEventListener('click', () =>{
            currentPage = page;

            if(currentPage = page) liBtnEl.classList.add('pogination__item-active')

            displayList(postsData,postsPer,currentPage);
            let currentItemLi = document.querySelector('.pogination__item-active')
            currentItemLi.classList.remove('c')

            liBtnEl.classList.add('pogination__item-active')
        });
        return liBtnEl;
    }

displayList(postsData,postsPer,currentPage);
    displayPagination(postsData,postsPer);
}
main()