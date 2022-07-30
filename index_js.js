var count = 0
let change = document.getElementById("count_no")

function increment() {
    count = count + 1;
    console.log(count)
    change.innerText = count

}

function decrement() {
    if (count == 0) {
        return

    } else {
        count = count - 1;
        console.log(count)
        change.innerText = count
    }
}