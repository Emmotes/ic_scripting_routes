const ilvlInput=document.getElementById(`ilvl`);
const presetsInput=document.getElementById(`presets`);
const rarityInput=document.getElementById(`rarity`);
const gildingInput=document.getElementById(`gilding`);
const shinyNote=document.getElementById(`shinyNote`);
const eventPresets=document.getElementById(`eventPresets`);
const eventChoices=document.getElementById(`eventChoices`);
const eventList=document.getElementById(`eventList`);
const jump=` checked`;
const stackRoute=document.getElementById(`stackRoute`);
const stackReset=document.getElementById(`stackReset`);
const stackFavour=document.getElementById(`stackFavour`);
const stackStack=document.getElementById(`stackStack`);
const stackBrivZone=document.getElementById(`stackBrivZone`);
const stackWithMetal=document.getElementById(`stackWithMetal`);
const stackResult=document.getElementById(`stackResult`);
const metalLevel=170;
const stackMult=[1/((100-3.2)/100),1/((100-4)/100)];

function init() {
	populateEventChoices();
	populateStackRoutes();
	ilvlInput.addEventListener(`input`, update);
	presetsInput.addEventListener(`change`, preset);
	rarityInput.addEventListener(`change`, update);
	gildingInput.addEventListener(`change`, update);
	window.addEventListener('hashchange',() =>{swapTab();});
	swapTab();
	eventPresets.addEventListener(`change`, populateEventList);
	eventChoices.addEventListener(`change`, populateEventList);
	stackRoute.addEventListener(`change`, calculateStacks);
	stackReset.addEventListener(`change`, calculateStacks);
	stackFavour.addEventListener(`change`, calculateStacks);
	stackStack.addEventListener(`change`, calculateStacks);
	stackBrivZone.addEventListener(`change`, calculateStacks);
	stackWithMetal.addEventListener(`change`, calculateStacks);
	update();
}

function preset() {
	rarityInput.value=`epic`;
	gildingInput.value=`golden`;
	
	var jumps=presetsInput.value.replace(/[^\d]/g, '');
	ilvlInput.value=500*Math.pow(2,jumps-1)-374;
	update();
}

function update() {
	if (rarityInput.value!=`epic`) {
		if (gildingInput.value==`golden`) {
			gildingInput.value=`shiny`;
		}
		if (gildingInput.options.length==3) {
			gildingInput.options.remove(2);
		}
	} else {
		if (gildingInput.options.length==2) {
			var opt=document.createElement(`option`);
			opt.text=`Golden`;
			opt.value=`golden`;
			gildingInput.options.add(opt);
		}
	}
	if (gildingInput.value==`shiny`&&shinyNote.style.display=='none') {
		shinyNote.style.display='';
	} else if (gildingInput.value!=`shiny`&&shinyNote.style.display=='') {
		shinyNote.style.display='none';
	}
	var ilvls=ilvlInput.value;
	if (ilvls<1) {
		document.getElementById(`ilvl`).value=1;
		ilvls=1;
	}
	var rarity=determineRarity();
	var gilding=determineGilding();
	var skips=determineJumps(ilvls,rarity,gilding);
	var p=(skips[1]*100);
	var np=((1-skips[1])*100);
	var jumps=(skips[0]-1)+skips[1];
	
	var skipsL=determineJumps(ilvls-1,rarity,gilding);
	var pL=(skipsL[1]*100);
	var pDiff=p-pL;
	
	var fix=vSigFig(p,pDiff);
	p=p.toFixed(fix);
	np=np.toFixed(fix);
	
	var comment=``;
	var spacer=addToDescRow(`&nbsp;`)
	var skipBlurb=`${p}% chance to skip ${skips[0]} areas.`;
	if (np>0) {
		skipBlurb+=`<br>${np}% chance to skip ${skips[0]-1} areas.`;
	}
	comment+=spacer;
	comment+=addToDescRow(skipBlurb,true,true);
	if (skips[1]!=1&&jumps>2) {
		comment+=`<span class="routesRow"><span class="routesCol5" style="padding-left:10px;">Note: Please be aware that it is highly recommended to stay at 100% jumps as that allows for far more consistent runs.</span></span>`;
	}
	comment+=spacer;
	comment+=`<span class="routesRow"><span class="routesDesc">When there are multiple routes - they are generally ordered best to worst. However - with that said - that won't always be true since some routes may depend heavily on hardware and whether or not you use specified addons etc.. Because of this - it's recommended that you test to see which one is best for your setup out of the options available.</span></span>`;
	comment+=spacer;
	
	if (jumps==2) {
		comment+=parseRoute(gemFarmJson.pure2LL);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.cf);
	} else if (jumps==3) {
		comment+=parseRoute(gemFarmJson.pure3LL);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.cf);
	} else if (jumps==4) {
		comment+=parseRoute(gemFarmJson.pure4TT);
	} else if (jumps==5) {
		comment+=parseRoute(gemFarmJson.feat54TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat4TT);
	} else if (jumps==6) {
		comment+=parseRoute(gemFarmJson.pure6LL);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat64TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat64RAC);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure6TT);
	} else if (jumps==7) {
		comment+=parseRoute(gemFarmJson.pure7TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat74TT);
	} else if (jumps==8) {
		comment+=parseRoute(gemFarmJson.feat84TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure8TT);
	} else if (jumps==9) {
		comment+=parseRoute(gemFarmJson.feat94TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure9TT);
	} else if (jumps==11) {
		comment+=parseRoute(gemFarmJson.pure11TT);
	} else if (jumps<3.25) {
		comment+=parseRoute(gemFarmJson.cf);
	} else if (jumps<4) {
		comment+=parseRoute(gemFarmJson.pre4TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.cf);
	} else if (jumps>4&&jumps<5) {
		comment+=parseRoute(gemFarmJson.feat4TT);
	} else if (jumps>5&&jumps<6) {
		comment+=parseRoute(gemFarmJson.feat4TT);
	} else if (jumps>=8&&jumps<9) {
		comment+=parseRoute(gemFarmJson.mixed89TT);
	} else {
		comment+=parseRoute(gemFarmJson.unknown);
	}
	document.getElementById('wrapper').innerHTML=comment;
}

