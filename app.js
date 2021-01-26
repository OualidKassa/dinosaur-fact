
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
        const dinoTab = [];
        data.Dinos.map( dino => {
            const dinoData = new Dino(
                dino.species,
                dino.weight,
                dino.height,
                dino.diet,
                dino.where,
                dino.when,
                dino.fact,
                dino.image
            );
            dinoTab.push(dinoData);
        });
        return dinoTab;
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
    (function() {
        button.addEventListener("click", function(){
            const human = new Human("",  "", "", "");
            // Use IIFE to get human data from form
            (function getHumanData(){
                human.name = document.getElementById('name').value;
                human.height = (document.getElementById('feet').value * 12 ) + document.getElementById('inches').value;
                human.weight = document.getElementById('weight').value;
                human.diet = document.getElementById('diet').value;
            })();
            console.log(human)
            if(document.getElementById('grid').style.display == 'none'){
                document.getElementById('grid').style.display = 'flex';
                document.getElementById('dino-compare').style.display = 'none';
            }
            else {
                document.getElementById('grid').style.display = 'none';
                document.getElementById('dino-compare').style.display = 'flex';
            }

        });
    })();


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    const container = document.getElementById("grid");

     function makeGrid(rows, cols) {

         document.getElementById('grid').style.display = 'none';
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
             if(c == 4) {
                 button.addEventListener("click", function(){
                     let name = '';
                     (function getHumanName(){
                         name = document.getElementById('name').value;
                         h3.innerText = name;
                     })();
                 });
                 img.src = 'images/human.png';
                 continue;
             }
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
