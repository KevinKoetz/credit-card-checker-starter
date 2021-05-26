// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:


//Returns true if card number is valid, false otherwise
function validateCred(cardNumber) {
  let numberSum = 0;
  //Iterate through each element beginning from the right (last element)
  for(let i = cardNumber.length - 1; i >= 0; i--){
    let element = cardNumber[i];
    //Check if i am at a even or odd digit
    if(((cardNumber.length - 1) - i) % 2 === 1){ 
      element = 2 * element;
      if(element > 9){ 
          element = element - 9;
      }
    }
    numberSum = numberSum + element;
  }
  return numberSum % 10 ? false : true;
}

//Returns all invalid Cards as a array of nested cardnumber arrays

function  findInvalidCards(batchOfCards) {
  return batchOfCards.filter(element => !validateCred(element));
}


//Returns array of companies who issued invalid card numbers. Does not contain duplicates. If the company identifier is unknown it logs "Company not found" to console.
function idInvalidCardCompanies(invalidCards){
  const firstDigitsToCompany = {
    '3': 'Amex (American Express)',
    '4': 'Visa',
    '5': 'Mastercard',
    '6': 'Discover'
  }
  const companies = [];

  for(const card of invalidCards){
      //If the number is a key inside the firstDigitsToCompany object
      if(Object.keys(firstDigitsToCompany).includes(card[0].toString())){
          //If not yet in the array, include the keys value.
          if(!companies.includes(firstDigitsToCompany[card[0].toString()])) companies.push(firstDigitsToCompany[card[0].toString()]);
      }else{
          //If it is not in the Object, output that we don't know the company.
          console.log('Company not found')
      }
  }

  return companies;
}


