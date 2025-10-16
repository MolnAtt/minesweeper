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
            div.classList.add('nemkattintott');
            document.querySelector(".container").appendChild(div);
        }
    }
}

function melyikez(div){
    [sx,sy] = div.id.split(" "); // ["9", "4"]
    return [parseInt(sx), parseInt(sy)];
}

function ezadiv(x,y){
    return document.getElementById(`${x} ${y}`);
}

function balkatt(e){
    let mezodiv = e.target; // <div id="9 4"></div>
    console.log(mezodiv);

    // ha rákattintunk, akkor meg szeretném nézni, hogy mi van itt.
    // 1. kiderítjük az e.targetből, hogy hova kattintottunk : x, y koordináta!

    // mezodiv.id // "9 4"
    [x, y] = melyikez(mezodiv)


    console.log(x);
    console.log(y);
    
    // 2. map-ban megnézzük, hogy van-e ott akna, ha igen...
    console.log(map[x][y]);
    if(map[x][y]===1){
        alert('meghaltál');
        window.location.reload();
    }
    // 2.5. map-ban megnézzük, hogy van-e a szomszédban akna... 
    else{
        let sz = szasz(x,y);
        if(sz>0){
            mezodiv.innerHTML=sz;
            mezodiv.classList.remove('nemkattintott');
        }else{
            // 3. Ha nincs itt és a szomszédban sincs akna, akkor gráfbejárás
            let ures_mezok = ures_mezoi(x, y) // [[2,3], [2,4], .... ]
            for (const [ux,uy] of ures_mezok) {
                let d = ezadiv(ux,uy)
                d.innerHTML="";
                d.classList.remove('nemkattintott');
                for (const [szx,szy] of szomszedai(ux,uy)) {
                    let d = ezadiv(szx,szy)
                    let ssz = szasz(szx,szy)
                    d.innerHTML= ssz ===0?'':ssz;
                    d.classList.remove('nemkattintott');
                }
            }
        }
    }
}


function ures_mezoi(x,y){
    result = [[x,y]]
    let tennivalok = [[x,y]]

    let feher = 0;
    let szurke = 1;
    let fekete = 2;

    szinezes = random_map_generalasa(0);

    while(0<tennivalok.length){
        let [tx, ty] = tennivalok.pop();
        // feldolgozás

        szinezes[tx][ty] = fekete;

        // új szomszédok bevétele a tennivalókba

        for (const [szx,szy] of szomszedai(tx,ty)) {
            if (szinezes[szx][szy] === feher && szasz(szx,szy)===0){
                result.push([szx,szy]);
                tennivalok.push([szx, szy]);
            }
            szinezes[szx][szy] = szurke;
        }
    }
    return result;
}

function szomszedai(x,y){
   let lista = [];
    for (let i = x-1; i <= x+1; i++) {
        for (let j = y-1; j <= y+1; j++) {
            if(0<=i && 0<=j && i<15 && j<15){
                if(!(i===x && j === y))
                    lista.push([i,j])
            }
        }
    }
    return lista;
}

function szasz(x, y) // szomszédos aknák száma
{
    let asz = 0;
    for (let i = x-1; i <= x+1; i++) {
        for (let j = y-1; j <= y+1; j++) {
            if(0<=i && 0<=j && i<15 && j<15){
                asz += map[i][j];
            }
        }
    }
    return asz-map[x][y];
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
let map = random_map_generalasa(40);

