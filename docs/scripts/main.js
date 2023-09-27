const ilvlInput = document.getElementById("ilvl");
const presetsInput = document.getElementById("presets");
const rarityInput = document.getElementById("rarity");
const gildingInput = document.getElementById("gilding");
const spacer = `<span class="routesDesc">&nbsp;</span>`;
const featSwapAddon = `<br />This requires <a href="https://github.com/imp444/IC_Addons/tree/main/IC_BrivGemFarm_BrivFeatSwap_Extra" target="_blank">ImpEGamer's BrivFeatSwap</a> addon.`;
const reqClickSwapAddon = `<br/>This requires mouse clicks to function.<br/>`;
const fasterClickSwapAddon = `<br/>This will be faster with mouse clicks enabled.`;
const jump = " checked";

function init() {
	ilvlInput.addEventListener("change", update);
	presetsInput.addEventListener("change", preset);
	rarityInput.addEventListener("change", update);
	gildingInput.addEventListener("change", update);
	update();
}

function preset() {
	rarityInput.value = "epic";
	gildingInput.value = "golden";
	
	var jumps = presetsInput.value;
	switch (jumps) {
		case "1j":
			ilvlInput.value = 126;
			break;
		case "2j":
			ilvlInput.value = 626;
			break;
		case "3j":
			ilvlInput.value = 1626;
			break;
		case "5j":
			ilvlInput.value = 7626;
			break;
		case "6j":
			ilvlInput.value = 15626;
			break;
		case "7j":
			ilvlInput.value = 31626;
			break;
		case "8j":
			ilvlInput.value = 63626;
			break;
		case "9j":
			ilvlInput.value = 127626;
			break;
		case "11j":
			ilvlInput.value = 511626;
			break;
		default:
			ilvlInput.value = 3626;
	}
	update();
}

function update() {
	var ilvls = ilvlInput.value;
	if (ilvls < 1) {
		document.getElementById("ilvl").value = 1;
		ilvls = 1;
	}
	var rarity = determineRarity();
	var gilding = determineGilding();
	var skips = determineJumps(ilvls,rarity,gilding);
	var p = (skips[1]*100).toFixed(2);
	var np = ((1-skips[1])*100).toFixed(2);
	var jumps = (skips[0]-1)+skips[1];
	
	var comment = ``;
	var skipBlurb=`${p}% chance to skip ${skips[0]} areas.`;
	if (np > 0) {
		skipBlurb+=`<br/>${np}% chance to skip ${skips[0]-1} areas.`;
	}
	comment+=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(skipBlurb,true,true);
	comment+=addToDescRow(`&nbsp;`);
	
	if (jumps < 3.75) {
		comment+=cursedFarmer();
	} else if (jumps < 4) {
		comment+=pre4TT();
		comment+=cursedFarmer();
	} else if (jumps == 4) {
		comment+=pure4TT();
	} else if (jumps > 4 && jumps < 5) {
		comment+=feat4TT();
	} else if (jumps == 5) {
		comment+=feat54TT();
		comment+=feat4TT();
	} else if (jumps > 5 && jumps < 6) {
		comment+=feat4TT();
	} else if (jumps == 6) {
		comment+=pure6LL();
		comment+=feat64TT();
		comment+=feat64RAC();
		comment+=pure6TT();
	//} else if (jumps > 6 && jumps < 7) {
	//	comment+=mixed67TT();
	} else if (jumps == 7) {
		comment+=pure7TT();
		comment+=feat74TT();
	//} else if (jumps > 7 && jumps < 8) {
	//	comment+=mixed78TT();
	} else if (jumps == 8) {
		comment+=feat84TT();
		comment+=feat84TT2();
		comment+=pure8TT();
	} else if (jumps >= 8 && jumps < 9) {
		comment+=mixed89TT();
	} else if (jumps == 9) {
		comment+=feat94TT();
		comment+=pure9TT();
	} else if (jumps == 11) {
		comment+=pure11TT();
	} else {
		comment+=unknownRoute();
	}
	document.getElementById('wrapper').innerHTML = comment;
}

function unknownRoute() {
	var comment = addToDescRow(`<h3>Unknown</h3>You have a skip amount and jump chance that I haven't accounted for yet. I have no idea what route you need. You would have been much better off sticking with a 100% skip chance.`);
	return comment;
}

