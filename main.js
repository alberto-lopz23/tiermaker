
const al = el => document.querySelector(el);
const alc = el => document.querySelectorAll(el);

const imageInput = al('#image-input');
const resetButton = al('#reset-tier-button');
//const saveButton = al('#save-tier-button');



function createItems (src) {
  const imaElement = document.createElement('img');
  imaElement.draggable = true;
  imaElement.src = src
  imaElement.classList.add('tier-image');

  imaElement.addEventListener('dragstart', startHandler); 
  imaElement.addEventListener('dragend', endHandler);

  al('#tier-selector').appendChild(imaElement);
  return imaElement;
}



imageInput.addEventListener('change', (e) => {
  const [file] = e.target.files;

  if (file) {
    // esto nos permite leer la imagen para poder mostrarla en el navegador
    const reader = new FileReader();

    reader.onload = (eReader) => {
        createItems(eReader.target.result);
    }

    reader.readAsDataURL(file);

  }


})


// recuperamos todas las filas y las agregamos a un array

const rows = alc(' .tier-container .rows');

rows.forEach(row => {
  row.addEventListener('drop', dropHandler);
  row.addEventListener('dragover', dragOverHandler)
  row.addEventListener('dragleave', dragLeaveHandler)
})

function dropHandler (event) {
  event.preventDefault();

  

 }


function dragOverHandler (event) {
  event.preventDefault();
  const [ currentTarget , dataTransfer] = event

  if ( sourContainer && dragElement) {
    sourContainer.removeChild(dragElement);
  } 

  if (dragElement) {
    const src = dataTransfer.getData('text/plain');
    const imaElement = createItems(src);
    event.currentTarget.appendChild(imaElement);
  }

}


function dragLeaveHandler (event) {
  event.preventDefault();
  const [ currentTarget ] = event;

}




let dragElement = null
let sourContainer = null


// funciones que se llama cuando se arrastra una imagen

function startHandler (eventStar) {
  dragElement = eventStar.target
  const sourContainer = dragElement.parentNode 

}



function endHandler (eventEnd) {
  dragElement = null
  sourContainer = null
}