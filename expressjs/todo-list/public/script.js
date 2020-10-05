console.log('Life is pain, your Highness. Anyone who says different is selling something.')
console.log('THE ENTIRE BEE MOVIE SCRIPT');

function todos() {
    axios.get('/api/todos').then(function (response) {
        console.log(response.data);
        const idlist = response.data.map(currentid => {
        return `<li id="${currentid.id}">${currentid.id}</li>
        <li id=${currentid.todo}>${currentid.todo}</li>`
        })
        return idlist.join();
    })      
}

window.addEventListener('DOMContentLoaded', function () {
    const idList = document.querySelector('#idlist')
    idList.innerHTML = todos();
});