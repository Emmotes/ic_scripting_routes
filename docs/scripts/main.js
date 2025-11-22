const vm = 2.001; // prettier-ignore
const st = `stacksTab`;
const ft = `formsTab`;
const ilvlInput = document.getElementById(`ilvl`);
const presetsInput = document.getElementById(`presets`);
const rarityInput = document.getElementById(`rarity`);
const gildingInput = document.getElementById(`gilding`);
const shinyNote = document.getElementById(`shinyNote`);
const jump = ` checked`;
const stackRoute = document.getElementById(`stackRoute`);
const stackReset = document.getElementById(`stackReset`);
const stackFavour = document.getElementById(`stackFavour`);
const stackStack = document.getElementById(`stackStack`);
const stackBrivZone = document.getElementById(`stackBrivZone`);
const stackz1Form = document.getElementById(`stackz1Form`);
const stackRNGWR = document.getElementById(`stackRNGWR`);
const stackWithMetal = document.getElementById(`stackWithMetal`);
const stackRuns = document.getElementById(`stackRuns`);
const stackThunderStep = document.getElementById(`stackThunderStep`);
const stackResult = document.getElementById(`stackResult`);
const stackFavourNote = document.getElementById(`stackFavourNote`);
const stackResetNote = document.getElementById(`stackResetNote`);
const formCampaign = document.getElementById(`formCampaign`);
const formType = document.getElementById(`formType`);
const formWiddle = document.getElementById(`formWiddle`);
const formFeatSwapLabel = document.getElementById(`formFeatSwapLabel`);
const formFeatSwap = document.getElementById(`formFeatSwap`);
const formBaldricLabel = document.getElementById(`formBaldricLabel`);
const formBaldric = document.getElementById(`formBaldric`);
const formHybridLabel = document.getElementById(`formHybridLabel`);
const formHybrid = document.getElementById(`formHybrid`);
const formTatyana = document.getElementById(`formTatyana`);
const formResult = document.getElementById(`formResult`);
const metalLevel = 170;
const stackMult = [1 / 0.968, 1 / 0.96];
const stackResetLimits = [15, 2500];
const stackFavourLimits = [0, 308];
const stackStackMin = 1;
const stackBrivZoneMin = 1;
const stackRunsMin = 1;
const minHaste = 48;
const thunderStep = 1.2;
const resetLimitText = [
	`<span style="color:#DDCCEE">(Current reset cap is ${stackResetLimits[1]})</span>`,
	`&nbsp;`,
];
const favourLimitText = [
	`<span style="color:#DDCCEE">(Current favour cap is e${stackFavourLimits[1]})</span>`,
	`(Use 0 to disable Thellora)`,
];
const thelloraQT = `<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6897 2.71002C21.6097 2.53002 21.4697 2.37999 21.2797 2.29999C21.1897 2.25999 21.0897 2.23999 20.9897 2.23999H11.9897C11.5797 2.23999 11.2397 2.57999 11.2397 2.98999C11.2397 3.39999 11.5797 3.73999 11.9897 3.73999H19.1797L2.45969 20.46C2.16969 20.75 2.16969 21.23 2.45969 21.52C2.60969 21.67 2.79966 21.74 2.98966 21.74C3.17966 21.74 3.36969 21.67 3.51969 21.52L20.2397 4.79999V12C20.2397 12.41 20.5797 12.75 20.9897 12.75C21.3997 12.75 21.7397 12.41 21.7397 12V3C21.7497 2.9 21.7297 2.81002 21.6897 2.71002Z"/><path opacity="0.4" d="M17.3991 18.1501C17.2091 18.1501 17.019 18.08 16.8691 17.93L6.06906 7.13004C5.77906 6.84004 5.77906 6.36004 6.06906 6.07004C6.35906 5.78004 6.83906 5.78004 7.12906 6.07004L17.929 16.87C18.219 17.16 18.219 17.64 17.929 17.93C17.779 18.08 17.5891 18.1501 17.3991 18.1501Z"/></svg>`;
const thelloraNorm = thelloraQT.replace(`QT`, `Norm`);
const arrowQT = `<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="1.1"><g id="_x33_6_1_"><path d="M91.6 88.8 126.4 54l-4.5-4.5-28.2 28.2V54.6C93.7 28.7 72.8 7.8 47 7.8 21.2 7.8.3 28.8.3 54.6v65.6h6.2V54.6C6.4 32.2 24.6 14 46.9 14c22.4 0 40.5 18.2 40.5 40.6v22.9L59 49.2l-4.5 4.5 31.6 31.6 4.5 4.5 1-1z" id="icon_6_"/></g></svg>`;
const arrowNorm = arrowQT.replace(`QT`, `Norm`);
const hopQT = `<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="16 13 110 43" version="1.1"><path d="m126 15.2 -5 -1.3 -9.4 35.2 -35.2 -9.5 -1.3 5.1L115.2 55.4h0.1z"/><path d="M65.2 18.3c21.8 0 40.1 15.3 44.7 35.7h5.2C110.4 30.7 89.8 13.2 65.2 13.2c-23.7 0-43.7 16.3-49.3 38.3h5.3c5.5-19.2 23.1-33.2 44-33.2"/></svg>`;
const hopNorm = hopQT.replace(`QT`, `Norm`);
const walkQT = `<svg class="routeArrow routeArrowQT" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" version="2"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"/></svg>`;
const walkNorm = walkQT.replace(`QT`, `Norm`);
const arrowReset = `<svg class="routeArrow routeArrowReset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="2"><g><path d="m126 15.2-5-1.3-9.4 35.2-35.2-9.5-1.3 5.1 40.1 10.7h.1z"></path><path d="M54.6 80.2 18.8 68.4l-5-1.6-13 40.1 5 1.7 11.3-35.1L53 85.2z"></path><path d="M65.2 18.3c21.8 0 40.1 15.3 44.7 35.7h5.2c-4.7-23.3-25.3-40.8-49.9-40.8-23.7 0-43.7 16.3-49.3 38.3h5.3c5.5-19.2 23.1-33.2 44-33.2zm0 91.9c-22.7 0-41.6-16.6-45.2-38.3h-5.2c3.7 24.6 24.8 43.4 50.4 43.4 22.8 0 42.1-15 48.6-35.7h-5.4c-6.2 17.8-23.2 30.6-43.2 30.6z"></path></g></svg>`;
const NUMFORM = new Intl.NumberFormat("en", {
	useGrouping: true,
	maximumFractionDigits: 2,
});
let tester = false;
let calculateStacksRunning = false;
let updateInterval;

