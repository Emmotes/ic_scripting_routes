const ilvlInput=document.getElementById("ilvl");
const presetsInput=document.getElementById("presets");
const rarityInput=document.getElementById("rarity");
const gildingInput=document.getElementById("gilding");
const shinyNote=document.getElementById("shinyNote");
const fsa=`<br />This requires <a href="https://github.com/imp444/IC_Addons/tree/main/IC_BrivGemFarm_BrivFeatSwap_Extra" target="_blank">ImpEGamer's BrivFeatSwap</a> addon.`;
const fcsa=`<br/>This will be faster with mouse clicks enabled.`;
const jump=" checked";
const tt="Tall Tales is in the Witchlight campaign.";
const ll="The Roots of Loomlurch is in the Witchlight campaign.";
const cf="Cursed Farmer is in The Grand Tour of the Sword Coast campaign.";
const rac="Resolve Amongst Chaos is in the Descent into Avernus campaign."
const bbb="Don't forget to enable Vajra patron to benefit from the Brisk Benefactor Tier 3 Corellon local blessing."

function init() {
	ilvlInput.addEventListener("input", update);
	presetsInput.addEventListener("change", preset);
	rarityInput.addEventListener("change", update);
	gildingInput.addEventListener("change", update);
	update();
}

function preset() {
	rarityInput.value="epic";
	gildingInput.value="golden";
	
	var jumps=presetsInput.value;
	switch (jumps) {
		case "1j":
			ilvlInput.value=126;
			break;
		case "2j":
			ilvlInput.value=626;
			break;
		case "3j":
			ilvlInput.value=1626;
			break;
		case "5j":
			ilvlInput.value=7626;
			break;
		case "6j":
			ilvlInput.value=15626;
			break;
		case "7j":
			ilvlInput.value=31626;
			break;
		case "8j":
			ilvlInput.value=63626;
			break;
		case "9j":
			ilvlInput.value=127626;
			break;
		case "11j":
			ilvlInput.value=511626;
			break;
		default:
			ilvlInput.value=3626;
	}
	update();
}

