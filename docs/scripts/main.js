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
const stackMult=[1/0.968,1/0.96];
const stackResetLimits=[15,2000];
const stackFavourLimits=[0,308];
const stackStackMin=1;
const stackBrivZoneMin=1;
const stackRunsMin=1;
const resetLimitText=[`<span style="color:#DDCCEE">(Current reset cap is ${stackResetLimits[1]})</span>`,`&nbsp;`];
const favourLimitText=[`<span style="color:#DDCCEE">(Current favour cap is e${stackFavourLimits[1]})</span>`,`(Use 0 to disable Thellora)`]
const thelloraQT=`<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6897 2.71002C21.6097 2.53002 21.4697 2.37999 21.2797 2.29999C21.1897 2.25999 21.0897 2.23999 20.9897 2.23999H11.9897C11.5797 2.23999 11.2397 2.57999 11.2397 2.98999C11.2397 3.39999 11.5797 3.73999 11.9897 3.73999H19.1797L2.45969 20.46C2.16969 20.75 2.16969 21.23 2.45969 21.52C2.60969 21.67 2.79966 21.74 2.98966 21.74C3.17966 21.74 3.36969 21.67 3.51969 21.52L20.2397 4.79999V12C20.2397 12.41 20.5797 12.75 20.9897 12.75C21.3997 12.75 21.7397 12.41 21.7397 12V3C21.7497 2.9 21.7297 2.81002 21.6897 2.71002Z"/><path opacity="0.4" d="M17.3991 18.1501C17.2091 18.1501 17.019 18.08 16.8691 17.93L6.06906 7.13004C5.77906 6.84004 5.77906 6.36004 6.06906 6.07004C6.35906 5.78004 6.83906 5.78004 7.12906 6.07004L17.929 16.87C18.219 17.16 18.219 17.64 17.929 17.93C17.779 18.08 17.5891 18.1501 17.3991 18.1501Z"/></svg>`;
const thelloraNorm=thelloraQT.replace(`QT`,`Norm`);
const arrowQT=`<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="1.1"><g id="_x33_6_1_"><path d="M91.6 88.8 126.4 54l-4.5-4.5-28.2 28.2V54.6C93.7 28.7 72.8 7.8 47 7.8 21.2 7.8.3 28.8.3 54.6v65.6h6.2V54.6C6.4 32.2 24.6 14 46.9 14c22.4 0 40.5 18.2 40.5 40.6v22.9L59 49.2l-4.5 4.5 31.6 31.6 4.5 4.5 1-1z" id="icon_6_"/></g></svg>`;
const arrowNorm=arrowQT.replace(`QT`,`Norm`);
const walkQT=`<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" version="2"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"/></svg>`;
const walkNorm=walkQT.replace(`QT`,`Norm`);
const arrowReset=`<svg class="routeArrow routeArrowReset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="2"><g><path d="m126 15.2-5-1.3-9.4 35.2-35.2-9.5-1.3 5.1 40.1 10.7h.1z"></path><path d="M54.6 80.2 18.8 68.4l-5-1.6-13 40.1 5 1.7 11.3-35.1L53 85.2z"></path><path d="M65.2 18.3c21.8 0 40.1 15.3 44.7 35.7h5.2c-4.7-23.3-25.3-40.8-49.9-40.8-23.7 0-43.7 16.3-49.3 38.3h5.3c5.5-19.2 23.1-33.2 44-33.2zm0 91.9c-22.7 0-41.6-16.6-45.2-38.3h-5.2c3.7 24.6 24.8 43.4 50.4 43.4 22.8 0 42.1-15 48.6-35.7h-5.4c-6.2 17.8-23.2 30.6-43.2 30.6z"></path></g></svg>`;

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
	let t=Math.min(f,Math.floor(r/5))+1;
	let swm=stackWithMetal.checked;
	let mj=0;
	let nmj=0;
	if (bz==1) {
		t+=(s-1);
		if (swm) mj++;
		else nmj++;
	}
	let stacks=50;
	let z=t;
	let route=z>1?[1,z]:[1];
	while (z<=r&&route.length<2000) {
		let checked=z>=bz&&isChecked(jsonRoute.bf,z%50||50);
		metal=!(!swm&&z<stackStack.value);
		z+=z<bz?1:checked?s:w;
		route.push(z);
		if (checked||w>1) {
			if (metal) mj++
			else nmj++;
		}
	}
	for (let i=0;i<((mj>0?nmj:nmj-1)*runs);i++) stacks=Math.ceil((stacks-0.5)*stackMult[1]);
	for (let i=0;i<((mj>0?mj-1:mj)*runs);i++) stacks=Math.ceil((stacks-0.5)*stackMult[0]);
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
	result+=`<li>Briv will jump ${(mj+nmj)} times${perRun}.</li>`;
	let wz=route.length-1-(mj+nmj)-(f==0?0:1);
	let wq=wz>1?`${wz} times`:`once`;
	if (wz>0) result+=`<li>Briv will walk ${wq}${perRun}.</li>`;
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
	let loopTable=`</ul><h3>Route</h3><div class="stacksRoutesTable">`;
	let nqts=0;
	for (let i=0;i<route.length;i++) {
		let icon=``;
		let start=route[i]%50;
		let end=route[i+1]%50;
		let walk=(end-start)==1;
		let qt=isQT(jsonRoute,start,end);
		if (qt) nqts++;
		if (i==route.length-1) icon=arrowReset;
		else if (i==0&&f>0) {
			icon=(qt?thelloraQT:thelloraNorm);
			if (bz==1) icon+=(qt?arrowQT:arrowNorm);
		} else {
			icon=walk?(qt?walkQT:walkNorm):(qt?arrowQT:arrowNorm);
		}
		loopTable+=`<span class="stacksRoutesTableItem">${route[i]} ${icon}</span>`;
	}
	loopTable+=`</div><br><h4>Key</h4><div class="stacksRoutesKeyTable">`;
	result+=`<li>This route has ${nqts} QTs out of ${route.length-1} transitions.</li>${loopTable}`;
	for (let i=0;i<7;i++) {
		result+=`<span class="stackRoutesTableItem">`;
		switch(i) {
			case 0: result+=`${thelloraNorm} Thellora`; break;
			case 1: result+=`${arrowNorm} Jump`; break;
			case 2: result+=`${walkNorm} Walk`; break;
			case 3: result+=`${thelloraQT} Thellora QT`; break;
			case 4: result+=`${arrowQT} Jump QT`; break;
			case 5: result+=`${walkQT} Walk QT`; break;
			case 6: result+=`${arrowReset} Modron Reset`; break;
		}
		result+=`</span>`;
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
