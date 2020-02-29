// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
    const greetings =
      ['We are all stories in the end. Just make it a good one, eh? (Doctor Who)', 'Your assumptions are your windows on the world. Scrub them off every once in a while, or the light will not come in. (Isaac Asimov)', 'If you wish to make an apple pie from scratch, you must first invent the universe. (Carl Sagan)', 'Time is an illusion. Lunchtime doubly so. (The Hitchhikers Guide to the Galaxy)'];

    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
}

/** Getting the comments
 */

function getComments() {
    fetch('/data').then(response => response.json()).then((stats) => { 
        const statsListElement = document.getElementById('commentCell');
        statsListElement.innerHTML = '';
        for (index = 0; index < stats.length; index++) { 
            statsListElement.appendChild(createListElement(stats[index]));
        }
    });
}

function createListElement(text) {
    const divElement = document.createElement('div');
    divElement.setAttribute("id", "commentDiv");
    divElement.innerText = text;
    return divElement;
}
