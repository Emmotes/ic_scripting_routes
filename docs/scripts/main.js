const st=`stacksTab`;
const ilvlInput=document.getElementById(`ilvl`);
const presetsInput=document.getElementById(`presets`);
const rarityInput=document.getElementById(`rarity`);
const gildingInput=document.getElementById(`gilding`);
const shinyNote=document.getElementById(`shinyNote`);
const jump=` checked`;
const stackRoute=document.getElementById(`stackRoute`);
const stackReset=document.getElementById(`stackReset`);
const stackFavour=document.getElementById(`stackFavour`);
const stackStack=document.getElementById(`stackStack`);
const stackBrivZone=document.getElementById(`stackBrivZone`);
const stackz1Form=document.getElementById(`stackz1Form`);
const stackWithMetal=document.getElementById(`stackWithMetal`);
const stackRuns=document.getElementById(`stackRuns`);
const stackResult=document.getElementById(`stackResult`);
const stackFavourNote=document.getElementById(`stackFavourNote`);
const stackResetNote=document.getElementById(`stackResetNote`);
const metalLevel=170;
const stackMult=[1/0.968,1/0.96];
const stackResetLimits=[15,2500];
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
var tester=false;

async function init() {
	populateStackRoutes();
	//dealWithTesters();
	window.addEventListener('hashchange',() =>{swapTab();});
	swapTab();
	ilvlInput.addEventListener(`input`,update);
	presetsInput.addEventListener(`change`,preset);
	rarityInput.addEventListener(`change`,update);
	gildingInput.addEventListener(`change`,update);
	stackRoute.addEventListener(`change`,calculateStacks);
	stackReset.addEventListener(`change`,calculateStacks);
	stackFavour.addEventListener(`change`,calculateStacks);
	stackStack.addEventListener(`change`,calculateStacks);
	stackBrivZone.addEventListener(`change`,calculateStacks);
	stackz1Form.addEventListener(`change`,calculateStacks);
	stackWithMetal.addEventListener(`change`,calculateStacks);
	stackRuns.addEventListener(`change`,calculateStacks);
	update();
	await calculateStacks();
}

function dealWithTesters() {
	if (localStorage.routesTester!=undefined&&localStorage.routesTester!=``)
		tester=localStorage.routesTester==1?true:false;
	if (tester)
		return
	let bannedPresets=[`7.99997j`,`14j`,`15.99999988j`];
	let bannedRoutes=[`short87TT`,`pure14TT`,`feat144TT`,`feat149TT`,`short1615TT`];
	for (let i=presetsInput.length-1; i>=0; i--)
		if (bannedPresets.includes(presetsInput.options[i].value))
			presetsInput.remove(i);
	for (let i=stackRoute.length-1; i>=0; i--)
		if (bannedRoutes.includes(stackRoute.options[i].value))
			stackRoute.remove(i);
}

function preset() {
	rarityInput.value=`epic`;
	gildingInput.value=`golden`;
	
	let jumps=Math.round(presetsInput.value.replace(/[^0-9\.]+/g, ""));
	ilvlInput.value=500*Math.pow(2,jumps-1)-374;
	if (`${jumps}j`!=`${presetsInput.value}`)
		ilvlInput.value-=1;
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
	let ilvls=ilvlInput.value-1;
	if (ilvls<1) {
		document.getElementById(`ilvl`).value=1;
		ilvls=1;
	}
	let rarity=determineRarity();
	let gilding=determineGilding();
	let skips=determineJumps(ilvls,rarity,gilding);
	let p=(skips[1]*100);
	let np=((1-skips[1])*100);
	let jumps=Number((skips[0]-1)+skips[1]);
	
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
	if (skips[1]!=1&&jumps>4&&(jumps<7.99||jumps>8)&&(jumps<11.99||jumps>12)&&(jumps<15.99||jumps>16)) {
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
		comment+=parseRoute(gemFarmJson.feat64TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure6TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure6LL);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat64RAC);
	} else if (jumps==7) {
		comment+=parseRoute(gemFarmJson.feat74TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure7TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure7TTS);
	} else if (jumps==8) {
		comment+=parseRoute(gemFarmJson.feat84TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.pure8TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat84TTS);
	} else if (jumps==9) {
		comment+=parseRoute(gemFarmJson.pure9TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat94TT);
	} else if (jumps==11) {
		comment+=parseRoute(gemFarmJson.pure11TT);
	} else if (jumps==14) {
		comment+=parseRoute(gemFarmJson.pure14TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat149TT);
	} else if (jumps<3) {
		comment+=parseRoute(gemFarmJson.cf);
	} else if (jumps<4) {
		comment+=parseRoute(gemFarmJson.pre4TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.cf);
	} else if (jumps>8&&jumps<9) {
		comment+=parseRoute(gemFarmJson.mixed89TT);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.cf);
		comment+=spacer;
		comment+=parseRoute(gemFarmJson.feat4TT);
	} else if (jumps>7.99&&jumps<8) {
		comment+=parseRoute(gemFarmJson.short87TT);
	} else if (jumps>11.99&&jumps<12) {
		comment+=parseRoute(gemFarmJson.short1211TT);
	} else if (jumps>15.99&&jumps<16) {
		comment+=parseRoute(gemFarmJson.short1615TT);
	} else {
		if (jumps > 4) {
			let useApp=` and use applicable routes.`;
			let c=`<h3>No Specialised Routes</h3><p>There aren't any specific routes for this particular jump value. You're going to have to try the options below and use whichever is fastest for you.</p>`;
			c+=`<ul>`;
			if (Math.round(jumps) != jumps) {
				let rd=Math.floor(jumps);
				if ((rd >= 5 && rd <= 8) || rd == 11 || rd == 14)
					c+=equipFeatDesc(aaf,rd);
			}
			if (jumps > 9)
				c+=equipFeatDesc(ssf,9);
			c+=equipFeatDesc(whf,4);
			c+=`<li>Use the Cursed Farmer route below.</li></ul>`;
			comment+=addToDescRow(c);
		}
		comment+=parseRoute(gemFarmJson.cf);
	}
	document.getElementById('wrapper').innerHTML=comment;
}

