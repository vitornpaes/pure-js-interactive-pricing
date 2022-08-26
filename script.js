const pageValue = document.getElementById("value1");
const priceValue = document.getElementById("value2");
const word = document.getElementById("word3");
const rangeInput = document.getElementById("range");
const checkbox = document.getElementById("switch-shadow")
const objeto = {
  8: "10k",
  12: "50k",
  16: "100k",
  20: "200k",
  24: "500k",
  28: "700k",
  32: "900k",
  36: "1M",
};

calculateValues = () => {
  const value = Number(rangeInput.value);
  priceValue.innerHTML = `$${value}.00`;
  const viewers = objeto[value];
  pageValue.innerHTML = `${viewers}`;
  
  if(checkbox.checked){
    const discountValue = Math.round(value*0.75*12);
    priceValue.innerHTML = `$${discountValue}.00`
    word.innerHTML = `/Year`;
  }else{
    word.innerHTML = `/month`;
  }

};