function cursedFarmer() {
	var comment = addToDescRow(`<h3>Cursed Farmer</h3>The best place is likely to be Cursed Farmer in Grand Tour of the Sword Coast campaign. You don't want to be walking any areas.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Don't walk.
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" checked disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pre4TT() {
	var comment = addToDescRow(`<h3>Tall Tales (Mixed 3/4j)</h3>You will likely find Tall Tales in the Witchlight campaign to be fastest. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Walk 1s and 5s.
		var mod5 = i%5;
		if (mod5==1 || mod5 == 0) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pure4TT() {
	var comment = addToDescRow(`<h3>Tall Tales (100% 4j)</h3>For pure 4j Tall Tales in the Witchlight campaign is the fastest. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Walk bosses
		var mod5 = i%5;
		if (mod5 == 0) {
			checked = "";
		}
		// Unique walks.
		var mod50 = i%50;
		if (mod50 == 22 || mod50 == 23 || mod50 == 24 || mod50 == 37 || mod50 == 38 || mod50 == 39) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat4TT() {
	var comment = addToDescRow(`<h3>Tall Tales (100% 4j with Wasting Haste Feat)</h3>You'll want to equip Briv's Wasting Haste feat to return to pure 4j and run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default walk.
		var checked = "";
		// Jumps 1s.
		var mod5 = i%5;
		if (mod5==1) {
			checked = jump;
		}
		// Avoid bad bosses in-case of drifting.
		var mod50 = i%50;
		if ( (mod50 > 15 && mod50 < 20) || (mod50 > 20 && mod50 < 25) || (mod50 > 25 && mod50 < 30) ) {
			checked = jump;
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat54TT() {
	var comment = addToDescRow(`<h3>Tall Tales (100% 5j / 4j Feat Swap)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.${featSwapAddon}`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique walks
		var mod5 = i%5;
		if (mod5 == 1 || mod5 == 4) {
			checked = "";
		}
		// Unique Jumps
		var mod50 = i%50;
		if ( mod50 == 31 || mod50 == 41 || mod50 == 44 || mod50 == 36 || mod50 == 46 || mod50 == 9 || mod50 == 19 || mod50 == 39 || mod50 == 49) {
			checked = jump;
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pure6LL() {
	var comment = addToDescRow(`<h3>Roots of Loomlurch (100% 6j)</h3>You'll want to run The Roots of Loomlurch in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default walk.
		var checked = "";
		// Jumps 4s and 5s.
		var mod5 = i%5;
		if (mod5 == 4 || mod5 == 0) {
			checked = jump;
		}
		// Unique Jumps
		var mod50 = i%50;
		if (mod50 == 12 || mod50 == 42 || mod50 == 13 || mod50 == 6 || mod50 == 26 || mod50 == 27) {
			checked = jump;
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat64TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 6j / 4j Feat Swap)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.${featSwapAddon}${fasterClickSwapAddon}`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique Walks
		var mod50 = i%50;
		if (mod50 == 11 || mod50 == 21 || mod50 == 22 || mod50 == 32 || mod50 == 13 || mod50 == 23 || mod50 == 44 || mod50 == 16 || mod50 == 27 || mod50 == 28 || mod50 == 49) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat64RAC() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Resolve Amongst Chaos (100% 6j / 4j Feat Swap)</h3>You'll want to run Resolve Amongst Chaos in the Descent into Avernus campaign. This does not benefit from any quest reduction blessings or perks.${featSwapAddon}${fasterClickSwapAddon}`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique Walks
		var mod50 = i%50;
		if (mod50 == 1 || mod50 == 3 || mod50 == 13 || mod50 == 23 || mod50 == 33 || mod50 == 6 || mod50 == 8 || mod50 == 38 || mod50 == 48 || mod50 == 39) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pure6TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 6j)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique walks.
		var mod50 = i%50;
		if (mod50 == 1 || mod50 == 31 || mod50 == 23 || mod50 == 46 || mod50 == 28) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pure7TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 7j)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique walks.
		var mod50 = i%50;
		if (mod50 == 21 || mod50 == 2 || mod50 == 12 || mod50 == 22 || mod50 == 42 || mod50 == 27) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat74TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 7j / 4j Feat Swap)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.${featSwapAddon}${fasterClickSwapAddon}`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique Walks
		var mod50 = i%50;
		if (mod50 == 21 || mod50 == 12 || mod50 == 22 || mod50 == 32 || mod50 == 42 || mod50 == 34 || mod50 == 16 || mod50 == 26 || mod50 == 27 || mod50 == 37 || mod50 == 8 || mod50 == 9 || mod50 == 0) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat84TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 8j / 4j Feat Swap)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.${featSwapAddon}${fasterClickSwapAddon}`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique Walks
		var mod50 = i%50;
		if (mod50 == 11 || mod50 == 21 || mod50 == 32 || mod50 == 4 || mod50 == 26) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat84TT2() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 8j / 4j Feat Swap)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.<br />This requires <a href="https://github.com/imp444/IC_Addons/tree/main/IC_BrivGemFarm_LevelUp_Extra" target="_blank">ImpEGamer's LevelUp</a> addon because it walks z1-4 before levelling any champions.${featSwapAddon}`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique Walks
		var mod50 = i%50;
		if (mod50 == 1 || mod50 == 11 || mod50 == 21 || mod50 == 2 || mod50 == 32 || mod50 == 3 || mod50 == 4 || mod50 == 26) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pure8TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 8j)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Unique walks.
		var mod50 = i%50;
		if (mod50 == 21 || mod50 == 26 || mod50 == 36) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function mixed89TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (Mixed 8j/9j)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.<br />This becomes better than pure 8j (without feat swap) at around 65% 9 jump. Recommended to use Ezmerelda if you use Shandie to avoid loss of Dash.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Walk 1s and 5s.
		var mod5 = i%5;
		if (mod5 == 1 || mod5 == 0) {
			checked = "";
		}
		// Unique walks.
		var mod50 = i%50;
		if (mod50 == 47 || mod50 == 48 || mod50 == 49) {
			checked = "";
		}
		// Unique jumps.
		if (mod50 == 41) {
			checked = jump;
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function feat94TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 9j / 4j Feat Swap)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.${featSwapAddon}`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default walk.
		var checked = "";
		// Jump z1s/z2s/z3s/z4s/z10s.
		var mod10 = i%10;
		if (mod10 == 1 || mod10 == 2 || mod10 == 3 || mod10 == 4 || mod10 == 0) {
			checked = jump;
		}
		// Unique Walks
		var mod50 = i%50;
		if (mod50 == 31) {
			checked = "";
		}
		// Unique Jumps
		if (mod50 == 15 || mod50 == 36) {
			checked = jump;
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pure9TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 9j)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default jump.
		var checked = jump;
		// Walk bosses
		var mod5 = i%5;
		if (mod5 == 0) {
			checked = "";
		}
		// Unique walks.
		var mod50 = i%50;
		if (mod50 == 22 || mod50 == 23 || mod50 == 24 || mod50 == 36 || mod50 == 37 || mod50 == 38 || mod50 == 39) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
}

function pure11TT() {
	var comment=addToDescRow(`&nbsp;`);
	comment+=addToDescRow(`<h3>Tall Tales (100% 11j)</h3>You'll want to run Tall Tales in the Witchlight campaign. Don't forget to enable Vajra patron to benefit from the Brisk Benefactor local blessing.`);
	comment+=addToDescRow(`&nbsp;`);
	
	comment+=`<span class="routesRow">`;
	for (let i=1; i<=50; i++) {
		// Default walk.
		var checked = jump;
		// Avoid bad bosses in-case of drifting.
		var mod50 = i%50;
		if (mod50 == 11 || mod50 == 21 || mod50 == 22 || mod50 == 23 || mod50 == 5 || mod50 == 45 || mod50 == 6 || mod50 == 36 || mod50 == 46 || mod50 == 7 || mod50 == 47 || mod50 == 8 || mod50 == 38 || mod50 == 48 || mod50 == 9 || mod50 == 10) {
			checked = "";
		}
		comment+=`<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment+=`</span>`;
	
	return comment;
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
	let effect = 0.25 * (1+(0.004*gilding*ilvls*rarity + 0.996*gilding*rarity));
	
	let skips = 1
	let skipChance = effect
	if (effect > 1) {
		while (skipChance > 1) {
			skipChance /= 2
			skips += 1
		}
		skipChance = mapFromToRange(skipChance, 0.5, 1.0, 0.01, 1)
	}
	return [skips,skipChance];
}

function mapFromToRange(v, oldMin, oldMax, newMin, newMax) {
	return (v - oldMin) * ((newMax - newMin) / (oldMax - oldMin)) + newMin;
}