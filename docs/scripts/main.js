const st=`stacksTab`;
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
const stackRuns=document.getElementById(`stackRuns`);
const stackResult=document.getElementById(`stackResult`);
const stackFavourNote=document.getElementById(`stackFavourNote`);
const stackResetNote=document.getElementById(`stackResetNote`);
const metalLevel=170;
const stackMult=[1/((100-3.2)/100),1/((100-4)/100)];
const stackResetLimits=[15,2000];
const stackFavourLimits=[0,308];
const stackStackMin=1;
const stackBrivZoneMin=1;
const stackRunsMin=1;
const resetLimitText=[`<span style="color:#DDCCEE">(Current reset cap is ${stackResetLimits[1]})</span>`,`&nbsp;`];
const favourLimitText=[`<span style="color:#DDCCEE">(Current favour cap is e${stackFavourLimits[1]})</span>`,`(Use 0 to disable Thellora)`]
const arrowQT = `<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" version="2"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"/></svg>`;
const arrowNorm = arrowQT.replace(`QT`,`Norm`);
const arrowReset = `<svg class="routeArrow routeArrowReset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="2"><g><path d="m126 15.2-5-1.3-9.4 35.2-35.2-9.5-1.3 5.1 40.1 10.7h.1z"></path><path d="M54.6 80.2 18.8 68.4l-5-1.6-13 40.1 5 1.7 11.3-35.1L53 85.2z"></path><path d="M65.2 18.3c21.8 0 40.1 15.3 44.7 35.7h5.2c-4.7-23.3-25.3-40.8-49.9-40.8-23.7 0-43.7 16.3-49.3 38.3h5.3c5.5-19.2 23.1-33.2 44-33.2zm0 91.9c-22.7 0-41.6-16.6-45.2-38.3h-5.2c3.7 24.6 24.8 43.4 50.4 43.4 22.8 0 42.1-15 48.6-35.7h-5.4c-6.2 17.8-23.2 30.6-43.2 30.6z"></path></g></svg>`;

function init() {
	populateEventChoices();
	populateStackRoutes();
	window.addEventListener('hashchange',() =>{swapTab();});
	swapTab();
	ilvlInput.addEventListener(`input`,update);
	presetsInput.addEventListener(`change`,preset);
	rarityInput.addEventListener(`change`,update);
	gildingInput.addEventListener(`change`,update);
	eventPresets.addEventListener(`change`,populateEventList);
	eventChoices.addEventListener(`change`,populateEventList);
	stackRoute.addEventListener(`change`,calculateStacks);
	stackReset.addEventListener(`change`,calculateStacks);
	stackFavour.addEventListener(`change`,calculateStacks);
	stackStack.addEventListener(`change`,calculateStacks);
	stackBrivZone.addEventListener(`change`,calculateStacks);
	stackWithMetal.addEventListener(`change`,calculateStacks);
	stackRuns.addEventListener(`change`,calculateStacks);
	update();
	calculateStacks();
}

function preset() {
	rarityInput.value=`epic`;
	gildingInput.value=`golden`;
	
	let jumps=presetsInput.value.replace(/[^\d]/g,'');
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
			let opt=document.createElement(`option`);
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
	let ilvls=ilvlInput.value;
	if (ilvls<1) {
		document.getElementById(`ilvl`).value=1;
		ilvls=1;
	}
	let rarity=determineRarity();
	let gilding=determineGilding();
	let skips=determineJumps(ilvls,rarity,gilding);
	let p=(skips[1]*100);
	let np=((1-skips[1])*100);
	let jumps=(skips[0]-1)+skips[1];
	
	let skipsL=determineJumps(ilvls-1,rarity,gilding);
	let pL=(skipsL[1]*100);
	let pDiff=p-pL;
	
	let fix=vSigFig(p,pDiff);
	p=p.toFixed(fix);
	np=np.toFixed(fix);
	
	let comment=``;
	let spacer=addToDescRow(`&nbsp;`)
	let skipBlurb=`${p}% chance to skip ${skips[0]} areas.`;
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
		comment+=parseRoute(gemFarmJson.pure3VL);
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
		case `common`:return 0.1;
		case `uncommon`:return 0.3;
		case `rare`:return 0.5;
		default:return 1;
	}
}

function determineGilding() {
	switch(gildingInput.value) {
		case `shiny`:return 1.5;
		case `golden`:return 2;
		default:return 1;
	}
}

function determineJumps(ilvls,rarity,gilding) {
	let effect=0.25*(1+(0.004*gilding*ilvls*rarity+0.996*gilding*rarity));
	let skips=1;
	let skipChance=effect;
	if (effect>1) {
		while (skipChance>1) {
			skipChance/=2;
			skips+=1;
		}
		skipChance=mapFromToRange(skipChance,0.5,1.0,0.01,1);
	}
	return [skips,skipChance];
}

