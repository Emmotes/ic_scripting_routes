const vf = 3.000; // prettier-ignore
const f_GREY = `color:#444`;
const f_NOCURSOR = `;cursor:default;pointer-events:none`;
/* ================ *
 * ===== Data ===== *
 * ================ */

const championData={"7":{"name":"Minsc","specs":{"108":"Favored Enemy: Humanoids","109":"Favored Enemy: Beasts","110":"Favored Enemy: Undead","111":"Favored Enemy: Fey","112":"Favored Enemy: Monstrosities"}},"33":{"name":"Farideh","specs":{"17839":"Daughters of Mehen","17840":"Fury of Asmodeus","17841":"Pact with Lorcan"}},"58":{"name":"Briv","specs":{"3455":"Metalborn","3456":"Tempered Steel","3457":"Go With The Phlo"}},"75":{"name":"Hew Maan","specs":{"10653":"Did We Say Humans? We Meant...","10654":"Law Maan","10655":"Hello, Fellow Mercenaries!"}},"83":{"name":"Ellywick","specs":{"15231":"For The Fans","15232":"Faster Tempo","15233":"All That Sparkles"}},"91":{"name":"Widdle","specs":{"6909":"Strong and Steady","6910":"Mind and Body","6911":"Wisdom and Confidence"}},"97":{"name":"Tatyana","specs":{"7387":"Your Friends are My Friends","7388":"By My Side","7389":"Best Friend Forever"}},"99":{"name":"Dungeon Master","specs":{"7848":"Special Guest Star","7849":"Where Did He Go This Time?","7850":"Fear Not, Champions!","16144":"Special Guest Stars"}},"117":{"name":"Imoen","specs":{"9643":"Beast Slaying Arrows","9644":"Dragon Slaying Arrows","9645":"Monstrosity Slaying Arrows","9646":"Aberration Slaying Arrows"}},"125":{"name":"BBEG","specs":{"11544":"Powergaming","11545":"Min-Maxing","11546":"Rules Lawyering"}},"139":{"name":"Thellora","specs":{"12982":"Defender of the Meek","12983":"Vanguard of the Quick","12984":"Callessa's Blessed"}},"145":{"name":"Dynaheir","specs":{"13879":"Circle Magic","13880":"Iron Lord's Justice","13881":"Loyal Bodyguard"}},"148":{"name":"Diana","specs":{"14791":"Inspire: Acrobatic Assault","14792":"Inspire: Modest Might","14793":"Inspire: Fledgling Fury","14796":"Ensemble Cast","14797":"Spotlight Episode"}},"165":{"name":"Baldric","specs":{"17491":"Bargain With Tyr","17492":"Bargain With Moradin","17493":"Bargain With Tymora","17494":"Bargain With Mystra","17495":"Bargain With Eldath","17496":"Dark Bargain"}},"-1":{"name":"Others","specs":{"-1":"Shouldn't be leveled enough to get one."}}}; // prettier-ignore
const formsData={"GT":{"name":"Grand Tour of the Sword Coast","cols":5,"slots":[{"x":240,"y":60},{"x":180,"y":30},{"x":180,"y":90},{"x":120,"y":0},{"x":120,"y":60},{"x":120,"y":120},{"x":60,"y":30},{"x":60,"y":90},{"x":0,"y":60}],"forms":{"BBEG":{"2":{"NB":{"Q":[139,75,148,91,83,125,0,0,58],"M":[58,75,148,91,83,125,0,99,139],"specs":{"58":[3455],"75":[10653],"148":[14793,14796],"91":[6910],"83":[15233],"125":[11544],"99":[7850],"139":[]}}},"3":{"NB":{"Q":[139,75,91,148,125,0,58,83,0],"M":[58,75,91,148,125,0,139,83,99],"specs":{"58":[3455],"75":[10653],"91":[6910],"148":[14793,14796],"125":[11544],"139":[],"83":[15233],"99":[7850]}}},"4":{"NB":{"Q":[139,75,148,125,91,83,0,0,58],"M":[58,75,148,125,91,83,0,99,139],"specs":{"58":[3455],"75":[10653],"148":[14793,14796],"125":[11544],"91":[6910],"83":[15233],"99":[7850],"139":[]}}}}},"ignoreFeatSwap":1,"ignoreHybrid":1},"WL":{"name":"Wild Beyond the Witchlight","cols":4,"slots":[{"x":180,"y":30},{"x":180,"y":90},{"x":120,"y":0},{"x":120,"y":60},{"x":120,"y":120},{"x":60,"y":30},{"x":60,"y":90},{"x":0,"y":0},{"x":0,"y":60},{"x":0,"y":120}],"forms":{"dynaMinsc":{"2":{"NB":{"Q":[75,139,148,145,91,7,0,0,58,83],"M":[58,139,148,145,91,7,0,99,75,83],"specs":{"58":[3455],"139":[],"148":[14793,14796],"145":[],"91":[],"7":[111],"99":[7850],"75":[10655],"83":[15233]}},"B":{"Q":[75,165,139,148,91,7,0,145,58,83],"M":[58,165,139,148,91,7,99,145,75,83],"specs":{"58":[3455],"165":[17493,17496],"139":[],"148":[14793,14796],"91":[],"7":[111],"99":[7850],"145":[],"75":[10655],"83":[15233]}}},"3":{"NB":{"Q":[75,139,148,145,91,0,7,0,58,83],"M":[58,139,148,145,91,0,7,99,75,83],"specs":{"58":[3455],"139":[],"148":[14793,14796],"145":[],"91":[],"7":[111],"99":[7850],"75":[10655],"83":[15233]}},"B":{"Q":[75,165,91,148,139,7,0,145,58,83],"M":[58,165,91,148,139,7,99,145,75,83],"specs":{"58":[3455],"165":[17493,17496],"91":[],"148":[14793,14796],"139":[],"7":[111],"99":[7850],"145":[],"75":[10655],"83":[15233]}}},"4":{"NB":{"Q":[75,139,148,91,145,0,0,7,58,83],"M":[58,139,148,91,145,99,0,7,75,83],"specs":{"58":[3455],"139":[],"148":[14793,14796],"91":[],"145":[],"99":[7850],"7":[111],"75":[10655],"83":[15233]}},"B":{"Q":[75,165,139,148,145,0,91,58,7,83],"M":[58,165,139,148,145,99,91,75,7,83],"specs":{"58":[3455],"165":[17493,17496],"139":[],"148":[14793,14796],"145":[],"99":[7850],"91":[],"75":[10655],"7":[111],"83":[15233]}}}},"MImoHeir":{"2":{"NB":{"Q":[75,139,91,148,145,0,7,117,83,58],"M":[58,139,91,148,145,99,7,117,83,75],"specs":{"58":[3455],"139":[],"91":[],"148":[14793,14796],"145":[],"99":[7850],"7":[111],"117":[9643],"83":[15233],"75":[10655]}},"B":{"Q":[75,165,139,148,117,7,145,91,83,58],"M":[58,165,139,148,117,7,99,91,83,75],"specs":{"58":[3455],"165":[17493,17496],"139":[],"148":[14793,14796],"117":[9643],"7":[111],"99":[7850],"91":[],"83":[15233],"75":[10655]}}},"3":{"NB":{"Q":[75,139,148,7,91,0,145,117,83,58],"M":[58,139,148,7,91,99,145,117,83,75],"specs":{"58":[3455],"139":[],"148":[14793,14796],"7":[111],"91":[],"99":[7850],"145":[],"117":[9643],"83":[15233],"75":[10655]}},"B":{"Q":[75,165,139,148,91,7,145,117,83,58],"M":[58,165,139,148,91,7,99,117,83,75],"specs":{"58":[3455],"165":[17493,17496],"139":[],"148":[14793,14796],"91":[],"7":[111],"99":[7850],"117":[9643],"83":[15233],"75":[10655]}}},"4":{"NB":{"Q":[75,139,7,145,148,91,0,117,83,58],"M":[58,139,7,145,148,91,99,117,83,75],"specs":{"58":[3455],"139":[],"7":[111],"145":[],"148":[14793,14796],"91":[],"99":[7850],"117":[9643],"83":[15233],"75":[10655]}},"B":{"Q":[75,165,139,148,58,7,145,117,91,83],"M":[58,165,139,148,75,7,99,117,91,83],"specs":{"58":[3455],"165":[17493,17496],"139":[],"148":[14793,14796],"75":[10655],"7":[111],"99":[7850],"117":[9643],"91":[],"83":[15233]}}}},"BBEG":{"2":{"NB":{"Q":[75,139,148,125,91,0,0,0,58,83],"M":[58,139,148,125,91,99,0,0,75,83],"specs":{"58":[3455],"139":[],"148":[14793,14796],"125":[11544],"91":[],"99":[7850],"75":[10653],"83":[15233]}}},"3":{"NB":{"Q":[75,139,91,148,0,125,0,0,58,83],"M":[58,139,91,148,99,125,0,0,75,83],"specs":{"58":[3455],"139":[],"91":[],"148":[14793,14796],"99":[7850],"125":[11544],"75":[10653],"83":[15233]}}},"4":{"NB":{"Q":[75,139,148,91,125,0,0,0,58,83],"M":[58,139,148,91,125,0,0,99,75,83],"specs":{"58":[3455],"139":[],"148":[14793,14796],"91":[],"125":[11544],"99":[7850],"75":[10653],"83":[15233]}}}}}}}; // prettier-ignore