async function init() {
	populateStackRoutes();
	populateFormCampaigns();
	//dealWithTesters();
	window.addEventListener("hashchange", () => {
		swapTab();
	});
	swapTab();
	ilvlInput.addEventListener(`input`, update);
	presetsInput.addEventListener(`change`, preset);
	rarityInput.addEventListener(`change`, update);
	gildingInput.addEventListener(`change`, update);
	stackRoute.addEventListener(`change`, calculateStacks);
	stackReset.addEventListener(`change`, calculateStacks);
	stackFavour.addEventListener(`change`, calculateStacks);
	stackStack.addEventListener(`change`, calculateStacks);
	stackBrivZone.addEventListener(`change`, calculateStacks);
	stackz1Form.addEventListener(`change`, calculateStacks);
	stackRNGWR.addEventListener(`change`, calculateStacks);
	stackWithMetal.addEventListener(`change`, calculateStacks);
	stackRuns.addEventListener(`change`, calculateStacks);
	stackThunderStep.addEventListener(`change`, calculateStacks);
	formCampaign.addEventListener(`input`, formsUpdateCampaign);
	formType.addEventListener(`input`, formsUpdateType);
	formWiddle.addEventListener(`input`, formsUpdateWiddle);
	formTatyana.addEventListener(`change`, formsUpdateCheckboxes);
	formBaldric.addEventListener(`change`, formsUpdateCheckboxes);
	formFeatSwap.addEventListener(`change`, formsUpdateCheckboxes);
	formHybrid.addEventListener(`change`, formsUpdateCheckboxes);
	update();
	await calculateStacks();
	startUpdateCheckInterval(1800000); // 30 mins
}

function dealWithTesters() {
	const routesTester = localStorage.getItem("routesTester");
	if (routesTester !== null && routesTester !== "")
		tester = routesTester == "1" ? true : false;
	if (tester) return;
	let bannedPresets = [`7.99997j`, `14j`, `15.99999988j`];
	let bannedRoutes = [
		`short87TT`,
		`pure14TT`,
		`feat144TT`,
		`feat149TT`,
		`short1615TT`,
	];
	for (let i = presetsInput.length - 1; i >= 0; i--)
		if (bannedPresets.includes(presetsInput.options[i].value))
			presetsInput.remove(i);
	for (let i = stackRoute.length - 1; i >= 0; i--)
		if (bannedRoutes.includes(stackRoute.options[i].value))
			stackRoute.remove(i);
}

function preset() {
	rarityInput.value = `epic`;
	gildingInput.value = `golden`;

	let jumps = Math.round(presetsInput.value.replace(/[^0-9\.]+/g, ""));
	ilvlInput.value = 500 * Math.pow(2, jumps - 1) - 374;
	if (`${jumps}j` != `${presetsInput.value}`) {
		switch (presetsInput.value) {
			case `0.5j`:
				ilvlInput.value = 1;
				break;
			case `1.5j`:
				ilvlInput.value = 374;
				break;
			case `2.5j`:
				ilvlInput.value = 1121;
				break;
			case `3.5j`:
				ilvlInput.value = 2616;
				break;
			default:
				ilvlInput.value -= 1;
		}
	}
	update();
}

