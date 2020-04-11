var data
var total
var tbody = document.getElementById('all_countries')
var j = 1

function all_data() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.covid19api.com/summary")
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            total = JSON.parse(xhr.response).Global
            data = JSON.parse(xhr.response).Countries
            console.log(JSON.parse(xhr.response))
            console.log(total['NewConfirmed'])
            for (var i = 0; i < data.length; i++) {

                show_data(data[i])
            }
            var row1 = document.createElement('tr')
    row1.innerHTML = '<th>' + 'Total' + '<th>' + 'Global'+ '<td>' + total['NewConfirmed'] + '<td>' + total['TotalConfirmed'] + '<td>' + total['NewDeaths'] + '<td>' + total['TotalDeaths'] + '<td>' + total['NewRecovered'] + '<td>' + total['TotalRecovered']
    tbody.appendChild(row1)
        }
    }
    
}

function show_data(all) {

    // var col1 = document.createElement('th')
    var row = document.createElement('tr')
    row.innerHTML = '<th>' + j + '<td>' + all['Country'] + '<td>' + all['NewConfirmed'] + '<td>' + all['TotalConfirmed'] + '<td>' + all['NewDeaths'] + '<td>' + all['TotalDeaths'] + '<td>' + all['NewRecovered'] + '<td>' + all['TotalRecovered']
    j++
    tbody.appendChild(row)
   
}

all_data()

// Sort and Filter
var filter = document.getElementById('filter')
var sort = document.getElementById('sort')
sort.addEventListener('change', sort_data)

function sort_data() {
    var sorted_arr

    if (event.target.value == "New Confirmed") {
        sorted_arr = data.sort(function (a, b) {

            if (filter.value == 'Ascending') {
                return (Number(a.TotalConfirmed) - Number(b.TotalConfirmed))
                return (Number(a.NewConfirmed) - Number(b.NewConfirmed))
            } else if (filter.value == 'Descending') {
                return (Number(b.NewConfirmed) - Number(a.NewConfirmed))
            }
        })         
         var row1 = document.createElement('tr')
        row1.innerHTML = '<th>' + 'Total' + '<th>' + 'Global'+ '<td>' + total['NewConfirmed'] + '<td>' + total['TotalConfirmed'] + '<td>' + total['NewDeaths'] + '<td>' + total['TotalDeaths'] + '<td>' + total['NewRecovered'] + '<td>' + total['TotalRecovered']
        tbody.appendChild(row1)
    } else if (event.target.value == "Total Confirmed") {
        sorted_arr = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.TotalConfirmed) - Number(b.TotalConfirmed))

            } else if (filter.value == 'Descending') {
                return (Number(b.TotalConfirmed) - Number(a.TotalConfirmed))
            }
        })
    } else if (event.target.value == "New Deaths") {
        sorted_arr = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.NewDeaths) - Number(b.NewDeaths))

            } else if (filter.value == 'Descending') {
                return (Number(b.NewDeaths) - Number(a.NewDeaths))
            }
        })
    } else if (event.target.value == "Total Deaths") {
        sorted_arr = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.TotalDeaths) - Number(b.TotalDeaths))

            } else if (filter.value == 'Descending') {
                return (Number(b.TotalDeaths) - Number(a.TotalDeaths))
            }
        })
    } else if (event.target.value == "New Recovered") {
        sorted_arr = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.NewRecovered) - Number(b.NewRecovered))

            } else if (filter.value == 'Descending') {
                return (Number(b.NewRecovered) - Number(a.NewRecovered))
            }
        })
    } else if (event.target.value == "Total Recovered") {
        sorted_arr = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.TotalRecovered) - Number(b.TotalRecovered))

            } else if (filter.value == 'Descending') {
                return (Number(b.TotalRecovered) - Number(a.TotalRecovered))
            }
        })
    }

    j = 1
    console.log(sorted_arr)
    tbody.innerHTML = ''
    for (var k = 0; k < sorted_arr.length; k++) {
        show_data(sorted_arr[k])
    }


}

var search = document.getElementById('search')

//localStorage.setItem("covid", data)
var submit = document.getElementById('submit')
submit.addEventListener('click', function() {
    localStorage.setItem("search_word",JSON.stringify(search.value))
    window.location.href= "search.html"
})

