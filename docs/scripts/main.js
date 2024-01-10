const ilvlInput=document.getElementById(`ilvl`);
const presetsInput=document.getElementById(`presets`);
const rarityInput=document.getElementById(`rarity`);
const gildingInput=document.getElementById(`gilding`);
const shinyNote=document.getElementById(`shinyNote`);
const eventPresets=document.getElementById(`eventPresets`);
const eventChoices=document.getElementById(`eventChoices`);
const eventList=document.getElementById(`eventList`);
const fsa=`<br />This requires <a href="https://github.com/imp444/IC_Addons/tree/main/IC_BrivGemFarm_BrivFeatSwap_Extra" target="_blank">ImpEGamer's BrivFeatSwap</a> addon.`;
const fcsa=`<br/>This will be faster with mouse clicks enabled.`;
const jump=` checked`;
const tt=`Tall Tales is in the Witchlight campaign.`;
const ll=`The Roots of Loomlurch is in the Witchlight campaign.`;
const cf=`Cursed Farmer is in The Grand Tour of the Sword Coast campaign.`;
const rac=`Resolve Amongst Chaos is in the Descent into Avernus campaign.`
const bbb=`Don't forget to enable Vajra patron to benefit from the Brisk Benefactor Tier 3 Corellon local blessing.`
const json=[
	{
		id: 1,
		name: "Highharvestide",
		bitfields: []
	},
	{
		id: 2,
		name: "Liars' Night",
		bitfields: []
	},
	{
		id: 3,
		name: "Feast of the Moon",
		bitfields: []
	},
	{
		id: 4,
		name: "Simril",
		bitfields: []
	},
	{
		id: 5,
		name: "Wintershield",
		bitfields: [
			{
				name: "1j",
				bitfield: 843325416243167n
			},
			{
				name: "2j",
				bitfield: 966951756085247n
			},
			{
				name: "3j",
				bitfield: 1125623954636799n
			},
			{
				name: "4j",
				bitfield: 1068016077999467n
			},
			{
				name: "5j",
				custom: "Use the 4j route with the Wasting Haste feat."
			},
			{
				name: "6j",
				bitfield: 1116861684840824n
			},
			{
				name: "7j",
				bitfield: 1121482463737855n
			},
			{
				name: "8j",
				bitfield: 1125887020841951n
			},
			{
				name: "9j",
				bitfield: 965761360567659n
			},
			{
				name: "10j",
				bitfield: 597582421159869n
			},
			{
				name: "11j",
				bitfield: 949667735009275n
			}
		]
	},
	{
		id: 9,
		name: "Midwinter",
		bitfields: [
			{
				name: "1j",
				bitfield: 984990484524027n
			},
			{
				name: "2j",
				bitfield: 1055529014591485n
			},
			{
				name: "3j",
				bitfield: 1090578061982719n
			},
			{
				name: "4j",
				bitfield: 544790273178991n
			},
			{
				name: "5j",
				bitfield: 1117101666270207n
			},
			{
				name: "6j",
				bitfield: 1121359052636155n
			},
			{
				name: "7j",
				bitfield: 1123700883570621n
			},
			{
				name: "8j",
				bitfield: 984062901574654n
			},
			{
				name: "9j",
				bitfield: 474421529062831n
			},
			{
				name: "10j",
				bitfield: 1125581001324540n
			},
			{
				name: "11j",
				bitfield: 1125762333539327n
			}
		]
	},
	{
		id: 10,
		name: "Grand Revel",
		bitfields: []
	},
	{
		id: 12,
		name: "Fleetswake",
		bitfields: []
	},
	{
		id: 16,
		name: "Festival of Fools",
		bitfields: []
	},
	{
		id: 18,
		name: "Greengrass",
		bitfields: []
	},
	{
		id: 23,
		name: "The Running",
		bitfields: []
	},
	{
		id: 26,
		name: "The Great Modron March",
		bitfields: []
	},
	{
		id: 30,
		name: "Dragondown",
		bitfields: []
	},
	{
		id: 37,
		name: "Founder's Day",
		bitfields: []
	},
	{
		id: 38,
		name: "Midsummer",
		bitfields: []
	},
	{
		id: 39,
		name: "Ahghairon's Day",
		bitfields: []
	},
	{
		id: 49,
		name: "Brightswords",
		bitfields: []
	}
];


function init() {
	populateEventChoices();
	ilvlInput.addEventListener(`input`, update);
	presetsInput.addEventListener(`change`, preset);
	rarityInput.addEventListener(`change`, update);
	gildingInput.addEventListener(`change`, update);
	window.addEventListener('hashchange',() =>{swapTab();});
	swapTab();
	eventPresets.addEventListener(`change`, populateEventList);
	eventChoices.addEventListener(`change`, populateEventList);
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
		skipBlurb+=`<br/>${np}% chance to skip ${skips[0]-1} areas.`;
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
		comment+=pure2LL();
		comment+=spacer;
		comment+=cursedFarmer();
	} else if (jumps==3) {
		comment+=pure3LL();
		comment+=spacer;
		comment+=cursedFarmer();
	} else if (jumps==4) {
		comment+=pure4TT();
	} else if (jumps==5) {
		comment+=feat54TT();
		comment+=spacer;
		comment+=feat4TT();
	} else if (jumps==6) {
		comment+=pure6LL();
		comment+=spacer;
		comment+=feat64TT();
		comment+=spacer;
		comment+=feat64RAC();
		comment+=spacer;
		comment+=pure6TT();
	} else if (jumps==7) {
		comment+=pure7TT();
		comment+=spacer;
		comment+=feat74TT();
	} else if (jumps==8) {
		comment+=feat84TT();
		comment+=spacer;
		comment+=pure8TT();
	} else if (jumps==9) {
		comment+=feat94TT();
		comment+=spacer;
		comment+=pure9TT();
	} else if (jumps==11) {
		comment+=pure11TT();
	} else if (jumps<3.25) {
		comment+=cursedFarmer();
	} else if (jumps<4) {
		comment+=pre4TT();
		comment+=spacer;
		comment+=cursedFarmer();
	} else if (jumps>4&&jumps<5) {
		comment+=feat4TT();
	} else if (jumps>5&&jumps<6) {
		comment+=feat4TT();
	//} else if (jumps>6&&jumps<7) {
	//	comment+=mixed67TT();
	//} else if (jumps>7&&jumps<8) {
	//	comment+=mixed78TT();
	} else if (jumps>=8&&jumps<9) {
		comment+=mixed89TT();
	} else {
		comment+=unknownRoute();
	}
	document.getElementById('wrapper').innerHTML=comment;
}

