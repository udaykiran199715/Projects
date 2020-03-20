var idlyQuantity = document.getElementById("idlyQuantity")
var idlyPrice = document.getElementById("idlyPrice")

var dosaQuantity = document.getElementById("dosaQuantity")
var dosaPrice = document.getElementById("dosaPrice")

var chapathiQuantity = document.getElementById("chapathiQuantity")
var chapathiPrice = document.getElementById("chapathiPrice")

var puriQuantity = document.getElementById("puriQuantity")
var puriPrice = document.getElementById("puriPrice")

var noodlesQuantity = document.getElementById("noodlesQuantity")
var noodlesPrice = document.getElementById("noodlesPrice")

var parathaQuantity = document.getElementById("parathaQuantity")
var parathaPrice = document.getElementById("parathaPrice")

function idly() {

    var bill = document.getElementById("bill")
    bill.setAttribute('class', 'add')


    //print idly

    var row2 = document.createElement('tr')
    var col2_1 = document.createElement('td')
    col2_1.textContent = "Idly"
    col2_1.setAttribute('class', 'col')

    var col2_2 = document.createElement('td')
    col2_2.textContent = idlyQuantity.value
    col2_2.setAttribute('class', 'col')

    var col2_3 = document.createElement('td')
    col2_3.textContent = idlyPrice.value
    col2_3.setAttribute('class', 'col')

    var col2_4 = document.createElement('td')
    col2_4.textContent = (idlyQuantity.value * idlyPrice.value)
    col2_4.setAttribute('class', 'col')

    row2.append(col2_1)
    row2.append(col2_2)
    row2.append(col2_3)
    row2.append(col2_4)

    bill.append(row2)


}


function dosa() {

    var row3 = document.createElement('tr')
    var col3_1 = document.createElement('td')
    col3_1.textContent = "Dosa"
    col3_1.setAttribute('class', 'col')

    var col3_2 = document.createElement('td')
    col3_2.textContent = dosaQuantity.value
    col3_2.setAttribute('class', 'col')

    var col3_3 = document.createElement('td')
    col3_3.textContent = dosaPrice.value
    col3_3.setAttribute('class', 'col')

    var col3_4 = document.createElement('td')
    col3_4.textContent = (dosaQuantity.value * dosaPrice.value)
    col3_4.setAttribute('class', 'col')

    row3.append(col3_1)
    row3.append(col3_2)
    row3.append(col3_3)
    row3.append(col3_4)

    bill.append(row3)


}

function chapathi() {

    var row4 = document.createElement('tr')
    var col4_1 = document.createElement('td')
    col4_1.textContent = "Chapathi"
    col4_1.setAttribute('class', 'col')

    var col4_2 = document.createElement('td')
    col4_2.textContent = chapathiQuantity.value
    col4_2.setAttribute('class', 'col')

    var col4_3 = document.createElement('td')
    col4_3.textContent = chapathiPrice.value
    col4_3.setAttribute('class', 'col')

    var col4_4 = document.createElement('td')
    col4_4.textContent = (chapathiQuantity.value * chapathiPrice.value)
    col4_4.setAttribute('class', 'col')

    row4.append(col4_1)
    row4.append(col4_2)
    row4.append(col4_3)
    row4.append(col4_4)

    bill.append(row4)


}

function puri() {

    var row5 = document.createElement('tr')
    var col5_1 = document.createElement('td')
    col5_1.textContent = "Puri"
    col5_1.setAttribute('class', 'col')

    var col5_2 = document.createElement('td')
    col5_2.textContent = puriQuantity.value
    col5_2.setAttribute('class', 'col')

    var col5_3 = document.createElement('td')
    col5_3.textContent = puriPrice.value
    col5_3.setAttribute('class', 'col')

    var col5_4 = document.createElement('td')
    col5_4.textContent = (puriQuantity.value * puriPrice.value)
    col5_4.setAttribute('class', 'col')

    row5.append(col5_1)
    row5.append(col5_2)
    row5.append(col5_3)
    row5.append(col5_4)

    bill.append(row5)

}

function noodles() {

    var row6 = document.createElement('tr')
    var col6_1 = document.createElement('td')
    col6_1.textContent = "Noodles"
    col6_1.setAttribute('class', 'col')

    var col6_2 = document.createElement('td')
    col6_2.textContent = noodlesQuantity.value
    col6_2.setAttribute('class', 'col')

    var col6_3 = document.createElement('td')
    col6_3.textContent = noodlesPrice.value
    col6_3.setAttribute('class', 'col')

    var col6_4 = document.createElement('td')
    col6_4.textContent = (noodlesQuantity.value * noodlesPrice.value)
    col6_4.setAttribute('class', 'col')

    row6.append(col6_1)
    row6.append(col6_2)
    row6.append(col6_3)
    row6.append(col6_4)

    bill.append(row6)

}