/* ================================= *
 * ===== Select Box Population ===== *
 * ================================= */

function populateFormCampaigns() {
	disableElements(true, true, true, true);
	let inner = `<option value="" selected>-</option>`;
	for (const formId of Object.keys(formsData)) {
		const form = formsData[formId];
		inner += `<option value="${formId}">${form.name}</option>`;
	}
	formCampaign.innerHTML = inner;
}

function populateFormTypes() {
	const campaign = formCampaign.value;
	let inner = `<option value="" selected>-</option>`;
	if (campaign !== "") {
		const form = formsData[campaign];
		const types = Object.keys(form.forms);
		types.sort(typeSort);
		for (const typeId of types) {
			const type = form.forms[typeId];
			let name;
			if (typeId === "BBEG") name = "BBEG";
			else if (typeId === "dynaMinsc") name = "Dynaheir and Minsc";
			else if (typeId === "MImoHeir") name = "Dynaheir Minsc and Imoen";
			else {
				console.log(
					`Error: Unknown formation type: ${JSON.stringify(type)}.`,
				);
				formType.innerHTML = inner;
				return;
			}
			inner += `<option value="${typeId}">${name}</option>`;
		}
	}
	formType.innerHTML = inner;
}

function populateFormWiddles() {
	const campaign = formCampaign.value;
	const type = formType.value;
	let inner = `<option value="" selected>-</option>`;
	if (campaign !== "" && type !== "")
		for (const numWiddleAdj of Object.keys(formsData[campaign].forms[type]))
			inner += `<option value="${numWiddleAdj}">${numWiddleAdj}</option>`;
	formWiddle.innerHTML = inner;
}

