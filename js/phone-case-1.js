document
  .getElementById("increaseButtonPlus")
  .addEventListener("click", function () {
    const inputValueUpdate = idSelectorValueTextChange("phone_input", true);
    priceIncaseOrDecrees("priceText", inputValueUpdate, 1219);
    //  =====
    // phone 1
    const phonePrice1 = textConvertPrice("priceText");
    // phone 2
    const phonePrice2 = textConvertPrice("phonePriceText");
    const totalPrice = phonePrice1 + phonePrice2;

    setTextElementId("subTotal", totalPrice);

    const amountDiscount = (totalPrice * 0.1).toFixed(2);

    setTextElementId("discountPriceText", amountDiscount);

    const finalResultPrice = totalPrice - amountDiscount;

    setTextElementId("fainalPrice", finalResultPrice);
  });

// 2 phone cuss = == ===
document
  .getElementById("decreesButtonMainus")
  .addEventListener("click", function () {
    const inputValueUpdate = idSelectorValueTextChange("phone_input", false);
    priceIncaseOrDecrees("priceText", inputValueUpdate, 1219);
    //  =====
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
