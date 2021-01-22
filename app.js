
    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact, image) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = image;
    }

    // Create Dino Objects
    const getDinoData = async () => {
        const fetchedData = await fetch("dino.json");
        const data = await fetchedData.json();

        return data.Dinos;
    };









    // Create Human Object

    function Humain(){}

    const humain = new Humain();

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    const container = document.getElementById("grid");

     function makeGrid(rows, cols) {


         container.style.setProperty('--grid-rows', rows);
         container.style.setProperty('--grid-cols', cols);
         let i = 0;
         for (c = 0; c < (rows * cols); c++) {
             let cell = document.createElement("div");
             container.appendChild(cell).className = "grid-item";
             let h3 = document.createElement("h3");
             let img = document.createElement("img");
             let para = document.createElement("p");
             cell.appendChild(h3);
             cell.appendChild(img);
             cell.appendChild(para);
             if(c == 4) continue;
             getDinoData().then(data => {
                 if(i < 8){
                         h3.innerText = data[i].species;
                         img.src = data[i].image;
                         para.innerText = data[i].fact;
                         i++;
                 }

             });
         }
     }
     makeGrid(3,3);


        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
