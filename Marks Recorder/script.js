var form = document.querySelector('form')
form.addEventListener('submit', function () {
    event.preventDefault()
    // formData(event.target,addData)
    formData()
})

var input = document.querySelectorAll('input')
var select = document.querySelectorAll('select')
var arr = []
var obj = {}
function formData() {
     obj = {
        student: input[0].value,
        sanskrit: Number(input[1].value),
        hindi: Number(input[2].value),
        english: Number(input[3].value),
        maths: Number(input[4].value),
        biology: Number(input[5].value),
        physics: Number(input[6].value),
        chemistry: Number(input[7].value),
        social: Number(input[8].value),
        class: select[0].value,
        section: select[1].value,
        exam: select[2].value,
        grade: select[3].value,
        
    }
    // Array.from(target).forEach(function(item,index) {
    //       data[item.name] = item.value
    //     //   target[index].value = ""
    // })
    // callback()

    //   for(var i=0;i<input.length;i++) {
    //       console.log(input[i].value)
    //         obj[input[i].name] = input[i].value
    //        // input[i].value = ''
    //     }
    console.log(obj)
    addData(obj)
}

function addData(data) {
    arr.push(data)
    console.log(arr)
    display()
}

var res = document.getElementById('res')

var table = document.createElement('table')
function display(x) {
    // res.innerHTML = ''
    table.innerHTML = ''
    
    //for(var i=0;i<arr.length;i++) {
        //    var total  = obj.sanskrit + obj.hindi + obj.english + obj.maths + obj.biology + obj.physics + obj.chemistry + obj.social
        //    console.log(total)
        //}
        //  console.log(arr[0].maths + arr[0].sanskrit)
        var row1 = document.createElement('tr')
        row1.innerHTML = '<th>' + 'Student' + '<th>' + 'Class' + '<th>' + 'Section' + '<th>' + 'Exam' + '<th>' + 'Grade' + '<th>' + 'Total'
        table.append(row1)
        for(var i=0;i<arr.length;i++) {
            // row2.innerHTML = ''
            var total  = arr[i].sanskrit + arr[i].hindi + arr[i].english + arr[i].maths + arr[i].biology + arr[i].physics + arr[i].chemistry + arr[i].social
            var row2 = document.createElement('tr')
        row2.innerHTML = '<td>' + arr[i].student + '<td>' + arr[i].class + '<td>' + arr[i].section + '<td>' + arr[i].exam + '<td>' + arr[i].grade + '<td>' + total
        table.append(row2)
    }
    res.append(table)
}

// var sel1 = select[1]
// sel1.addEventListener('change', class_filter)
// function class_filter() {
//     var fil
// }