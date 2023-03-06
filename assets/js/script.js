//IMC DATA
    const data=[
        {
            min:0,
            max:18.4,
            classication:"Menor que 18,5",
            info:"Magreza",
            obesity:"0",
        },
        {
            min:18.5,
            max:24.9,
            classification: "Entre 18,5 e 24,9",
            info:"Normal",
            obesity:"I",
        },
        {
            min:30,
            max:39.9,
            classification: "Entre 30,0 e 39,9",
            info:"Obesidade",
            obesity:"II",
        },
        {
            min:40,
            max:99,
            classification: "Maior que 40",
            info:"Obesidade Grave",
            obesity:"III",
        }
    ];
    //Seleção dos elementos para disparar as funções
    const imcTable = document.querySelector("#imc-table");
    //ações principais de seleção
    const heightInput = document.querySelector("#height");
    const weightInput = document.querySelector("#weight");
    const calcBtn = document.querySelector("#calc-btn");
    const clearBtn = document.querySelector("#clear-btn");

    //Funções 
    function createTable(data){
        data.forEach((item) => {
            const div = document.createElement("div");
            div.classList.add("table-data");

            const classification = document.createElement("p");
            classification.innerText = item.classification;

            const info = document.createElement("p");
            info.innerText = item.info;
            const obesity = document.createElement("p");
            info.innerText = item.obesity;

            div.appendChild(classification)
            div.appendChild(info)
            div.appendChild(obesity)
            
            
            imcTable.appendChild(div)
            
        });
    }


    //Inicialização do projeto

    createTable(data);


    //Eventos


    
    