function addToDescRow(content) {
	return `<span class="routesRow"><span class="routesDesc">${content}</span></span>`;
}

function determineRarity() {
	switch(rarityInput.value) {
		case `common`:
			return 0.1;
		case `uncommon`:
			return 0.3;
		case `rare`:
			return 0.5;
		default:
			return 1;
	}
}

function determineGilding() {
	switch(gildingInput.value) {
		case `shiny`:
			return 1.5;
		case `golden`:
			return 2;
		default:
			return 1;
	}
}

function determineJumps(ilvls,rarity,gilding) {
	let effect=0.25 * (1+(0.004*gilding*ilvls*rarity + 0.996*gilding*rarity));
	
	let skips=1
	let skipChance=effect
	if (effect>1) {
		while (skipChance>1) {
			skipChance /= 2
			skips+=1
		}
		skipChance=mapFromToRange(skipChance, 0.5, 1.0, 0.01, 1)
	}
	return [skips,skipChance];
}

function mapFromToRange(v, oldMin, oldMax, newMin, newMax) {
	return (v - oldMin) * ((newMax - newMin) / (oldMax - oldMin)) + newMin;
}

function addChecked(bf,br) {
	var comment=``;
	if (br) comment+=addToDescRow(`&nbsp;`);
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		var checked=isChecked(bf,i) ? ` checked` : ``;
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	return comment;
}

function addLoop(bf,j,fs) {
	let s = j+1;
	let w = fs ? 5 : 1;
	let z = 1;
	let route = [z];
	while (z <= 200) {
		z += isChecked(bf,z%50||50) ? s : w;
		route.push(z);
	}
	let lastOfLoop = route[route.length-1] % 50;
	let loopStartIndex = 0;
	for (let i=route.length-2; i>=0; i--) {
		if (route[i] % 50 == lastOfLoop) {
			loopStartIndex = i;
			break;
		}
	}
	let loop = [];
	for (let i=loopStartIndex; i<route.length-1; i++) {
		loop.push(route[i] % 50 || 50);
	}
	if (loop[0]==50) {
		loop.splice(0, 1);
		loop.push(50);
	}
	let spacer = ` - `;
	var comment=`<br>Preferred Loop: `;
	for (let i=0; i<loop.length; i++) {
		if (i > 0) comment += spacer;
		comment += loop[i];
	}
	comment += `${spacer} repeat`;
	return comment;
}

function isChecked(bf,i) {
	return (bf & BigInt(Math.pow(2,i-1))) != 0 ? true : false;
}

function vSigFig(n,nDif) {
	var p = 2;
	if (n==100) {
		return p;
	}
	while (parseFloat(nDif.toFixed(p)) == 0) {
		p++;
	}
	return p+1;
}

function swapTab() {
	var hash = window.location.hash.substring(1);
	if (hash != "" && document.getElementById(hash) != undefined) {
		document.getElementById(hash).click();
	}
}