function mapFromToRange(v,oldMin,oldMax,newMin,newMax) {
	return (v-oldMin)*((newMax-newMin)/(oldMax-oldMin))+newMin;
}

function addChecked(bf,br) {
	if (bf==undefined) return addToDescRow(`&nbsp;`);
	let comment=``;
	if (br) comment+=addToDescRow(`&nbsp;`);
	comment+=`<span class="routesRow">`;
	for (let i=1;i<=50;i++) {
		let checked=isChecked(bf,i)?` checked`:``;
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	return comment;
}

function addLoop(bf,j,fs) {
	let s=j+1;
	let w=fs?5:1;
	let z=1;
	let route=[z];
	while (z<=200) {
		z+=isChecked(bf,z%50||50)?s:w;
		route.push(z);
	}
	let lastOfLoop=route[route.length-1]%50;
	let loopStartIndex=0;
	for (let i=route.length-2;i>=0;i--) {
		if (route[i]%50==lastOfLoop) {
			loopStartIndex=i;
			break;
		}
	}
	let loop=[];
	for (let i=loopStartIndex;i<route.length-1;i++) {
		loop.push(route[i]%50||50);
	}
	if (loop[0]==50) {
		loop.splice(0,1);
		loop.push(50);
	}
	let spacer=` - `;
	let comment=`<br>Preferred Loop: `;
	for (let i=0;i<loop.length;i++) {
		if (i > 0) comment+=spacer;
		comment+=loop[i];
	}
	comment+=`${spacer} repeat`;
	return comment;
}

function isChecked(bf,i) {
	return (bf & BigInt(Math.pow(2,i-1)))!=0?true:false;
}

function vSigFig(n,nDif) {
	let p=2;
	if (n==100) {
		return p;
	}
	while (parseFloat(nDif.toFixed(p)) == 0) {
		p++;
	}
	return p+1;
}

function swapTab() {
	let hash=window.location.hash.substring(1).split("_");
	if (hash[0]!=""&&document.getElementById(hash[0])!=undefined) {
		document.getElementById(hash[0]).click();
	}
	if (hash.length>1) {
		switch (hash[0]) {
			case `${st}`:
				stackRoute.value=hash[1];
				stackReset.value=hash[2];
				stackFavour.value=hash[3];
				stackStack.value=hash[4];
				stackBrivZone.value=hash[5];
				stackWithMetal.checked=hash[6]==`1`?true:false;
				stackRuns.value=hash[7];
				break;
		}
	}
}

function setHash(hash) {
	if (hash==st) {
		let swm=stackWithMetal.checked?1:0;
		hash=`${st}_${stackRoute.value}_${stackReset.value}_${stackFavour.value}_${stackStack.value}_${stackBrivZone.value}_${swm}_${stackRuns.value}`;
	}
	hash=`#`+hash;
	if(history.replaceState) {
		history.replaceState(null,null,hash);
	} else {
		window.location.hash=hash;
	}
}

function populateEventChoices() {
	for (let i=0;i<eventsJson.length;i++) {
		if (eventsJson[i].bitfields.length==0) continue;
		let opt=document.createElement("option");
		opt.value=eventsJson[i].id;
		opt.text=eventsJson[i].name;
		eventChoices.add(opt);
	}
}

function populateEventList() {
	let jumps=eventPresets.value;
	let event=eventChoices.value;
	if (event==``) return;
	
	let curr=null;
	for (let i=0;i<eventsJson.length;i++) {
		if (eventsJson[i].id==event) {
			curr=eventsJson[i];
			break;
		}
	}
	if (curr==null) return;
	
	let contents=``;
	for (let k=0;k<curr.bitfields.length;k++) {
		let bf=curr.bitfields[k];
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
		let opt=document.createElement("option");
		opt.value=key;
		opt.text=parseName(gemFarmJson[key],true);
		stackRoute.add(opt);
	}
	stackRoute.value=`pure4TT`;
}

function calculateStacks() {
	let contents=``;
	if (stackRoute.value==""||stackFavour.value==""||stackReset.value==""||stackBrivZone.value=="") {
		contents+=addToDescRow(`Need more data.`);
		contents+=addToDescRow(`&nbsp;`);
		stackResult.innerHTML=contents;
		return
	}
	enforceTolerances();
	if (window.location.hash.substring(1).split("_")[0]==st) {
		setHash(st);
	}
	let f=Number(stackFavour.value);
	let r=Number(stackReset.value);
	let bz=Number(stackBrivZone.value);
	let runs=Number(stackRuns.value);
	let jsonRoute=gemFarmJson[stackRoute.value];
	let s=Number(jsonRoute.jump)+1;
	let w=jsonRoute.fs||false?5:1;
	let t=Math.min(f,Math.floor(r/5))+1+(bz==1?s-1:0);
	let swm=stackWithMetal.checked;
	let mj=swm&&f==0&&bz<=1?1:0;
	let nmj=!swm&&f==0&&bz<=1?1:0;
	let stacks=50;
	let z=t;
	let route=z>1?[1,z]:[1];
	let nqts=f>0?1:0;
	for (let i=0;i<runs;i++) {
		z=t;
		if (bz==1) {
			stacks=Math.ceil((stacks-0.5)*(metal?stackMult[0]:stackMult[1]));
			if (metal) { mj++ } else { nmj++ }
		}
		while (z<=r&&route.length<2000) {
			let checked=z>=bz&&isChecked(jsonRoute.bf,z%50||50);
			let metal=!(!swm&&z<stackStack.value);
			z+=checked?s:w;
			if (i==0) route.push(z);
			if (isQT(jsonRoute,route[route.length-2]%50,route[route.length-1]%50)) nqts++;
			if (checked||w>1) {
				if (metal) mj++
				else nmj++;
			}
			if ((checked||w>1)&&z<r&&z>=bz) stacks=Math.ceil((stacks-0.5)*(metal?stackMult[0]:stackMult[1]));
		}
	}
	let result=`<h2>Stacks Required: ${stacks.toLocaleString()}</h2>`;
	let loop=addLoop(jsonRoute.bf,s-1,jsonRoute.fs||false).substring(4);
	result+=`<ul><li>${loop}</li>`;
	let pBriv=(bz==1?`<li>This is because she might consume a Briv jump at the same time. Note that this can be unreliable. It is highly recommended that you level Briv at zone 2 or higher with the level up addon.`:``);
	if (f>0) {
		result+=`<li>Thellora will land you on z${t}.</li><ul>${pBriv}<li>If this is not on the preferred loop then you may need to either tweak your favour or delay levelling Briv until you're on a loop zone.</li></ul>`;
	}
	if (bz>t) {
		let diff=bz-t;
		let pl=(diff>1?`s`:``);
		result+=`<li>The route will walk ${diff} zone${pl} before levelling Briv.</li>`;
	}
	let perRun=(runs>1)?` (per run)`:``;
	result+=`<li>Briv will jump `+(mj+nmj)+` times${perRun}.</li>`;
	if (nmj>0||runs>1) result+=`<ul>`;
	if (runs>1) {
		let type=``;
		switch (runs) {
			case 2: type=`Doubles`; break;
			case 3: type=`Triples`; break;
			case 4: type=`Quadruples`; break;
			default: type=`${runs} Times`;
		}
		result+=`<li>Running ${type}.</li>`;
	}
	if (nmj>0) {
		result+=`<li>${mj}x with Metalborn${perRun}.</li>`;
		result+=`<li>${nmj}x without Metalborn${perRun}.</li>`;
	}
	if (nmj>0||runs>1) result+=`</ul>`;
	result+=`<li>This route has ${nqts} QTs out of ${route.length-1} transitions.</li>`;
	result+=`</ul><h3>Route</h3>`;
	result+=`<div class="stacksRoutesTable">`;
	for (let i=0;i<route.length;i++) {
		let icon = i==route.length-1?arrowReset:isQT(jsonRoute,route[i]%50,route[i+1]%50)?arrowQT:arrowNorm;
		result+=`<span class="stacksRoutesTableItem">${route[i]} ${icon}</span>`;
	}
	result+=`</div>`;
	
	contents+=addToDescRow(result);
	contents+=addToDescRow(`&nbsp;`);
	stackResult.innerHTML=contents;
}

function enforceTolerances() {
	if (stackReset.value<stackResetLimits[0]) stackReset.value=stackResetLimits[0];
	if (stackFavour.value<stackFavourLimits[0]) stackFavour.value=stackFavourLimits[0];
	if (stackStack.value<stackStackMin) stackFavour.value=stackStackMin;
	if (stackBrivZone.value<stackBrivZoneMin) stackBrivZone.value=stackBrivZoneMin;
	if (stackRuns.value<stackRunsMin) stackRuns.value=stackRunsMin;
	if (stackReset.value>stackResetLimits[1]&&stackResetNote.innerHTML!=resetLimitText[0]) {
		stackResetNote.innerHTML=resetLimitText[0];
	} else if (stackReset.value<=stackResetLimits[1]&&stackResetNote.innerHTML!=resetLimitText[1]) {
		stackResetNote.innerHTML=resetLimitText[1];
	}
	if (stackFavour.value>stackFavourLimits[1]&&stackFavourNote.innerHTML!=favourLimitText[0]) {
		stackFavourNote.innerHTML=favourLimitText[0];
	} else if (stackFavour.value<=stackFavourLimits[1]&&stackFavourNote.innerHTML!=favourLimitText[1]) {
		stackFavourNote.innerHTML=favourLimitText[1];
	}
}

function isQT(route,area1,area2) {
	if (route.qts==undefined||route.qts.length!=50) return false;
	let qts = route.qts;
	if (qts[area1-1]==qts[area2-1]) return true;
	return false;
}