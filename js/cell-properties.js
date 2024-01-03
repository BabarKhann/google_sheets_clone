//storage
let sheetDB = [];

for (i = 0; i < rows; i++) {
  let sheetRow = [];
  for (let j = 0; j < cols; j++) {
    let cellProp = {
      bold: false,
      italic: false,
      underline: false,
      alignment: 'left',
      fontFamily: 'monospace',
      fontSize: '14',
      fontColor: '#000000',
      bgColor: '#000000',
    };
    sheetRow.push(cellProp);
  }
  sheetDB.push(sheetRow);
}

// selectors for cell properties
let bold = document.querySelector('.bold');
let italic = document.querySelector('.italic');
let underline = document.querySelector('.underline');
let alignment = document.querySelectorAll('.alignment');
let fontSize = document.querySelector('.font-size-prop');
let fontFamily = document.querySelector('.font-family-prop');
let fontColor = document.querySelector('.font-color-prop');
let bgColor = document.querySelector('.bg-color-prop');
let leftalign = alignment[0];
let centeralign = alignment[1];
let rightalign = alignment[2];

// cell prop listeners
bold.addEventListener('click', (e) => {});