/* ============================== *
 * ===== Input Update Calls ===== *
 * ============================== */

function formsUpdateCampaign() {
	populateFormTypes();
	populateFormWiddles();
	decideFormsShowStatus();
}

function formsUpdateType() {
	checkDynaheirInvestmentNoteDisplay();
	populateFormWiddles();
	decideFormsShowStatus();
}

function formsUpdateWiddle() {
	decideFormsShowStatus();
}

function formsUpdateCheckboxes() {
	decideFormsShowStatus();
}

function formsUpdateStacking() {
	decideFormsShowStatus();
}

function formsUpdateShow() {
	const campaign = formCampaign.value;
	const type = formType.value;
	const widdle = formWiddle.value;
	const tatyana = formTatyana.checked;
	let baldric = formBaldric.checked;
	let featSwap = formFeatSwap.checked;
	let stacking = formStacking.value;

	if (campaign === "" || type === "" || widdle === "") return;

	const f = formsData[campaign];

	checkDynaheirInvestmentNoteDisplay();

	if (featSwap && f.ignoreFeatSwap === 1) featSwap = false;
	if (stacking !== "Offline" && f.ignoreHybrid === 1) stacking = "Offline";

	let baseForm = f.forms[type][widdle];
	if (!Object.keys(baseForm).includes("B")) baldric = false;
	baseForm = baseForm[baldric ? "B" : "NB"];

	const q = baseForm.Q;
	const w =
		stacking === "Farideh" ?
			[0, 58, 139, 0, 0, 0, 0, 33, 0, 97]
		:	[58, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	const e = [...q];
	if (!featSwap) {
		let index = e.indexOf(58);
		if (index !== -1) e[index] = 0;
	}
	let mType = "M";
	const m = [...baseForm[mType]];
	if (tatyana) {
		let hewIndex = m.indexOf(75);
		if (hewIndex >= 0) m[hewIndex] = 97;
		if (baldric) swapBaldricsPlace(m, 165, [117, 145, 139]);
	}

	let txt = ``;
	const currForms = {
		"Q (Fav: 1)": q,
		"W (Fav: 2)": w,
		"E (Fav: 3)": e,
		"M (Modron)": m,
	};

	txt += `<h1>${f.name}</h1>`;
	txt += `<span style="display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:1fr">`;
	for (const name of Object.keys(currForms)) {
		const currForm = currForms[name];
		txt += `<span style="display:flex;flex-direction:column;align-items:center;padding:20px">`;
		txt += `<h2>${name}</h2>`;
		txt += createSVG(f.slots, currForm);
		if (name === "M (Modron)") {
			txt += `</span>`;
			txt += `<span style="grid-column:span 2;display:flex;justify-content:center;padding:20px">`;
			txt += addSpecInfo(baldric, stacking, tatyana, baseForm.specs);
		}
		txt += `</span>`;
	}
	txt += `</span>`;
	formResult.innerHTML = txt;
}

/* ==================================== *
 * ===== Disable/Show UI Elements ===== *
 * ==================================== */

function decideFormsShowStatus() {
	if (window.location.hash.substring(1).split("_")[0] === ft) setHash(ft);

	const campaign = formCampaign.value;
	const type = formType.value;
	const widdle = formWiddle.value;

	checkDynaheirInvestmentNoteDisplay();

	if (campaign === "" || type === "" || widdle === "")
		disableElements(true, true, true, true);
	else {
		const disableBaldric =
			formsData[campaign].forms[type][widdle] == null ||
			!Object.keys(formsData[campaign].forms[type][widdle]).includes("B");
		if (campaign === "GT")
			disableElements(false, disableBaldric, true, true);
		else disableElements(false, disableBaldric, false, false);
	}
	formsUpdateShow();
}

function disableElements(tatyana, baldric, featSwap, stacking) {
	// formTatyana
	disableElement(formTatyana, formTatyanaLabel, tatyana);
	// formBaldric
	disableElement(formBaldric, formBaldricLabel, baldric);
	// formFeatSwap
	disableElement(formFeatSwap, formFeatSwapLabel, featSwap);
	// formStacking
	disableElement(formStacking, formStackingLabel, stacking);
}

function disableElement(ele, eleLabel, disable) {
	ele.disabled = disable;
	ele.style = disable ? f_GREY + f_NOCURSOR : ``;
	eleLabel.style = disable ? f_GREY : ``;
}

function checkDynaheirInvestmentNoteDisplay() {
	const type = formType.value;
	const isDynaheir = type === "dynaMinsc" || type === "MImoHeir";
	dynaheirInvestmentNote.style.display = isDynaheir ? `` : `none`;
}

/* ========================== *
 * ===== Misc Functions ===== *
 * ========================== */

function swapBaldricsPlace(m, baldricId, swapIds, baldricIndex) {
	if (swapIds.length === 0) return;
	if (baldricIndex == null) baldricIndex = m.indexOf(baldricId);
	if (baldricIndex < 0) return;
	const swapIndex = m.indexOf(swapIds[0]);
	if (swapIndex >= 0) {
		m[baldricIndex] = swapIds[0];
		m[swapIndex] = baldricId;
		return;
	}
	swapBaldricsPlace(m, baldricId, swapIds.slice(1), baldricIndex);
}

function createSVG(slots, ids) {
	const circleDiameter = 50;

	let maxX = 0;
	let maxY = 0;
	for (const slot of slots) {
		if (slot.x > maxX) maxX = slot.x;
		if (slot.y > maxY) maxY = slot.y;
	}
	const formWidth = maxX + circleDiameter;
	const formHeight = maxY + circleDiameter;

	let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${formWidth}" height="${formHeight}">`;
	for (let i = 0; i < slots.length; i++) {
		const champ = championData[ids[i]];
		if (champ == null && ids[i] > 0)
			console.log(`Unknown champion id: ${ids[i]}`);
		svg += `<image x="${slots[i].x}" y="${slots[i].y}" width="${circleDiameter}" height="${circleDiameter}" href="https://emmotes.github.io/ic_servercalls/images/circularised/${ids[i]}.png"`;
		if (champ != null) svg += `><title>${champ.name}</title></image>`;
		else svg += ` />`;
	}
	svg += `</svg>`;
	return svg;
}

function addSpecInfo(baldric, stacking, tatyana, specsData) {
	txt = ``;
	txt += `<span style="display:flex;flex-direction:column;align-items:flex-start">`;
	const x25 =
		`<li>The x25 level up hotkey set to <code>Ctrl</code>.<br>` +
		`You can use the Game Settings Fix addon to do this automatically.</li>`;
	if (stacking === "Farideh") {
		txt += `<span style="display:flex;flex-direction:column">`;
		txt += `<h3>Using Farideh</h3>Requires:`;
		txt +=
			`<ul style="margin-left:-10px">` +
			`<li>Farideh to be set to 100/125 in the Level Up addon.</li>` +
			x25 +
			`<li>If you are using Briv Gem Farm you will also<br>` +
			`need a code edit from my thread on Discord.</li>` +
			`</ul>`;
		txt += `</span>`;
	}
	if (tatyana) {
		txt += `<span style="display:flex;flex-direction:column">`;
		txt += `<h3>Tatyana in M</h3>Requires:`;
		txt +=
			`<ul style="margin-left:-10px">` +
			`<li>Hew Maan to be set to 0/225 in the Level Up addon.</li>` +
			x25 +
			`<li><em>Note: I don't recommend investing iLvls in Tatyana until at least 7j.</em></li>` +
			`</ul>`;
		txt += `</span>`;
	}
	txt += `<h3>Specialisations</h3>`;
	txt += `<span style="display:grid;grid-template-columns:repeat(2,auto);grid-template-rows:1fr;grid-gap:6px 12px">`;
	let addNoneMsg = false;
	const specTexts = [];
	for (const champId of Object.keys(specsData)) {
		if (tatyana && champId === 75) continue;
		const len = specsData[champId].length;
		if (len === 0) addNoneMsg = true;
		else specTexts.push(createSpecTxt(champId, specsData[champId]));
	}
	specTexts.sort();
	for (const specText of specTexts) txt += specText;
	if (addNoneMsg) txt += createSpecTxt();
	txt += `</span>`;
	txt += `</span>`;
	return txt;
}

function createSpecTxt(champId, specIds) {
	let specText = ``;
	specIds = specIds || [-1];
	const champData = championData[champId || -1];
	for (let i = 0; i < specIds.length; i++) {
		if (i > 0) specText += ` + `;
		specText += champData.specs[specIds[i]];
	}
	return `<strong>${champData.name}:</strong><span>${specText}</span>`;
}

function typeSort(a, b) {
	const al = a.toLowerCase();
	const bl = b.toLowerCase();
	if (al === bl) return 0;
	return al < bl ? -1 : 1;
}
