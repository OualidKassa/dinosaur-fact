
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
    function Dino(array){
    this.array = [];
    }

    // Create Dino Objects
    const getDinoData = async () => {
        const fetchedData = await fetch("dino.json");
        const data = await fetchedData.json();

         return data.Dinos;
    };

    // Create Human Object

    function Human(name, weight, diet, height){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
    }




    // Use IIFE to get human data from form

    const button = document.getElementById("btn");
    button.addEventListener("click", function(){
        let human = new Human("",  "", "", "");
        // Use IIFE to get human data from form
        (function getHumanData(){
            human.name = document.getElementById('name').value;
            human.height = (document.getElementById('feet').value * 12 ) + document.getElementById('inches').value;
            human.weight = document.getElementById('weight').value;
            human.diet = document.getElementById('diet').value;
        })();
        console.log(human)
    });

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