function addToDescRow(content) {
	return `<span class="routesRow"><span class="routesDesc">${content}</span></span>`;
}

function equipFeatDesc(feat,jump) {
	return `<li>Equip the ${feat} feat to limit Briv to 100% ${jump}j and use applicable routes.</li>`;
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
	let effect=0.25*(1+rarity*gilding*(1+ilvls/250));
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

function addLoop(bf,q,e) {
	let s=q;
	let w=e;
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
				stackz1Form.value=hash[6];
				stackWithMetal.checked=hash[7]==`1`?true:false;
				stackRuns.value=hash[8];
				break;
		}
	}
}

function setHash(hash) {
	if (hash==st) {
		let swm=stackWithMetal.checked?1:0;
		hash=`${st}_${stackRoute.value}_${stackReset.value}_${stackFavour.value}_${stackStack.value}_${stackBrivZone.value}_${stackz1Form.value}_${swm}_${stackRuns.value}`;
	}
	hash=`#`+hash;
	if(history.replaceState) {
		history.replaceState(null,null,hash);
	} else {
		window.location.hash=hash;
	}
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

async function calculateStacks() {
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
	let adv=await pullAdvJson(jsonRoute.adv);
	let s=Number(jsonRoute.q);
	let w=Number(jsonRoute.e);
	let t=Math.min(f,Math.floor(r/5))+1;
	let swm=stackWithMetal.checked;
	let mj=0;
	let nmj=0;
	if (bz==1&&f>0) {
		switch (stackz1Form.value) {
			case "q":
				t+=(s-1);
				if (swm) mj++;
				else nmj++;
				break;
			case "e":
				t+=(w-1);
				if (w>1) {
					if (swm) mj++;
					else nmj++;
				}
				if (w==1&&bz==1)
					bz=2;
				break;
		}
	}
	let stacks=48;
	let z=t;
	let modz=z%50||50;
	let bt=z%5==0;
	let route=z>1?[1,z]:[1];
	let mehs=[];
	let bads=[];
	let dynaMinsc=true;
	let MImoHeir=true;
	while (z<r&&route.length<2000) {
		modz=z%50||50;
		let monTags=getZoneMonTags(adv,modz);
		if (z>1&&z%5!=0) {
			if (dynaMinsc&&!isDynaMinscOnly(monTags))
				dynaMinsc=false;
			if (MImoHeir&&!isMImoHeir(monTags))
				MImoHeir=false;
		}
		if (badZones[jsonRoute.sname].hit.includes(modz))
			mehs.push(z)
		if (badZones[jsonRoute.sname].arm.includes(modz))
			bads.push(z)
		let checked=z>=bz&&isChecked(jsonRoute.bf,modz);
		metal=!(!swm&&z<=stackStack.value);
		z+=z<bz?1:checked?s:w;
		route.push(z);
		if ((checked||w>1)&&z>=bz) {
			if (metal) mj++
			else nmj++;
		}
	}
	for (let i=0;i<(nmj*runs);i++) stacks=Math.ceil((stacks-0.5)*stackMult[1]);
	for (let i=0;i<(mj*runs);i++) stacks=Math.ceil((stacks-0.5)*stackMult[0]);
	let result=`<h2>Stacks Required: ${stacks.toLocaleString()}</h2>`;
	let loop=addLoop(jsonRoute.bf,jsonRoute.q,jsonRoute.e).substring(4);
	result+=`<ul><li>${loop}</li>`;
	let pBriv=``;
	if (bt) {
		pBriv+=`<li>This is a Bad Travelling. You do not want Thellora to be landing on a boss zone under any circumstances. `
		if (bz==1)
			pBriv+=`You can fix this by levelling Briv on z2 instead of z${bz}.`;
		else if (stackBrivZone.value==1&&bz==2)
			pBriv+=`You can fix this by using Q formation on z1 instead of E.`;
		else
			pBriv+=`You can fix this by levelling Briv on z1 instead of z${bz}.`;
	}
	if (bz==1)
		pBriv+=`<li>This is because you've set Briv to combine his jump with Thellora's by levelling him on z1.</li>`;
	if (f>0)
		result+=`<li>Thellora will land you on z${t}.</li><ul>${pBriv}<li>If this is not on the preferred loop then you might need to either tweak your favour or delay levelling Briv until you're on a loop zone.</li></ul>`;
	if (dynaMinsc)
		result+=`<li>${dyn.replace("<br>","")}</li>`;
	else if (MImoHeir)
		result+=`<li>${mimo.replace("<br>","")}</li>`;
	if (route[route.length-1]==r) {
		let rb=r%5==0;
		result+=`<li>This route lands on your reset zone. It is highly recommended that you avoid doing this. ${rb?"In this case it's a boss zone so you will get the gems from that - however - c":"C"}ompleting your reset zone immediately starts the modron reset which means any bosses you could have jumped afterwards will be ignored. So you're essentially wasting time completing a zone for ${rb?"very little":"no"} benefit.</li>`;
	}
	if (bz>t) {
		let diff=bz-t;
		let pl=(diff>1?`s`:``);
		result+=`<li>The route will walk ${diff} zone${pl} before levelling Briv.</li>`;
	}
	let perRun=(runs>1)?` (per run)`:``;
	result+=`<li>Briv will jump ${(mj+nmj)} times${perRun}.</li>`;
	let wz=route.length-1-(mj+nmj);
	let wq=wz>1?`${wz} times`:`once`;
	if (wz>0) result+=`<li>Briv will walk ${wq}${perRun}.</li>`;
	if (nmj>0||runs>1||mehs.length>0||bads.length>0) result+=`<ul>`;
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
	if (mehs.length>0) {
		let plural=mehs.length==1?``:`s`;
		result+=`<li>This route will hit ${mehs.length} Hit-Based Boss zone${plural}.</li>`;
	}
	if (bads.length>0) {
		let plural=bads.length==1?``:`s`;
		result+=`<li>This route will hit ${bads.length} Armoured Boss zone${plural}. These are typically run killers so you should change some values to avoid them.</li>`;
	}
	if (nmj>0||runs>1||mehs.length>0||bads.length>0) result+=`</ul>`;
	let loopTable=`</ul><h3>Route</h3><p>Every zone in the route below has a tooltip on mouseover with more details - including quests enemies and attack types.</p><div class="stacksRoutesTable">`;
	let nqts=0;
	let eszFound=false;
	for (let i=0;i<route.length;i++) {
		let icon=``;
		let start=route[i]%50||50;
		let end=route[i+1]%50||50;
		let last=(i+1)>=route.length;
		let walk=!last&&(route[i+1]-route[i])==1;
		let qt=last?false:isQT(jsonRoute,start,end);
		if (qt) nqts++;
		if (i==route.length-1) icon=arrowReset;
		else if (i==0&&f>0) {
			icon=(qt?thelloraQT:thelloraNorm);
			if (bz==1) icon+=(qt?arrowQT:arrowNorm);
		} else {
			icon=walk?(qt?walkQT:walkNorm):(qt?arrowQT:arrowNorm);
		}
		let style=``;
		if (mehs.includes(route[i]))
			style=` hitZone`;
		else if (bads.includes(route[i]))
			style=` armZone`;
		else if (route[i]%5==0)
			style=` bosZone`;
		if (!eszFound&&route[i]>stackStack.value) {
			style+=` stkZone`;
			eszFound=true;
		}
		let tooltip=createTooltipText(adv,route[i]);
		loopTable+=`<span class="stacksRoutesTableItem${style}">${route[i]} ${icon}${tooltip}</span>`;
	}
	loopTable+=`</div><br><h4>Key</h4><div class="stacksRoutesKeyTable">`;
	result+=`<li>This route has ${nqts} QTs out of ${route.length-1} transitions.</li>${loopTable}`;
	for (let i=0;i<=11;i++) {
		let curr=`&nbsp;`;
		let style=``;
		switch(i) {
			case  0: curr=`${thelloraNorm} Thellora`; break;
			case  1: curr=`${arrowNorm} Jump`; break;
			case  2: curr=`${walkNorm} Walk`; break;
			case  3: curr=`${thelloraQT} Thellora QT`; break;
			case  4: curr=`${arrowQT} Jump QT`; break;
			case  5: curr=`${walkQT} Walk QT`; break;
			case  6: curr=`Earliest Stack Zone`; style=` stkZone`; break;
			case  7: curr=`${arrowReset} Modron Reset`; break;
			case  9: curr=`Normal Boss Zone`; style=` bosZone`; break;
			case 10: curr=`Hit-Based Boss Zone`; style=` hitZone`; break;
			case 11: curr=`Armoured Boss Zone`; style=` armZone`; break;
		}
		result+=`<span class="stacksRoutesKeyTableItem${style}">${curr}</span>`;
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

function createTooltipText(adv,zone) {
	let boss=(zone%5==0?`Boss `:``);
	let mod=zone%50||50;
	let t=`<span class="ttc"><span class="ttcRow">${boss}Zone: ${zone} (${mod})</span>`;
	let mons=[];
	let area=adv.areas[mod-1];
	let quest=adv.quests[mod-1];
	let questText=""
	if (quest.type==1)
		questText=`Collect`;
	else
		questText=`Kill`;
	questText+=` ${quest.goal} ${quest.desc}`;
	t+=`<span class="ttcRow">${questText}</span>`;
	if (area.waves!=undefined)
		for (let wave of area.waves)
			for (let mon of wave)
				mons.push(mon);
	if (area.monsters!=undefined)
		for (let mon of area.monsters)
			mons.push(mon);
	if (area.staticMonsters!=undefined)
		for (let mon of area.staticMonsters)
			mons.push(mon);
	let monNames = [];
	let monAtks = [];
	let monTags = [];
	for (let monId of mons) {
		let mon="";
		for (let monster of adv.monsters) {
			if (monster.id == monId) {
				mon = monster;
				break;
			}
		}
		if (mon=="") continue;
		if (!monNames.includes(mon.name))
			monNames.push(mon.name);
		for (let tag of mon.tags) {
			let isAtk = tag==`ranged`||tag==`melee`||tag==`magic`;
			if (isAtk&&!monAtks.includes(tag))
				monAtks.push(tag);
			else if (!isAtk&&!monTags.includes(tag))
				monTags.push(tag);
		}
	}
	if (monNames.length>0) {
		t+=`<span class="ttcRow ttcTop">Enemies:</span>`;
		for (let monName of monNames)
			t+=`<span class="ttcRow ttcLeft">${monName}</span>`;
	}
	if (monAtks.length>0) {
		t+=`<span class="ttcRow ttcTop">Attack Types:</span>`;
		for (let atk of monAtks)
			t+=`<span class="ttcRow ttcLeft">${capitalize(atk)}</span>`;
	}
	if (monTags.length>0) {
		t+=`<span class="ttcRow ttcTop">Other Tags:</span>`;
		for (let tag of monTags)
			t+=`<span class="ttcRow ttcLeft">${capitalize(tag)}</span>`;
	}
	t+=`</span>`;
	return t;
}

function getZoneMonTags(adv,zone) {
	let area=adv.areas[zone-1];
	let mons=[];
	if (area.waves!=undefined)
		for (let wave of area.waves)
			for (let mon of wave)
				mons.push(mon);
	if (area.monsters!=undefined)
		for (let mon of area.monsters)
			mons.push(mon);
	if (area.staticMonsters!=undefined)
		for (let mon of area.staticMonsters)
			mons.push(mon);
	let monTags = [];
	for (let monId of mons) {
		let mon="";
		for (let monster of adv.monsters) {
			if (monster.id == monId) {
				mon = monster;
				break;
			}
		}
		if (mon=="") continue;
		for (let tag of mon.tags) {
			let isAtk = tag==`ranged`||tag==`melee`||tag==`magic`;
			if (!isAtk&&!monTags.includes(tag))
				monTags.push(tag);
		}
	}
	return monTags;
}

function isDynaMinscOnly(monTags) {
	for (let monTag of monTags)
		if (monTag!="fey"&&monTag!="humanoid"&&enemyTypes.includes(monTag))
			return false;
	return true;
}

function isMImoHeir(monTags) {
	for (let monTag of monTags)
		if (monTag!="fey"&&monTag!="humanoid"&&monTag!="beast"&&enemyTypes.includes(monTag))
			return false;
	return true;
}

async function pullAdvJson(id) {
	var response = await fetch(`advData/${id}.json`)
		.then(response => response.text())
		.catch(err => console.log(err));
	return await JSON.parse(response);
}

function capitalize(s) {
	if (s==`armor_based`)
		return `Armoured`;
	if (s==`hits_based`)
		return `Hits-Based`;
    return s && s[0].toUpperCase() + s.slice(1);
}