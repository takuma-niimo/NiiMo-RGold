var startSale = new Date('2019-06-04T20:00:00');
var endSale = new Date('2019-06-11T01:59:59');
var nowdt = Date.now();

if (startSale < nowdt && nowdt < endSale) {
    var list = document.getElementsByClassName('not-sale');
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }

    var priceChangeList = document.querySelectorAll('.sale-price-change li');
    for (var i = 0; i < priceChangeList.length; i++) {
        // Replace url for RSS
        var alist = priceChangeList[i].getElementsByTagName('a');
        for (var j = 0; j < alist.length; j++) {
            var url = alist[j].href;
            alist[j].href = url.replace(/\/$/, '-s/');
        }

        // Replace the value
        var spanElement = priceChangeList[i].querySelectorAll('p');
        for (var j = 0; j < spanElement.length; j++) {
            var pTagHtml = spanElement[j].innerHTML;
            if (pTagHtml.match(/span.*円.*span/)) {
                var priceSource = Number(spanElement[j].innerHTML.match(/[\d,]+/)[0].replace(/,/, ''));
                var priceSale = Math.ceil(priceSource * 0.9);
                console.log(priceSource.toLocaleString() + ',' + priceSale.toLocaleString());
                spanElement[j].innerHTML = '<s>' + priceSale.toLocaleString() +
                                           '&nbsp;円</s>' + pTagHtml;
            }
        }
    }

} else {
    var list = document.getElementsByClassName('sale-only');
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'none';
    }
}
