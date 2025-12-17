import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';

export function renderPaymentSummary() {
  let productPricePaise = 0;
  let shippingPricePaise = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPricePaise += product.pricePaise * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPricePaise += deliveryOption.pricePaise;
  });

  const totalBeforeTaxPaise = productPricePaise + shippingPricePaise;
  const taxPaise = totalBeforeTaxPaise * 0.1;
  const totalPaise = totalBeforeTaxPaise + taxPaise;

  let cartQuantity = 0;
  
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${cartQuantity}):</div>
      <div class="payment-summary-money">
        ₹${formatCurrency(productPricePaise)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money js-payment-summary-shipping">
        ₹${formatCurrency(shippingPricePaise)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        ₹${formatCurrency(totalBeforeTaxPaise)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
        ₹${formatCurrency(taxPaise)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money js-payment-summary-total">
        ₹${formatCurrency(totalPaise)}
      </div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;
}