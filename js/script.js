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
  try {
    const resultJSON = await fetch(
      'https://gomezmig03.github.io/MotivationalAPI/en.json'
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // Get a random index based on the length of the array
    const randomIndex = Math.floor(Math.random() * jsonData.length)
    const quotePhrase = jsonData[randomIndex].phrase
    const quoteAuthor = jsonData[randomIndex].author

    // Output the quote and author
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

