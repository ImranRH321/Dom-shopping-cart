// phone case plus
document
  .getElementById("phone_Plus_button")
  .addEventListener("click", function () {
    const inputValueUpdate = idSelectorValueTextChange("phoneInputFlied", true);
    priceIncaseOrDecrees("phonePriceText", inputValueUpdate, 59);
    //  ====================
    const phonePrice1 = textConvertPrice("priceText");
    // phone 2
    const phonePrice2 = textConvertPrice("phonePriceText");
    const totalPrice = phonePrice1 + phonePrice2;

    setTextElementId("subTotal", totalPrice);
    //
    const amountDiscount = (totalPrice * 0.1).toFixed(2);
    setTextElementId("discountPriceText", amountDiscount);
    const finalResultPrice = totalPrice - amountDiscount;
    setTextElementId("fainalPrice", finalResultPrice);
  });
// ('=======Minus=======');
document
  .getElementById("phone_manus_button")
  .addEventListener("click", function () {
    const inputValueUpdate = idSelectorValueTextChange(
      "phoneInputFlied",
      false
    );
    priceIncaseOrDecrees("phonePriceText", inputValueUpdate, 59);
    //  ====================

    const phonePrice1 = textConvertPrice("priceText");

    const phonePrice2 = textConvertPrice("phonePriceText");
    const totalPrice = phonePrice1 + phonePrice2;
    setTextElementId("subTotal", totalPrice);
    //
    const amountDiscount = (totalPrice * 0.1).toFixed(2);
    setTextElementId("discountPriceText", amountDiscount);

    const finalResultPrice = totalPrice - amountDiscount;

    setTextElementId("fainalPrice", finalResultPrice);
  });
