export function detectCreditCardBrand(cardNumber: string): string {
   // Define regex patterns for different card brands
   const patterns: { [key: string]: RegExp } = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
   };

   // Check the card number against each pattern
   for (const brand in patterns) {
      if (patterns[brand].test(cardNumber)) {
         return brand.toUpperCase(); // Return the brand if a match is found
      }
   }

   return "UNKNOWN"; // If no brand matches
}
