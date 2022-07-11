let listData = [];
let course1 = document.getElementById('courses-1');
let course2 = document.getElementById('courses-2');
let course3 = document.getElementById('courses-3');
let listCourse = [course1, course2, course3];

fetch('https://60d4611a61160900173cb070.mockapi.io/courses')
  .then (response => {
    return response.json()
  
})

.then(data => {
    for(let i = 0; i < data.length; i ++) {
        let course = {
            name: data[i].name,
            image: data[i].image,
            total_enrolled: data[i].total_enrolled,
            duration: data[i].duration,
            teacher: data[i].teacher,
            categories: data[i].categories,
            price: data[i].price,
            rate: data[i].rate,
            rate_quantity: data[i].rate_quantity
        }
        listData.push(course);
    }

    for(let i = 0; i < listCourse.length; i ++) {
        listCourse[i].childNodes[1].childNodes[1].src = data[i].image;
        listCourse[i].childNodes[3].childNodes[3].childNodes[1].innerHTML = data[i].name;
        listCourse[i].childNodes[3].childNodes[5].childNodes[3].innerHTML = data[i].total_enrolled;
        listCourse[i].childNodes[3].childNodes[5].childNodes[7].innerHTML = data[i].duration;
        listCourse[i].childNodes[3].childNodes[7].childNodes[5].innerHTML = data[i].teacher;
        listCourse[i].childNodes[3].childNodes[7].childNodes[9].innerHTML = data[i].categories;
        
        if(data[i].price != 0) {
            listCourse[i].childNodes[7].childNodes[1].childNodes[1].innerHTML = '&pound;' + data[i].price;
        } else {
            listCourse[i].childNodes[7].childNodes[1].childNodes[1].innerHTML = 'Free';
        }
        
        for(let a = 1; a <= data[i].rate; a ++) {
            listCourse[i].childNodes[3].childNodes[1].childNodes[1].innerHTML += '<i class="fa-solid fa-star"></i>';
        }
        if(data[i].rate < 5) {
            for(let a = 1; a <= 5 - data[i].rate; a ++) {
                listCourse[i].childNodes[3].childNodes[1].childNodes[1].innerHTML += '<i class="fa-regular fa-star"></i>';
            }
        }
        listCourse[i].childNodes[3].childNodes[1].childNodes[3].innerHTML = '(' + data[i].rate_quantity + ' reviews)'; 
    }  
});

let d = 1;

function nextCurData() {
    for(let c= 0; c < listCourse.length; c ++) {
        listCourse[c].childNodes[1].childNodes[1].src = listData[d].image;
        listCourse[c].childNodes[3].childNodes[3].childNodes[1].innerHTML = listData[d].name;
        listCourse[c].childNodes[3].childNodes[5].childNodes[3].innerHTML = listData[d].total_enrolled;
        listCourse[c].childNodes[3].childNodes[5].childNodes[7].innerHTML = listData[d].duration;
        listCourse[c].childNodes[3].childNodes[7].childNodes[5].innerHTML = listData[d].teacher;
        listCourse[c].childNodes[3].childNodes[7].childNodes[9].innerHTML = listData[d].categories;
        if(d === listData.length - 1) {
            d = 0;
        } else {
            d ++;
        }
    }
}

function preCurData() {
    let e = d - 1;
    if(e === -1) {
        e = listData.length - 1;
    }
    for(let c= 0; c < listCourse.length; c ++) {
        listCourse[c].childNodes[1].childNodes[1].src = listData[e].image;
        listCourse[c].childNodes[3].childNodes[3].childNodes[1].innerHTML = listData[e].name;
        listCourse[c].childNodes[3].childNodes[5].childNodes[3].innerHTML = listData[e].total_enrolled;
        listCourse[c].childNodes[3].childNodes[5].childNodes[7].innerHTML = listData[e].duration;
        listCourse[c].childNodes[3].childNodes[7].childNodes[5].innerHTML = listData[e].teacher;
        listCourse[c].childNodes[3].childNodes[7].childNodes[9].innerHTML = listData[e].categories;
        if(e === 0) {
            d = listData.length - 1;
        } else {
            d --;
            e --;
        }
    }
}