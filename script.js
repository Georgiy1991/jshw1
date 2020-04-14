var a = document.getElementById('Transition');
var b = document.getElementById('ChangeStyle');
var c = document.getElementById('Transformpage');

a.onclick = function(){
    document.location.href = 'https://musicmarket.by/';
}

b.onclick = function ChangeStyle(){
        a.style.backgroundColor = "red";
        b.style.backgroundColor = "blue";
        c.style.backgroundColor = "orange";
        document.getElementById('container').style.backgroundColor = '#663399';
        document.getElementById('container').style.flexDirection ='row';
    }

document.getElementById('flex').style.display = 'none'

c.onclick = function deleteAll(){
    a.style.display = 'none'
    b.style.display = 'none'
    c.style.display = 'none'
    document.getElementById('flex').style.display = 'flex'
    document.getElementById('container').style.backgroundColor = 'green';

}


var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    Norway: -30,
    Belarus: 0
    }


function averageTerm(){
    var sum = 0;
    var temperatureArray = Object.values(term);
    temperatureArray.forEach(function(itemOfArray) {
        sum += itemOfArray;
    })
    var max = Math.max(...temperatureArray);
    var resultterm = sum / temperatureArray.length;
    
    return {
        max,
        average: resultterm
    }
}
alert('Средняя температура  по странам : ' + averageTerm().average + ' градусов');
alert('Максимальная температура ' + averageTerm().max + ' C°');