// Copyright (c) 2025 Adrina peighambarzadeh All rights reserved
//
// Created by: Adrina peighambarzadeh
// Created on: June 2025
// This file contains the JS functions for index.html

'use strict'
/**
 * This function gets a motivational quote from the API
 * The 'async' is there because it will take time for the internet to return the value
 */
async function getMotivationalQuote () {
  // the 'try' is here because the internet may not be working
  try {
    const resultJSON = await fetch(
      'https://gomezmig03.github.io/MotivationalAPI/en.json'
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // bring the information from API
    const quotePhrase = jsonData[0].phrase
    const quoteAuthor = jsonData[0].author

    // output
    // <b> format reference: 'https://www.w3schools.com/Jsref/jsref_bold.asp'
    document.getElementById('motivational-quote').innerHTML =
      '<b>Quote:</b> "' +
      quotePhrase +
      '"<br />' +
      '<b>Author:</b> ' +
      quoteAuthor +
      '<br />'
  } catch (error) {
    console.error(error)
  }
}
