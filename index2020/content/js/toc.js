document.addEventListener('DOMContentLoaded', function () {
    // Get qa-list position
    var contentsList = document.getElementById('toc');
    var div = document.createElement('div');

    // Get <dt> in .qa-entry
    var matches = document.querySelectorAll('dl.qa-entry>dt');

    var ul = document.createElement('ul');
    for (var i = 0; i < matches.length; i++) {
        var id = matches[i].id;
        if(id === '') {
            id = matches[i].textContent;
            matches[i].id = id;
        }

        var li = document.createElement('li');
        var a  = document.createElement('a');
        a.innerHTML = matches[i].textContent;
        a.href = '#' + matches[i].id;
        li.appendChild(a)
        ul.appendChild(li);
    }
    div.appendChild(ul);

    contentsList.appendChild(div);
});
