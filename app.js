
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

    Dino.prototype.getRandom = function() {
        return this.fact[Math.floor(Math.random() * this.fact.length)];
    };

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


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
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

            if(document.getElementById('grid').style.display == 'none'){
                document.getElementById('grid').style.display = 'flex';
                document.getElementById('dino-compare').style.display = 'none';
            }
            else {
                document.getElementById('grid').style.display = 'none';
                document.getElementById('dino-compare').style.display = 'flex';
            }
            return human;
        });

    })();



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    const compareWeight = (human, DinoTab) => {
        if(human.weight < DinoTab.weight){
            return `${DinoTab.species} is heavier than human`;
        } else if (human.weight  > DinoTab.weight) {
            return `${DinoTab.species} is lighter than human`;
        } else {
            return `${DinoTab.species} have the same weight as human`;
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    const compareHeight = (human, DinoTab) => {
        if(human.height < DinoTab.height){
            return `${DinoTab.species} is taller than human`;
        } else if (human.height > DinoTab.height) {
            return `${DinoTab.species} is smaller than human`;
        } else {
            return `${DinoTab.species} have the same height as human`;
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    const compareDiet = (human, DinoTab) => {
        if(human.diet === DinoTab.diet){
            return `${DinoTab.species} have the same diet`;
        } else {
            return `${DinoTab.species} have not the same diet`;
        }
    }

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

                     const dino = data[i];

                         button.addEventListener('click', function(){
                             const humanWeight = document.getElementById('weight').value;
                             const humanHeight = (document.getElementById('feet').value * 12  + document.getElementById('inches').value);
                             const humanDiet = document.getElementById('diet').value;
                             const human = new Human(
                                 '',
                                 humanWeight,
                                 humanDiet,
                                 humanHeight);


                             const factRandom = [
                                 compareHeight(human, dino),
                                 compareDiet(human, dino),
                                 compareWeight(human, dino),
                                 dino.fact
                             ];
                             if(dino.species === 'Pigeon'){
                                 para.innerText = dino.fact;
                             }else {
                                 para.innerText = factRandom[getRandomIntInclusive(0, 3)];
                             }
                         });
                         i++;
                 }

             });
         }
     }
     makeGrid(3,3);


        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