function setHash(hash) {
	hash = `#` + hash;
	if(history.replaceState) {
		history.replaceState(null, null, hash);
	} else {
		window.location.hash = hash;
	}
}

function populateEventChoices() {
	for (let i=0;i<eventsJson.length;i++) {
		if (eventsJson[i].bitfields.length==0) continue;
		var opt=document.createElement("option");
		opt.value=eventsJson[i].id;
		opt.text=eventsJson[i].name;
		eventChoices.add(opt);
	}
}

function populateEventList() {
	var jumps=eventPresets.value;
	var event=eventChoices.value;
	if (event==``) return;
	
	var curr=null;
	for (let i=0;i<eventsJson.length;i++) {
		if (eventsJson[i].id==event) {
			curr=eventsJson[i];
			break;
		}
	}
	if (curr==null) return;
	
	var contents=``;
	for (let k=0;k<curr.bitfields.length;k++) {
		var bf = curr.bitfields[k];
		if (jumps==`all`||jumps==bf.name) {
			if (k>0&&jumps==`all`) contents+=addToDescRow(`&nbsp;`);
			contents+=addToDescRow(`<h3>${curr.name}: ${bf.name}</h3>`);
			if (bf.custom!=undefined&&bf.custom!="") {
				contents+=addToDescRow(`${bf.custom}`);
			} else {
				contents+=addChecked(bf.bitfield,false);
			}
		}
	}
	contents+=addToDescRow(`&nbsp;`);
	eventList.innerHTML=contents;
}

function populateStackRoutes() {
	let keyset=Object.keys(gemFarmJson);
	for (let key of keyset) {
		if (typeof(gemFarmJson[key].jump)!="number") continue;
		var opt=document.createElement("option");
		opt.value=key;
		opt.text=parseName(gemFarmJson[key],true);
		stackRoute.add(opt);
	}
	stackRoute.value=`pure4TT`;
	calculateStacks();
}

function calculateStacks() {
	var contents=``;
	if (stackRoute.value==""||stackFavour.value==""||stackReset.value==""||stackBrivZone.value=="") {
		contents+=addToDescRow(`Need more data.`);
		contents+=addToDescRow(`&nbsp;`);
		stackResult.innerHTML=contents;
		return
	}
	let f=Number(stackFavour.value);
	let r=Number(stackReset.value);
	let bz=Number(stackBrivZone.value);
	let t=Math.min(f,Math.floor(r/5))+1;
	let jsonRoute=gemFarmJson[stackRoute.value];
	let s = Number(jsonRoute.jump)+1;
	let w = jsonRoute.fs||false?5:1;
	let z = t;
	let mj=0;
	let nmj=0;
	let stacks=50;
	let route=[1,z];
	while (z<=r&&route.length<2000) {
		let checked=z>=bz&&isChecked(jsonRoute.bf,z%50||50);
		let metal=!(!stackWithMetal.checked&&z<stackStack.value);
		z += checked ? s : w;
		route.push(z);
		if ((checked||w>1)&&z<r&&z>=bz) {
			stacks=Math.ceil((stacks-0.5)*(metal?stackMult[0]:stackMult[1]));
			if (metal) mj++;
			else nmj++;
		}
	}
	let result=`<h2>Stacks Required: ${stacks}</h2>`;
	let loop=addLoop(jsonRoute.bf,s-1,jsonRoute.fs||false).substring(4);
	result+=`<ul><li>${loop}</li>`;
	result+=`<li>Thellora will land you on z${t}.</li><ul><li>If this is not on the preferred loop then you will need to either tweak your favour or delay levelling Briv until you're on a loop zone.</li></ul>`;
	if (bz>t) {
		let diff=bz-t;
		result+=`<li>The route will walk ${diff} zones before levelling Briv.</li>`;
	}
	result+=`<li>Briv will jump `+(mj+nmj)+` times</li>`;
	if (nmj>0) {
		result+=`<ul><li>${mj}x with Metalborn.</li>`;
		result+=`<li>${nmj}x without Metalborn.</li></ul>`;
	}
	result+=`</ul><h3>Route</h3>`;
	result+=`<table><tbody><tr>`;
	for (let i=0;i<route.length;i++) {
		if (i%10==0&&i>0) result+=`</tr><tr>`;
		result+=`<td>${route[i]}</td>`;
	}
	for (let i=0;i<10-(route.length%10);i++) result+=`<td>&nbsp;</td>`;
	result+=`</tr></tbody></table>`;
	
	contents+=addToDescRow(result);
	contents+=addToDescRow(`&nbsp;`);
	stackResult.innerHTML=contents;
}