// Select the DOM element you want to copy

// Create a new button to trigger the copy action
const copyButton = document.createElement('button');
copyButton.textContent = 'Copy Element';
copyButton.style.position = 'fixed';
copyButton.style.bottom = '20px';
copyButton.style.right = '20px';
copyButton.style.zIndex = '9999';
document.body.appendChild(copyButton);

// Add event listener to the button
copyButton.addEventListener('click', () => {
    //const elementToCopy = document.querySelector('.naglowki');
    const elementToCopy2 = document.querySelector('[alt="b"]');
  // Create a new range and select the element
  console.log(elementToCopy2)
  const range = document.createRange();
  range.selectNode(elementToCopy2);

  // Copy the selected element to the clipboard
  //navigator.clipboard.write([new ClipboardItem({ "text/html": new Blob([range.cloneContents()], {type: "text/html"}) })]);

  navigator.clipboard.writeText(elementToCopy2['alt']+"\t"+"a");
});