function paratha() {

    var row7 = document.createElement('tr')
    var col7_1 = document.createElement('td')
    col7_1.textContent = "Paratha"
    col7_1.setAttribute('class', 'col')

    var col7_2 = document.createElement('td')
    col7_2.textContent = parathaQuantity.value
    col7_2.setAttribute('class', 'col')

    var col7_3 = document.createElement('td')
    col7_3.textContent = parathaPrice.value
    col7_3.setAttribute('class', 'col')

    var col7_4 = document.createElement('td')
    col7_4.textContent = (parathaQuantity.value * parathaPrice.value)
    col7_4.setAttribute('class', 'col')

    row7.append(col7_1)
    row7.append(col7_2)
    row7.append(col7_3)
    row7.append(col7_4)

    bill.append(row7)

}



function total() {

    var num1 = idlyQuantity.value * idlyPrice.value

    var num2 = dosaQuantity.value * dosaPrice.value

    var num3 = chapathiQuantity.value * chapathiPrice.value

    var num4 = puriQuantity.value * puriPrice.value

    var num5 = noodlesQuantity.value * noodlesPrice.value

    var num6 = parathaQuantity.value * parathaPrice.value

    var sum = num1 + num2 + num3 + num4 + num5 + num6
    console.log(sum)

    // var sel = document.getElementById("sel").value
    // console.log(sel)

    var gst = sum * 5 / 100
    console.log(gst)
    var totalGst = sum + gst

    var bill = document.getElementById("bill")
    bill.setAttribute('class', 'add')

    var row8 = document.createElement('tr')
    var col8_1 = document.createElement('td')
    col8_1.textContent = "GST"
    col8_1.colSpan = 2

    var col8_2 = document.createElement('td')
    col8_2.textContent = "5%"
    col8_2.colSpan = 2

    var row9 = document.createElement('tr')
    var col9_1 = document.createElement('td')
    col9_1.textContent = "DISCOUNT"
    col9_1.colSpan = 2
    col9_1.setAttribute('class', 'col')

    var col9_2 = document.createElement('td')
    col9_2.textContent = "10%"
    col9_2.colSpan = 2
    col9_2.setAttribute('class', 'col')

    var row10 = document.createElement('tr')
    var col10_1 = document.createElement('td')
    col10_1.textContent = "Total"
    col10_1.colSpan = 3
    col10_1.setAttribute('class', 'col')

    col10_2 = document.createElement('td')
    col10_2.setAttribute('class', 'col')



    row8.append(col8_1)
    row8.append(col8_2)
    row9.append(col9_1)
    row9.append(col9_2)
    row10.append(col10_1)
    row10.append(col10_2)

    bill.append(row8)
    bill.append(row9)
    bill.append(row10)

    var sel = document.getElementById("sel").value
    console.log(sel)

    var discount = sum * 10 / 100
    console.log(discount)
    var sumDis = sum - discount + gst

    if (sum < 100) {
        row8.remove()   
        col9_1.remove()
        col9_2.remove()
        col10_2.textContent = sum

    } else if (sum > 100 & sel == 'SELECT') {
        col9_1.remove()
        col9_2.remove()
        col10_2.textContent = totalGst
    } else if (sel == 'WEDNESDAY HUNGAMA' & sum > 100) {
        col10_2.textContent = sumDis
    }
    else if (sel == 'FRIDAY FUN' & sum > 100) {
        col10_2.textContent = sumDis
    } else if (sel == 'SUNDAY DHAMAKA' & sum > 100) {
        col10_2.textContent = sumDis
    }


    var row11 = document.createElement('tr')
    var col11_1 = document.createElement('td')
    var img1 = document.createElement('img')
    img1.src="https://t4.ftcdn.net/jpg/02/43/55/79/240_F_243557949_n5gXht1IpYcgzRMFa9bd5KH7mG4rsWYV.jpg"
    col11_1 = img1
    //col10_1.setAttribute('class', 'col')

    var col11_2 = document.createElement('td')
    //var img = document.createElement('img')
    col11_2.textContent = "Thank you Visit Again"
    col11_2.colSpan = 2
    col11_2.setAttribute('class', 'thank')
    
    var col11_4 = document.createElement('td')
    var img2 = document.createElement('img')
    img2.src="https://t4.ftcdn.net/jpg/02/43/55/79/240_F_243557949_n5gXht1IpYcgzRMFa9bd5KH7mG4rsWYV.jpg"
    col11_4 = img2
    //col10_1.setAttribute('class', 'col')

    row11.append(col11_1)
    row11.append(col11_2)
    row11.append(col11_4)
    bill.append(row11)
}
