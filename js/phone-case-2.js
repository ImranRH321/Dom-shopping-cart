// phone case plus
document
  .getElementById("phone_Plus_button")
  .addEventListener("click", function () {
    //    input incase or decrees
    const inputValueUpdate = idSelectorValueTextChange("phoneInputFlied", true);

    // input value or price multiply =
    priceIncaseOrDecrees("phonePriceText", inputValueUpdate, 59);
    //  ====================
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
// 2 phone cuss minus
document
  .getElementById("phone_manus_button")
  .addEventListener("click", function () {
    //    input incase or decrees
    const inputValueUpdate = idSelectorValueTextChange(
      "phoneInputFlied",
      false
    );
    // input value or price multiply =
    priceIncaseOrDecrees("phonePriceText", inputValueUpdate, 59);
    //  ====================

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
