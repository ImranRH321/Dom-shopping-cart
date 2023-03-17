document
  .getElementById("increaseButtonPlus")
  .addEventListener("click", function () {
    //    input incase or decrees
    const inputValueUpdate = idSelectorValueTextChange("phone_input", true);
    // input value or price multiply =
    priceIncaseOrDecrees("priceText", inputValueUpdate, 1219);
    //  =====
    // phone 1
    const phonePrice1 = textConvertPrice("priceText");
    // phone 2
    const phonePrice2 = textConvertPrice("phonePriceText");
    // console.log('phonePrice2',phonePrice2);
    const totalPrice = phonePrice1 + phonePrice2;
    //    subTotal text
    setTextElementId("subTotal", totalPrice);

    const amountDiscount = (totalPrice * 0.1).toFixed(2);
    //  console.log('amountDiscount',amountDiscount);

    // discount text

    setTextElementId("discountPriceText", amountDiscount);

    //  total price
    const finalResultPrice = totalPrice - amountDiscount;

    // total text
    setTextElementId("fainalPrice", finalResultPrice);
  });
  
// 2 phone cuss
document
  .getElementById("decreesButtonMainus")
  .addEventListener("click", function () {
    //    input incase or decrees
    const inputValueUpdate = idSelectorValueTextChange("phone_input", false);
    // input value or price multiply =
    priceIncaseOrDecrees("priceText", inputValueUpdate, 1219);
    //  =====
    const phonePrice1 = textConvertPrice("priceText");
    //  console.log('phonePrice1',phonePrice1);
    // phone 2
    const phonePrice2 = textConvertPrice("phonePriceText");
    // console.log('phonePrice2',phonePrice2);
    const totalPrice = phonePrice1 + phonePrice2;
    // subTotal text
    setTextElementId("subTotal", totalPrice);
    //
    const amountDiscount = (totalPrice * 0.1).toFixed(2);
    setTextElementId("discountPriceText", amountDiscount);

    //  total price
    const finalResultPrice = totalPrice - amountDiscount;

    // total text
    setTextElementId("fainalPrice", finalResultPrice);
  });
