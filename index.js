// ADATSZERKEZET
// MÁTRIX SZÁMMÁTRIX : "LISTÁBAN A LISTA"

// le kell szórni az aknákat
function random_map_generalasa(aknak_szama){
    // kéne egy csupa nulla 225 hosszú lista
    // belerakunk aknak_szama mennyiségűt, 
    // és aztán megkeverjük. Lesz egy 225 tagú random listád.
    // be kell hajtogatni mátrixba.

    let lista = csupanullalista();
    lista_feltoltese_aknakkal(aknak_szama, lista);
    keveres(lista);
    return hajtogatas(lista);
}
function hajtogatas(egysoros){
    let index = 0;
    const matrix = []
    for (let i = 0; i < 15; i++) {
        const lista = []
        for (let j = 0; j < 15; j++) {
            lista.push(egysoros[index]);
            index++;
        }
        matrix.push(lista);
    }
    return matrix;
}
function keveres(l){ // Fisher-Yates-Knuth shuffle
    let i=l.length;
    while(i!=0){
        let j=Math.floor(Math.random()*i);
        i--;
        [l[i], l[j]] = [l[j], l[i]];
    }
}
function lista_feltoltese_aknakkal(aknak_szama, csupanullalista){
  for (let i = 0; i < aknak_szama; i++) {
    csupanullalista[i] = 1;
  }
}
function csupanullalista(){
    let a = [];
    for (let i = 0; i < 225; i++) {
        a[i] = 0;
    }
    return a;
}
function divek_letrehozasa(x,y){
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let div = document.createElement("div");
            div.id = `${i} ${j}`;
            div.onclick = balkatt;
            document.querySelector(".container").appendChild(div);
        }
    }
}


function melyikez(div){
    return (5,6)
}


function balkatt(e){
    
}


function megmutat(x,y){
    // vagy bomba van itt, és game over, vagy számot mutat, vagy kibont
}

function kibont(x,y){
    // ez egy gráfbejárás, ami visszaadja egy listában, hogy melyek a kibontandó mezők
}


function jobbkatt(e){
    // bombát kiált itt. Vagy zászló kerül le, ha tényleg van itt bomba, vagy game over!

}

function gyozelem(aknak_szama){
    // ha megtalálta az összes aknát, akkor győzelem.
    // Meg kell számolni, hogy hány olyan div van, amiben egy ⛳ van, és ha ez megegyezik az aknák számával, akkor feldob egy alert-et, hogy Nyertél!
}






divek_letrehozasa(15,15);
random_map_generalasa(90);