function update() {
	if (rarityInput.value != `epic`) {
		if (gildingInput.value == `golden`) gildingInput.value = `shiny`;
		if (gildingInput.options.length == 3) gildingInput.options.remove(2);
	} else {
		if (gildingInput.options.length == 2) {
			let opt = document.createElement(`option`);
			opt.text = `Golden`;
			opt.value = `golden`;
			gildingInput.options.add(opt);
		}
	}
	if (gildingInput.value == `shiny` && shinyNote.style.display == "none")
		shinyNote.style.display = "";
	else if (gildingInput.value != `shiny` && shinyNote.style.display == "")
		shinyNote.style.display = "none";
	let ilvls = ilvlInput.value - 1;
	if (ilvls < 1) {
		document.getElementById(`ilvl`).value = 1;
		ilvls = 1;
	}
	let rarity = determineRarity();
	let gilding = determineGilding();
	let skips = determineJumps(ilvls, rarity, gilding);
	let p = skips[1] * 100;
	let np = (1 - skips[1]) * 100;
	let jumps = Number(skips[0] - 1 + skips[1]);

	let skipsL = determineJumps(ilvls - 1, rarity, gilding);
	let pL = skipsL[1] * 100;
	let pDiff = p - pL;

	let fix = vSigFig(p, pDiff);
	p = p.toFixed(fix);
	np = np.toFixed(fix);

	let comment = ``;
	let spacer = addToDescRow(`&nbsp;`);
	let skipBlurb = `${p}% chance to skip ${skips[0]} areas.`;
	if (np > 0) skipBlurb += `<br>${np}% chance to skip ${skips[0] - 1} areas.`;
	comment += spacer;
	comment += addToDescRow(skipBlurb, true, true);
	if (
		skips[1] != 1 &&
		jumps > 4 &&
		(jumps < 7.99 || jumps > 8) &&
		(jumps < 11.99 || jumps > 12) &&
		(jumps < 15.99 || jumps > 16)
	)
		comment += `<span class="routesRow"><span class="routesCol5" style="padding-left:10px;">Note: Please be aware that it is highly recommended to stay at 100% jumps as that allows for far more consistent runs.</span></span>`;
	comment += spacer;
	comment += `<span class="routesRow"><span class="routesDesc">When there are multiple routes - they are generally ordered best to worst. However - with that said - that won't always be true since some routes may depend heavily on hardware and whether or not you use specified addons etc.. Because of this - it's recommended that you test to see which one is best for your setup out of the options available.</span></span>`;
	comment += spacer;

	// Pure Jumps.
	if (jumps == 1) {
		comment += parseRoute(gemFarmJson.pure1LL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
	} else if (jumps == 2) {
		comment += parseRoute(gemFarmJson.pure2LL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
	} else if (jumps == 3) {
		comment += parseRoute(gemFarmJson.pure3LL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.pure3VL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
	} else if (jumps == 4) {
		comment += parseRoute(gemFarmJson.pure4TT);
	} else if (jumps == 5) {
		comment += parseRoute(gemFarmJson.feat54TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.feat4TT);
	} else if (jumps == 6) {
		comment += parseRoute(gemFarmJson.feat64TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.pure6TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.pure6LL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.feat64RAC);
	} else if (jumps == 7) {
		comment += parseRoute(gemFarmJson.feat74TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.pure7TT);
	} else if (jumps == 8) {
		comment += parseRoute(gemFarmJson.feat84TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.pure8TT);
	} else if (jumps == 9) {
		comment += parseRoute(gemFarmJson.pure9TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.feat94TT);
	} else if (jumps == 11) {
		comment += parseRoute(gemFarmJson.pure11TT);
	} else if (jumps == 14) {
		comment += parseRoute(gemFarmJson.feat149TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.pure14TT);

		// Mixed Jumps.
	} else if (jumps < 1) {
		comment += parseRoute(gemFarmJson.mixed01LL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
	} else if (jumps < 2) {
		comment += parseRoute(gemFarmJson.mixed12LL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
	} else if (jumps < 3) {
		comment += parseRoute(gemFarmJson.mixed23LL);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
	} else if (jumps < 4) {
		comment += parseRoute(gemFarmJson.pre4TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
	} else if (jumps > 8 && jumps < 9) {
		comment += parseRoute(gemFarmJson.mixed89TT);
		comment += spacer;
		comment += parseRoute(gemFarmJson.cf);
		comment += spacer;
		comment += parseRoute(gemFarmJson.feat4TT);
	} else if (jumps > 7.99 && jumps < 8) {
		comment += parseRoute(gemFarmJson.short87TT);
	} else if (jumps > 11.99 && jumps < 12) {
		comment += parseRoute(gemFarmJson.short1211TT);
	} else if (jumps > 15.99 && jumps < 16) {
		comment += parseRoute(gemFarmJson.short1615TT);
	} else {
		if (jumps > 4) {
			let c = `<h3>No Specialised Routes</h3><p>There aren't any specific routes for this particular jump value. You're going to have to try the options below and use whichever is fastest for you.</p>`;
			c += `<ul>`;
			if (Math.round(jumps) != jumps) {
				let rd = Math.floor(jumps);
				if ((rd >= 5 && rd <= 8) || rd == 11 || rd == 14)
					c += equipFeatDesc(aaf, rd);
			}
			if (jumps > 9) c += equipFeatDesc(ssf, 9);
			c += equipFeatDesc(whf, 4);
			c += `<li>Use the Cursed Farmer route below.</li></ul>`;
			comment += addToDescRow(c);
		}
		comment += parseRoute(gemFarmJson.cf);
	}
	document.getElementById("wrapper").innerHTML = comment;
}

function addToDescRow(content) {
	return `<span class="routesRow"><span class="routesDesc">${content}</span></span>`;
}

function equipFeatDesc(feat, jump) {
	return `<li>Equip the ${feat} feat to limit Briv to 100% ${jump}j and use an applicable route from the ${jump}j preset.</li>`;
}

function determineRarity() {
	switch (rarityInput.value) {
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
	switch (gildingInput.value) {
		case `shiny`:
			return 1.5;
		case `golden`:
			return 2;
		default:
			return 1;
	}
}

function determineJumps(ilvls, rarity, gilding) {
	let effect = 0.25 * (1 + rarity * gilding * (1 + ilvls / 250));
	let skips = 1;
	let skipChance = effect;
	if (effect > 1) {
		while (skipChance > 1) {
			skipChance /= 2;
			skips += 1;
		}
		skipChance = mapFromToRange(skipChance, 0.5, 1.0, 0.01, 1);
	}
	return [skips, skipChance];
}

function mapFromToRange(v, oldMin, oldMax, newMin, newMax) {
	return (v - oldMin) * ((newMax - newMin) / (oldMax - oldMin)) + newMin;
}

function addChecked(bf, br) {
	if (bf == undefined) return addToDescRow(`&nbsp;`);
	let comment = ``;
	if (br) comment += addToDescRow(`&nbsp;`);
	comment += `<span class="routesRow">`;
	for (let i = 1; i <= 50; i++) {
		let checked = isChecked(bf, i) ? ` checked` : ``;
		comment += `<span class="routesBoxes"><input type="checkbox" class="checkbox" id="z${i}" name="z${i}" ${checked} disabled><label class="cblabel" for="z${i}">${i}</label></span>`;
	}
	comment += `</span>`;
	return comment;
}

function addLoop(bf, q, e) {
	let s = q;
	let w = e;
	let z = 1;
	let route = [z];
	while (z <= 200) {
		z += isChecked(bf, z % 50 || 50) ? s : w;
		route.push(z);
	}
	let lastOfLoop = route[route.length - 1] % 50;
	let loopStartIndex = 0;
	for (let i = route.length - 2; i >= 0; i--) {
		if (route[i] % 50 == lastOfLoop) {
			loopStartIndex = i;
			break;
		}
	}
	let loop = [];
	for (let i = loopStartIndex; i < route.length - 1; i++)
		loop.push(route[i] % 50 || 50);
	if (loop[0] == 50) {
		loop.splice(0, 1);
		loop.push(50);
	}
	let spacer = ` - `;
	let comment = `<br>Preferred Loop: `;
	for (let i = 0; i < loop.length; i++) {
		if (i > 0) comment += spacer;
		comment += loop[i];
	}
	comment += `${spacer} repeat`;
	return comment;
}

function isChecked(bf, i) {
	return (bf & BigInt(Math.pow(2, i - 1))) != 0;
}

function vSigFig(n, nDif) {
	let p = 2;
	if (n == 100) return p;
	while (parseFloat(nDif.toFixed(p)) == 0) p++;
	return p + 1;
}

function swapTab() {
	let hash = window.location.hash.substring(1).split("_");
	if (hash[0] != "" && document.getElementById(hash[0]) != undefined)
		document.getElementById(hash[0]).click();
	if (hash.length > 1) {
		switch (hash[0]) {
			case `${st}`:
				stackRoute.value = hash[1];
				stackReset.value = hash[2];
				stackFavour.value = hash[3];
				stackStack.value = hash[4];
				stackBrivZone.value = hash[5];
				stackz1Form.value = hash[6];
				stackRNGWR.checked = hash[7] == 1;
				stackWithMetal.checked = hash[8] == 1;
				stackRuns.value = hash[9];
				stackThunderStep.checked = hash[10] == 1;
				break;
			case `${ft}`:
				if ((hash[1] || ``) != ``) {
					formCampaign.value = hash[1];
					populateFormTypes();
					if ((hash[2] || ``) != ``) {
						formType.value = hash[2];
						populateFormWiddles();
						if ((hash[3] || ``) != ``) {
							formWiddle.value = hash[3];
							formTatyana.checked = hash[4] == 1;
							formBaldric.checked = hash[5] == 1;
							formFeatSwap.checked = hash[6] == 1;
							formHybrid.checked = hash[7] == 1;
						}
					}
				}
				decideFormsShowStatus();
				formsUpdateShow();
				break;
		}
	}
}

function setHash(hash) {
	if (hash == st) {
		let rngwr = stackRNGWR.checked ? 1 : 0;
		let swm = stackWithMetal.checked ? 1 : 0;
		let bts = stackThunderStep.checked ? 1 : 0;
		hash = `${st}_${stackRoute.value}_${stackReset.value}_${stackFavour.value}_${stackStack.value}_${stackBrivZone.value}_${stackz1Form.value}_${rngwr}_${swm}_${stackRuns.value}_${bts}`;
	} else if (hash == ft) {
		let tatyana = formTatyana.checked ? 1 : 0;
		let baldric = formBaldric.checked ? 1 : 0;
		let featSwap = formFeatSwap.checked ? 1 : 0;
		let hybrid = formHybrid.checked ? 1 : 0;
		hash = `${ft}`;
		if (formCampaign.value != ``) {
			hash += `_${formCampaign.value}`;
			if (formType.value != ``) {
				hash += `_${formType.value}`;
				if (formWiddle.value != ``)
					hash += `_${formWiddle.value}_${tatyana}_${baldric}_${featSwap}_${hybrid}`;
			}
		}
	}
	hash = `#` + hash;
	if (history.replaceState) history.replaceState(null, null, hash);
	else window.location.hash = hash;
}

function populateStackRoutes() {
	let keyset = Object.keys(gemFarmJson);
	keyset.sort((a, b) => {
		let obja = gemFarmJson[a];
		let objb = gemFarmJson[b];
		if (typeof obja.jump != "number" || typeof objb.jump != "number")
			return 0;
		if (obja.jump != objb.jump) return obja.jump - objb.jump;
		if (typeof obja.order != "number" || typeof objb.order != "number")
			return 0;
		return objb.order - obja.order;
	});
	for (let key of keyset) {
		if (typeof gemFarmJson[key].jump != "number") continue;
		let opt = document.createElement("option");
		opt.value = key;
		opt.text = parseName(gemFarmJson[key], true);
		stackRoute.add(opt);
	}
	stackRoute.value = `pure4TT`;
}

async function calculateStacks() {
	if (calculateStacksRunning) return;
	calculateStacksRunning = true;

	let inputs = getRouteInputs();
	if (!inputs) {
		let contents = addToDescRow(`Need more data.`);
		contents += addToDescRow(`&nbsp;`);
		stackResult.innerHTML = contents;
		return;
	}

	enforceTolerances();
	if (window.location.hash.substring(1).split("_")[0] === st) setHash(st);

	let adv = await pullAdvJson(inputs.routeJson.adv);
	let brivData = setupBriv(inputs);
	let routeData = generateRoute(inputs, brivData, adv);
	let stackData = calculateStacksForRoute(brivData, inputs);
	renderResults(inputs, brivData, routeData, stackData, adv);

	calculateStacksRunning = false;
}

function getRouteInputs() {
	if (
		!stackRoute.value ||
		!stackFavour.value ||
		!stackReset.value ||
		!stackBrivZone.value
	)
		return null;

	return {
		favour: Number(stackFavour.value),
		resetZone: Number(stackReset.value),
		brivZone: Number(stackBrivZone.value),
		numRuns: Number(stackRuns.value),
		routeJson: gemFarmJson[stackRoute.value],
		z1Formation: stackz1Form.value,
		rngWaitingRoom: stackRNGWR.checked,
		thunderStep: stackThunderStep.checked,
		withMetal: stackWithMetal.checked,
	};
}

function setupBriv(inputs) {
	let thelloraDist =
		Math.min(inputs.favour, Math.floor(inputs.resetZone / 5)) + 1;
	let brivStack = thelloraDist;
	let jumpsWithMetal = 0;
	let jumpsWithoutMetal = 0;

	if (inputs.brivZone === 1 && inputs.favour > 0) {
		switch (inputs.z1Formation) {
			case "q":
				brivStack += inputs.routeJson.q - 1;
				inputs.withMetal ? jumpsWithMetal++ : jumpsWithoutMetal++;
				break;
			case "e":
				brivStack += inputs.routeJson.e - 1;
				if (inputs.routeJson.e > 1)
					inputs.withMetal ? jumpsWithMetal++ : jumpsWithoutMetal++;
				if (inputs.routeJson.e === 1) inputs.brivZone = 2;
				break;
			case "4":
			case "9":
				brivStack += Number(inputs.z1Formation);
				inputs.withMetal ? jumpsWithMetal++ : jumpsWithoutMetal++;
				break;
		}
	}

	return {
		thelloraDist,
		brivStack,
		jumpsWithMetal,
		jumpsWithoutMetal,
	};
}

function generateRoute(inputs, brivData, adv) {
	let currentZone = brivData.brivStack;
	let route = [1];
	let qtCount = 0;
	if (currentZone > 1) {
		route.push(currentZone);
		if (isQT(inputs.routeJson, 1, currentZone % 50 || 50)) qtCount++;
	}
	let hitZones = [];
	let armouredZones = [];
	let dynaMinscActive = true;
	let mimoActive = true;
	let rngJumpApplied = false;

	while (currentZone < inputs.resetZone && route.length < 2500) {
		let modZone = currentZone % 50 || 50;
		let monTags = getZoneMonTags(adv, modZone);
		let applyRngwr =
			currentZone === brivData.brivStack &&
			inputs.rngWaitingRoom &&
			inputs.favour > 0;

		if (currentZone > 1 && currentZone % 5 !== 0 && !applyRngwr) {
			if (dynaMinscActive && !isDynaMinscOnly(monTags))
				dynaMinscActive = false;
			if (mimoActive && !isMImoHeir(monTags)) mimoActive = false;
		}

		if (monTags.includes("hits_based")) hitZones.push(currentZone);
		if (monTags.includes("armor_based")) armouredZones.push(currentZone);

		let checked =
			currentZone >= inputs.brivZone &&
			isChecked(inputs.routeJson.bf, modZone);
		let metalApplicable =
			inputs.withMetal || currentZone > stackStack.value;
		let diff;
		if (applyRngwr) {
			rngJumpApplied = true;
			diff =
				inputs.brivZone === 1
					? brivData.brivStack - brivData.thelloraDist + 1
					: inputs.z1Formation === "q"
					? inputs.routeJson.q
					: inputs.z1Formation === "e"
					? inputs.routeJson.e
					: inputs.z1Formation === "4" || inputs.z1Formation === "9"
					? Number(inputs.z1Formation) + 1
					: 1;
		} else
			diff =
				currentZone < inputs.brivZone
					? 1
					: checked
					? inputs.routeJson.q
					: inputs.routeJson.e;
		let prevZone = currentZone;
		currentZone += diff;

		if (isQT(inputs.routeJson, prevZone % 50 || 50, currentZone % 50 || 50))
			qtCount++;

		route.push(currentZone);

		if (
			(checked ||
				inputs.routeJson.e > 1 ||
				(applyRngwr &&
					(inputs.z1Formation !== "e" || inputs.routeJson.e > 1))) &&
			currentZone >= inputs.brivZone
		)
			metalApplicable
				? brivData.jumpsWithMetal++
				: brivData.jumpsWithoutMetal++;
	}

	let numJumps = brivData.jumpsWithMetal + brivData.jumpsWithoutMetal;

	return {
		route,
		hitZones,
		armouredZones,
		dynaMinscActive,
		mimoActive,
		rngJumpApplied,
		numJumps,
		qtCount,
	};
}

function calculateStacksForRoute(brivData, inputs) {
	let stacks = minHaste;
	for (let run = 0; run < inputs.numRuns; run++) {
		for (let i = 0; i < brivData.jumpsWithMetal; i++)
			stacks = Math.ceil((stacks - 0.5) * stackMult[0]);
		for (let i = 0; i < brivData.jumpsWithoutMetal; i++)
			stacks = Math.ceil((stacks - 0.5) * stackMult[1]);
	}

	let thunderStepStacks = stacks;
	if (inputs.thunderStep)
		stacks = minHaste + Math.ceil((stacks - minHaste) / thunderStep);

	return {stacks, thunderStepStacks};
}

function renderResults(inputs, brivData, routeData, stackData, adv) {
	let contents = ``;
	let resultHtml = `<h2>Stacks Required: ${nf(stackData.stacks)}</h2>`;

	// Loop info
	let loopHtml = addLoop(
		inputs.routeJson.bf,
		inputs.routeJson.q,
		inputs.routeJson.e
	).substring(4);
	resultHtml += `<ul><li>${loopHtml}</li>`;

	// Briv warnings
	let brivWarningHtml = ``;
	let currentZone = brivData.brivStack;
	let isBadTravelling = currentZone % 5 === 0;
	let routeLength = routeData.route.length - 1;
	if (isBadTravelling) {
		brivWarningHtml += `<li class="bigRedWarning">This is a Bad Travelling. You do not want Thellora to be landing on a boss zone under any circumstances. `;
		if (inputs.brivZone === 1)
			brivWarningHtml += `You can fix this by levelling Briv on z2 instead of z${inputs.brivZone}.`;
		else if (inputs.brivZone === 2 && inputs.z1Formation !== "q")
			brivWarningHtml += `You can fix this by using Q formation on z1 instead of ${inputs.z1Formation.toUpperCase()}.`;
		else
			brivWarningHtml += `You can fix this by levelling Briv on z1 instead of z${inputs.brivZone}.`;
		brivWarningHtml += `</li>`;
	}

	// Thunder Step
	if (inputs.thunderStep) {
		resultHtml += `<li>The ${nf(
			stackData.stacks
		)} stacks required will become ${nf(
			stackData.thunderStepStacks
		)} when resetting the adventure due to Briv's Thunder Step feat. It is this larger amount that Briv will consume for your runs.</li>`;
		if (inputs.numRuns === 1)
			resultHtml += `<ul><li class="tinyRedWarning">If you are running hybrid with the HybridTurboStacks addon - use ${nf(
				stackData.thunderStepStacks
			)} as your Target Stacks. The Stacks Prediction will account for Thunder Step.<br>If you have disabled Stacks Prediction - you may use ${nf(
				stackData.stacks
			)}.</li></ul>`;
	}

	// Thellora landing
	if (inputs.favour > 0) {
		// Rush capped check
		if (inputs.resetZone < inputs.favour * 5)
			resultHtml += `<li class="littleRedWarning">This route will not cap Thellora's Rush stacks. It is recommended that you never reset below her Rush cap. For your current settings that will be z225.</li>`;

		// General Thellora info
		resultHtml += `<li>Thellora will land you on z${currentZone}.</li><ul>${brivWarningHtml}`;
		if (inputs.brivZone == 1)
			resultHtml += `<li>This is because you've set Briv to combine his jump with Thellora's by levelling him on z1.</li>`;
		resultHtml += `<li>If this is not on the preferred loop then you might need to either tweak your favour or delay levelling Briv until you're on a loop zone.</li></ul>`;
		if (routeData.rngJumpApplied)
			resultHtml += `<li>The RNG Waiting Room addon will cause your Thellora landing zone to be completed by the modron formation - and consequently jump with a distance of whatever feat he may or may not have saved in that formation.</li>`;
	}

	// Dynaheir+Co
	if (routeData.dynaMinscActive)
		resultHtml += `<li>${dyn.replace("<br>", "")}</li>`;
	else if (routeData.mimoActive)
		resultHtml += `<li>${mimo.replace("<br>", "")}</li>`;

	// Landing on Reset
	if (inputs.resetZone == routeData.route[routeData.route.length - 1])
		resultHtml += `<li class="littleRedWarning">This route lands on your reset zone. It is highly recommended that you avoid doing this. Completing your reset zone immediately starts the modron reset which means any bosses you could have jumped afterwards will be ignored. So you're essentially wasting time completing a zone for no benefit.</li>`;

	let perRun = inputs.numRuns > 1 ? ` (per run)` : ``;
	let numWalks =
		routeData.route.length -
		1 -
		routeData.numJumps -
		(inputs.brivZone === 1 ? 0 : 1);
	resultHtml += `<li>Briv will jump ${nf(routeData.numJumps)} time${
		routeData.numJumps == 1 ? "" : "s"
	}${perRun}.</li>`;
	if (numWalks > 0)
		resultHtml += `<li>Briv will walk ${nf(numWalks)} time${
			numWalks == 1 ? "" : "s"
		}${perRun}.</li>`;

	let numArmoured = routeData.armouredZones.length;
	let numHits = routeData.hitZones.length;
	if (inputs.numRuns > 1 || numArmoured > 0 || numHits > 0) {
		resultHtml += `<ul>`;

		// Doubes/Triples/etc..
		if (inputs.numRuns > 1) {
			let type =
				inputs.numRuns == 2
					? `Doubles`
					: inputs.numRuns == 3
					? `Triples`
					: inputs.numRuns == 4
					? `Quadrupes`
					: `${nf(inputs.numRuns)} Times`;
			resultHtml += `<li>Running ${type}.</li>`;
		}
		// Bad zones
		if (numArmoured > 0)
			resultHtml += `<li class="bigRedWarning">This route will hit ${nf(
				numArmoured
			)} Armoured zone${
				numArmoured == 1 ? "" : "s"
			}. These can be run killers so you need to change some values to avoid them.</li>`;
		if (numHits > 0)
			resultHtml += `<li class="littleRedWarning">This route will hit ${nf(
				numHits
			)} Hit-Based zone${
				numHits == 1 ? "" : "s"
			}. These are slow and should be avoided.</li>`;

		resultHtml += `</ul>`;
	}
	resultHtml += `<li>This route has ${nf(routeData.qtCount)} QTs out of ${nf(
		routeLength
	)} transitions.</li>`;

	resultHtml += `</ul>`;

	// Stack route table
	resultHtml += renderRouteTable(inputs, routeData, adv, stackData);

	contents += addToDescRow(resultHtml);
	contents += addToDescRow(`&nbsp;`);
	stackResult.innerHTML = contents;

	// Debug consistency check
	let walkCount = document.querySelectorAll("span[data-type='walk']").length;
	let jumpCount = document.querySelectorAll("span[data-type='jump']").length;
	let qtsCount = document.querySelectorAll("span[data-qt='1']").length;
	let calcJumps = brivData.jumpsWithMetal + brivData.jumpsWithoutMetal;
	let calcWalks =
		routeData.route.length -
		1 -
		calcJumps -
		(inputs.brivZone === 1 ? 0 : 1);
	let calcQts = routeData.qtCount;
	if (walkCount !== calcWalks)
		console.log(`walkCount[${walkCount}] != calcWalks[${calcWalks}]`);
	if (jumpCount !== calcJumps)
		console.log(`jumpCount[${jumpCount}] != calcJumps[${calcJumps}]`);
	if (qtsCount !== calcQts)
		console.log(`qtsCount[${qtsCount}] != calcQts[${calcQts}]`);
}

function renderRouteTable(inputs, routeData, adv) {
	let tableHtml = `<h3>Route</h3><p>Every zone in the route below has a tooltip on mouseover with more details - including quests enemies and attack types.</p><div class="stacksRoutesTable">`;

	let earliestStackFound = false;
	let rushCapFound = false;

	routeData.route.forEach((zone, index) => {
		let nextZone = routeData.route[index + 1] || zone;
		let isLastZone = index === routeData.route.length - 1;
		let qt =
			!isLastZone &&
			isQT(inputs.routeJson, zone % 50 || 50, nextZone % 50 || 50);
		let diff = nextZone - zone;

		let walk = !isLastZone && diff === 1;
		let shortJump =
			!isLastZone &&
			(diff < inputs.routeJson.q ||
				(index === 0 && diff + 1 < inputs.favour + inputs.routeJson.q));

		// Determine zone type for styling
		let zoneType = "";
		let icon = "";
		if (isLastZone) icon = arrowReset;
		else if (index === 0 && inputs.favour > 0) {
			icon = qt ? thelloraQT : thelloraNorm;
			if (inputs.brivZone === 1) {
				icon += shortJump
					? qt
						? hopQT
						: hopNorm
					: qt
					? arrowQT
					: arrowNorm;
				zoneType = "jump";
			}
		} else {
			icon = walk
				? qt
					? walkQT
					: walkNorm
				: shortJump
				? qt
					? hopQT
					: hopNorm
				: qt
				? arrowQT
				: arrowNorm;
			zoneType = walk ? "walk" : "jump";
		}

		// Styling classes
		let styleClass = "";
		let rushCapOverline = "";

		if (zone >= inputs.favour * 5) {
			styleClass += " trcZone";
			if (!rushCapFound)
				rushCapOverline = `<span class="firstTrcZone">&nbsp;</span>`;
			rushCapFound = true;
		}
		if (routeData.hitZones.includes(zone)) styleClass += " hitZone";
		else if (routeData.armouredZones.includes(zone))
			styleClass += " armZone";
		else if (zone % 5 === 0) styleClass += " bosZone";
		if (!earliestStackFound && zone > stackStack.value) {
			styleClass += " stkZone";
			earliestStackFound = true;
		}

		let tooltipText = createTooltipText(adv, zone);
		tableHtml += `<span class="stacksRoutesTableItem${styleClass}" data-type="${zoneType}" data-qt="${
			qt ? 1 : 0
		}">${zone} ${icon}${tooltipText}${rushCapOverline}</span>`;
	});

	tableHtml += `</div>`;

	// Key legend
	let keyEntries = [
		{text: `${thelloraNorm} Thellora`},
		{text: `${arrowNorm} Jump`},
		{text: `${hopNorm} Hop`},
		{text: `${walkNorm} Walk`},
		{text: `${thelloraQT} Thellora QT`},
		{text: `${arrowQT} Jump QT`},
		{text: `${hopQT} Hop QT`},
		{text: `${walkQT} Walk QT`},
		{text: "Earliest Stack Zone", cls: " stkZone"},
		{
			text: `<span style="width:fit-content;position:relative">First Rush Capped Zone<span class="firstTrcZone" style="top:1px">&nbsp;</span></span>`,
			cls: " trcZone",
		},
		{text: "Rush Capped Zone", cls: " trcZone"},
		{text: arrowReset + " Modron Reset"},
		{text: "Normal Boss Zone", cls: " bosZone"},
		{text: "Hit-Based Boss Zone", cls: " hitZone"},
		{text: "Armoured Boss Zone", cls: " armZone"},
		{
			text: "A 'QT' is a Quick Transition (the black swipe across the screen between areas).",
			style: "color:var(--Soap);grid-column:1 / span 4",
		},
		{
			text: "A 'Hop' is the short jump performed by the E formation in a Feat Swap route.",
			style: "color:var(--Soap);grid-column:1 / span 4",
		},
	];

	tableHtml += `<br><h4>Key</h4><div class="stacksRoutesKeyTable">`;
	keyEntries.forEach((entry) => {
		let styleAttr = entry.style ? ` style="${entry.style}"` : "";
		let cls = entry.cls ? ` ${entry.cls}` : "";
		tableHtml += `<span class="stacksRoutesKeyTableItem${cls}"${styleAttr}>${entry.text}</span>`;
	});
	tableHtml += `</div>`;

	return tableHtml;
}

function enforceTolerances() {
	if (stackReset.value < stackResetLimits[0])
		stackReset.value = stackResetLimits[0];

	if (stackFavour.value < stackFavourLimits[0])
		stackFavour.value = stackFavourLimits[0];

	if (stackStack.value < stackStackMin) stackFavour.value = stackStackMin;

	if (stackBrivZone.value < stackBrivZoneMin)
		stackBrivZone.value = stackBrivZoneMin;

	if (stackRuns.value < stackRunsMin) stackRuns.value = stackRunsMin;

	if (
		stackReset.value > stackResetLimits[1] &&
		stackResetNote.innerHTML != resetLimitText[0]
	)
		stackResetNote.innerHTML = resetLimitText[0];
	else if (
		stackReset.value <= stackResetLimits[1] &&
		stackResetNote.innerHTML != resetLimitText[1]
	)
		stackResetNote.innerHTML = resetLimitText[1];

	if (
		stackFavour.value > stackFavourLimits[1] &&
		stackFavourNote.innerHTML != favourLimitText[0]
	)
		stackFavourNote.innerHTML = favourLimitText[0];
	else if (
		stackFavour.value <= stackFavourLimits[1] &&
		stackFavourNote.innerHTML != favourLimitText[1]
	)
		stackFavourNote.innerHTML = favourLimitText[1];
}

function isQT(route, area1, area2) {
	if (route.qts == undefined || route.qts.length != 50) return false;
	let qts = route.qts;
	return qts[area1 - 1] == qts[area2 - 1];
}

function createTooltipText(adv, zone) {
	let boss = zone % 5 == 0 ? `Boss ` : ``;
	let mod = zone % 50 || 50;
	let t = `<span class="ttc"><span class="ttcRow">${boss}Zone: ${zone} (${mod})</span>`;
	let mons = [];
	let area = adv.areas[mod - 1];
	let quest = adv.quests[mod - 1];
	let questText = quest.type == 1 ? `Collect` : `Kill`;
	questText += ` ${quest.goal} ${quest.desc}`;
	t += `<span class="ttcRow">${questText}</span>`;
	if (area.waves != undefined)
		for (let wave of area.waves) for (let mon of wave) mons.push(mon);
	if (area.monsters != undefined)
		for (let mon of area.monsters) mons.push(mon);
	if (area.staticMonsters != undefined)
		for (let mon of area.staticMonsters) mons.push(mon);
	let monNames = [];
	let monAtks = [];
	let monTags = [];
	for (let monId of mons) {
		let mon = "";
		for (let monster of adv.monsters) {
			if (monster.id == monId) {
				mon = monster;
				break;
			}
		}
		if (mon == "") continue;
		if (!monNames.includes(mon.name)) monNames.push(mon.name);
		for (let tag of mon.tags) {
			let isAtk = tag == `ranged` || tag == `melee` || tag == `magic`;
			if (isAtk && !monAtks.includes(tag)) monAtks.push(tag);
			else if (!isAtk && !monTags.includes(tag)) monTags.push(tag);
		}
	}
	if (monNames.length > 0) {
		t += `<span class="ttcRow ttcTop">Enemies:</span>`;
		for (let monName of monNames)
			t += `<span class="ttcRow ttcLeft">${monName}</span>`;
	}
	if (monAtks.length > 0) {
		t += `<span class="ttcRow ttcTop">Attack Types:</span>`;
		for (let atk of monAtks)
			t += `<span class="ttcRow ttcLeft">${capitalize(atk)}</span>`;
	}
	if (monTags.length > 0) {
		t += `<span class="ttcRow ttcTop">Other Tags:</span>`;
		for (let tag of monTags)
			t += `<span class="ttcRow ttcLeft">${capitalize(tag)}</span>`;
	}
	t += `</span>`;
	return t;
}

function getZoneMonTags(adv, zone) {
	let area = adv.areas[zone - 1];
	let mons = [];
	if (area.waves != undefined)
		for (let wave of area.waves) for (let mon of wave) mons.push(mon);
	if (area.monsters != undefined)
		for (let mon of area.monsters) mons.push(mon);
	if (area.staticMonsters != undefined)
		for (let mon of area.staticMonsters) mons.push(mon);
	let monTags = [];
	for (let monId of mons) {
		let mon = "";
		for (let monster of adv.monsters) {
			if (monster.id == monId) {
				mon = monster;
				break;
			}
		}
		if (mon == "") continue;
		for (let tag of mon.tags) {
			let isAtk = tag == `ranged` || tag == `melee` || tag == `magic`;
			if (!isAtk && !monTags.includes(tag)) monTags.push(tag);
		}
	}
	return monTags;
}

function isDynaMinscOnly(monTags) {
	for (let monTag of monTags)
		if (
			monTag != "fey" &&
			monTag != "humanoid" &&
			enemyTypes.includes(monTag)
		)
			return false;
	return true;
}

function isMImoHeir(monTags) {
	for (let monTag of monTags)
		if (
			monTag != "fey" &&
			monTag != "humanoid" &&
			monTag != "beast" &&
			enemyTypes.includes(monTag)
		)
			return false;
	return true;
}

async function pullAdvJson(id) {
	var response = await fetch(`advData/${id}.json`)
		.then((response) => response.text())
		.catch((err) => console.log(err));
	return await JSON.parse(response);
}

function capitalize(s) {
	if (s == `armor_based`) return `Armoured`;
	if (s == `hits_based`) return `Hits-Based`;
	return s && s[0].toUpperCase() + s.slice(1);
}

function nf(number) {
	return NUMFORM.format(number);
}

async function startUpdateCheckInterval(delay) {
	await sleep(delay);
	updateInterval = setAsyncInterval(async () => {
		await checkUpdatedScriptsAvailable();
	}, delay);
}

async function checkUpdatedScriptsAvailable() {
	let newDocum = new DOMParser().parseFromString(
		await (
			await fetch(window.location.href, {
				headers: {"Cache-Control": "no-cache"},
			})
		).text(),
		"text/html"
	);
	let oldList = [
		...document.querySelectorAll("script[type='text/javascript']"),
	].map((ele) => ele.src);
	let newList = [
		...newDocum.querySelectorAll("script[type='text/javascript']"),
	].map((ele) => ele.src);
	if (
		oldList.length === newList.length &&
		oldList.every((value, index) => value === newList[index])
	)
		return;
	enableVersionUpdate();
}

function enableVersionUpdate() {
	document.getElementById("updateContainer").style = "position:fixed";
	clearAsyncInterval(updateInterval);
}

async function sleep(ms) {
	await new Promise((r) => setTimeout(r, ms));
}

function getFirstLine(text) {
	var index = text.indexOf("\n");
	if (index === -1) index = undefined;
	return text.substring(0, index);
}