function update() {
	if (rarityInput.value!="epic") {
		if (gildingInput.value=="golden") {
			gildingInput.value="shiny";
		}
		if (gildingInput.options.length==3) {
			gildingInput.options.remove(2);
		}
	} else {
		if (gildingInput.options.length==2) {
			var opt=document.createElement("option");
			opt.text="Golden";
			opt.value="golden";
			gildingInput.options.add(opt);
		}
	}
	if (gildingInput.value=="shiny"&&shinyNote.style.display=='none') {
		shinyNote.style.display='';
	} else if (gildingInput.value!="shiny"&&shinyNote.style.display=='') {
		shinyNote.style.display='none';
	}
	var ilvls=ilvlInput.value;
	if (ilvls<1) {
		document.getElementById("ilvl").value=1;
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
		comment+=spacer;
		comment+=pure9TTs();
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
	return addToDescRow(`<h3>Cursed Farmer</h3>${cf} You won't want to be walking any areas as that will only slow you down.`)+addChecked(bf);
}

function pure2LL() {
	var bf = 1053332137310143n;
	return addToDescRow(`<h3>Roots of Loomlurch (100% 2j)</h3>${ll} ${bbb}`)+addChecked(bf);
}

function pure3LL() {
	var bf = 1090715500149758n;
	return addToDescRow(`<h3>Roots of Loomlurch (100% 3j)</h3>${ll} ${bbb}`)+addChecked(bf);
}

function pre4TT() {
	var bf = 508470925670862n;
	return addToDescRow(`<h3>Tall Tales (Mixed 3/4j)</h3>${tt} ${bbb}`)+addChecked(bf);
}

function pure4TT() {
	var bf = 544309226487279n;
	return addToDescRow(`<h3>Tall Tales (100% 4j)</h3>${tt} ${bbb}`)+addChecked(bf);
}

function feat4TT() {
	var bf = 544309226487279n;
	return addToDescRow(`<h3>Tall Tales (100% 4j with Wasting Haste Feat)</h3>${tt} You'll need to equip Briv's Wasting Haste feat to return to pure 4j. ${bbb}`)+addChecked(bf);
}

function feat54TT() {
	var bf = 500953867244502n;
	return addToDescRow(`<h3>Tall Tales (100% 5j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}${fcsa}`)+addChecked(bf);
}

function pure6LL() {
	var bf = 873863567932216n;
	return addToDescRow(`<h3>Roots of Loomlurch (100% 6j)</h3>${ll} ${bbb}`)+addChecked(bf);
}

function feat64TT() {
	var bf = 800167230925023n;
	return addToDescRow(`<h3>Tall Tales (100% 6j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}${fcsa}`)+addChecked(bf);
}

function feat64RAC() {
	var bf = 948417617686362n;
	return addToDescRow(`<h3>Resolve Amongst Chaos (100% 6j / 4j Feat Swap)</h3>${rac} This does not benefit from any quest reduction blessings or perks.${fsa}${fcsa}`)+addChecked(bf);
}

function pure6TT() {
	var bf = 1090714322599934n;
	return addToDescRow(`<h3>Tall Tales (100% 6j)</h3>${tt} ${bbb}`)+addChecked(bf);
}

function pure7TT() {
	var bf = 1123700813330429n;
	return addToDescRow(`<h3>Tall Tales (100% 7j)</h3>${tt} ${bbb}`)+addChecked(bf);
}

function feat74TT() {
	var bf = 380222613450972n;
	return addToDescRow(`<h3>Tall Tales (100% 7j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}${fcsa}`)+addChecked(bf);
}

function feat84TT() {
	var bf = 57952963557919n;
	return addToDescRow(`<h3>Tall Tales (100% 8j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}${fcsa}`)+addChecked(bf);
}

function pure8TT() {
	var bf = 1125865512501247n;
	return addToDescRow(`<h3>Tall Tales (100% 8j)</h3>${tt} ${bbb}`)+addChecked(bf);
}

function mixed89TT() {
	var bf = 16989228054990n;
	return addToDescRow(`<h3>Tall Tales (Mixed 8j/9j)</h3>${tt} ${bbb}<br />This becomes better than pure 8j (without feat swap) at around 65% 9 jump. Recommended to use Ezmerelda if you use Shandie to avoid loss of Dash.`)+addChecked(bf);
	comment+=addToDescRow(`&nbsp;`);
}

function feat94TT() {
	var bf = 580108934512143n;
	return addToDescRow(`<h3>Tall Tales (100% 9j / 4j Feat Swap)</h3>${tt} ${bbb}${fsa}`)+addChecked(bf);
}

function pure9TT() {
	var bf = 17024683589103n;
	return addToDescRow(`<h3>Tall Tales (100% 9j)</h3>${tt} ${bbb}`)+addChecked(bf);
}

function pure9TTs() {
	var bf = 544274866748911n;
	return addToDescRow(`<h3>Tall Tales (100% 9j)</h3>${tt} ${bbb}<br />Safer for Shandie's Dash.`)+addChecked(bf);
}

function pure11TT() {
	var bf = 861845310142479n;
	return addToDescRow(`<h3>Tall Tales (100% 11j)</h3>${tt} ${bbb}`)+addChecked(bf);
}

function addToDescRow(content) {
	var ret=`<span class="routesRow"><span class="routesDesc">replace</span></span>`;
	ret=ret.replace(`replace`,content);
	return ret;
}

function determineRarity() {
	switch(rarityInput.value) {
		case "common":
			return 0.1;
		case "uncommon":
			return 0.3;
		case "rare":
			return 0.5;
		default:
			return 1;
	}
}

function determineGilding() {
	switch(gildingInput.value) {
		case "shiny":
			return 1.5;
		case "golden":
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

function addChecked(bf) {
	var comment=addToDescRow(`&nbsp;`)+`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		var checked=isChecked(bf,i) ? " checked" : "";
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