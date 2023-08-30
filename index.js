// 0 adding colors
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]

// 1. select all the stars
const starsEl = document.querySelectorAll(".fa-star")

// 1.1 console.log and open console inspect we have selected all the stars
console.log(starsEl);

// 2. select all emojis
const emojisEl = document.querySelectorAll(".fa-regular")

// to avoid black emoji when refreshing the page:
updateRating(0); // default 1 star

// 3. add event listener to all  of them
// event listener has two parameters: 1 event handeler 2 function ()
starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", ()=>{
    // console.log("clicked", index) // console shows index star clicked
    updateRating(index)
  });
});

// 4. stars rating function and target emojis
function updateRating(index){
  starsEl.forEach((starEl, idx)=>{  //idx to do not use word index again
    if(idx < index + 1){
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  emojisEl.forEach(emojiEl => {
    emojiEl.style.transform = `translateX(-${index * 50}px`; // target the index and * 50 to transalate the emojis
    emojiEl.style.color = colorsArray[index]
  });
}
