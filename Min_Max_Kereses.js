let tomb = [];

for(let i=0;i<10;i++){
	tomb.push(Math.round(Math.random()*100));
}

document.write(`<u>A tömb elemei:</u> <br>${tomb} <br><hr>`);
document.write(`<u>A tömb maximum elemének kiválasztása:</u> <br>`);

let max = tomb[0];
let pozicio = 0;

for(let i=0; i<tomb.length;i++){
			if(tomb[i]>max){
      	max = tomb[i];
        pozicio = i;
      }
}

document.write(`A legnagyobb elem a tömben: ${max}, indexe a tömben ${pozicio}. `);

document.write(`<hr>`);
document.write(`<u>A tömb minimum elemének kiválasztása:</u> <br>`);

let min = tomb[0];
let pozicio2 = 0;

for(let i=0; i<tomb.length;i++){
			if(tomb[i]<min){
      	min = tomb[i];
        pozicio2 = i;
      }
}

document.write(`A legkisebb elem a tömben: ${min}, indexe a tömben ${pozicio2}. `);