function unknownRoute() {
	var comment=addToDescRow(`<h3>Unknown</h3>You have a skip amount and jump chance that I haven't accounted for yet. I have no idea what route you need.`);
	return comment;
}

function cursedFarmer() {
	var bf = 1125899906842623n;
	return addToDescRow(`<h3>Cursed Farmer</h3>${cf} You won't want to be walking any areas as that will only slow you down.`)+addChecked(bf,true);
}

function pure2LL() {
	var bf = 1053332137310143n;
	return addToDescRow(`<h3>Roots of Loomlurch (100% 2j)</h3>${ll} ${bbb}`)+addChecked(bf,true);
}

function pure3LL() {
	var bf = 1090715500149758n;
	return addToDescRow(`<h3>Roots of Loomlurch (100% 3j)</h3>${ll} ${bbb}`)+addChecked(bf,true);
}

function pre4TT() {
	var bf = 508470925670862n;
	return addToDescRow(`<h3>Tall Tales (Mixed 3/4j)</h3>${tt} ${bbb}`)+addChecked(bf,true);
}

function pure4TT() {
	var bf = 544309226487279n;
	return addToDescRow(`<h3>Tall Tales (100% 4j)</h3>${tt} ${bbb}`)+addChecked(bf,true);
}

function feat4TT() {
	var bf = 544309226487279n;
	return addToDescRow(`<h3>Tall Tales (100% 4j with Wasting Haste Feat)</h3>${tt} You'll need to equip Briv's Wasting Haste feat to return to pure 4j. ${bbb}`)+addChecked(bf,true);
}

function feat54TT() {
	var bf = 498342527128532n;
	return addToDescRow(`<h3>Tall Tales (100% 5j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}${fcsa}`)+addChecked(bf,true);
}

function pure6LL() {
	var bf = 873863567932216n;
	return addToDescRow(`<h3>Roots of Loomlurch (100% 6j)</h3>${ll} ${bbb}`)+addChecked(bf,true);
}

function feat64TT() {
	var bf = 800122939009243n;
	return addToDescRow(`<h3>Tall Tales (100% 6j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}${fcsa}`)+addChecked(bf,true);
}

function feat64RAC() {
	var bf = 948417617686362n;
	return addToDescRow(`<h3>Resolve Amongst Chaos (100% 6j / 4j Feat Swap)</h3>${rac} This does not benefit from any quest reduction blessings or perks.${fsa}${fcsa}`)+addChecked(bf,true);
}

function pure6TT() {
	var bf = 1086144474247034n;
	return addToDescRow(`<h3>Tall Tales (100% 6j)</h3>${tt} ${bbb}`)+addChecked(bf,true);
}

function pure7TT() {
	var bf = 1108238796846077n;
	return addToDescRow(`<h3>Tall Tales (100% 7j)</h3>${tt} ${bbb}`)+addChecked(bf,true);
}

function feat74TT() {
	var bf = 380222613385436n;
	return addToDescRow(`<h3>Tall Tales (100% 7j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}${fcsa}`)+addChecked(bf,true);
}

function feat84TT() {
	var bf = 57952963557919n;
	return addToDescRow(`<h3>Tall Tales (100% 8j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}`)+addChecked(bf,true);
}

function pure8TT() {
	var bf = 985128007367679n;
	return addToDescRow(`<h3>Tall Tales (100% 8j)</h3>${tt} ${bbb}`)+addChecked(bf,true);
}

function mixed89TT() {
	var bf = 16989228054990n;
	return addToDescRow(`<h3>Tall Tales (Mixed 8j/9j)</h3>${tt} ${bbb}<br />This becomes better than pure 8j (without feat swap) at around 65% 9 jump. Recommended to use Ezmerelda if you use Shandie to avoid loss of Dash.`)+addChecked(bf,true);
	comment+=addToDescRow(`&nbsp;`);
}

function feat94TT() {
	var bf = 35181131988031n;
	return addToDescRow(`<h3>Tall Tales (100% 9j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}`)+addChecked(bf,true);
}

function pure9TT() {
	var bf = 17020252302587n;
	return addToDescRow(`<h3>Tall Tales (100% 9j)</h3>${tt} ${bbb}`)+addChecked(bf,true);
}

function pure11TT() {
	var bf = 853162999544159n;
	return addToDescRow(`<h3>Tall Tales (100% 11j)</h3>${tt} ${bbb}`)+addChecked(bf,true);
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
	for (let i=0;i<json.length;i++) {
		if (json[i].bitfields.length==0) continue;
		var opt=document.createElement("option");
		opt.value=json[i].id;
		opt.text=json[i].name;
		eventChoices.add(opt);
	}
}

function populateEventList() {
	var jumps=eventPresets.value;
	var event=eventChoices.value;
	if (event==``) return;
	
	var curr=null;
	for (let i=0;i<json.length;i++) {
		if (json[i].id==event) {
			curr=json[i];
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