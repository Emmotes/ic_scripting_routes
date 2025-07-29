/* ================ *
 * ===== Data ===== *
 * ================ */
 
const championData={"7":{"name":"Minsc","specs":{"108":"Favored Enemy: Humanoids","109":"Favored Enemy: Beasts","110":"Favored Enemy: Undead","111":"Favored Enemy: Fey","112":"Favored Enemy: Monstrosities"}},"58":{"name":"Briv","specs":{"3455":"Metalborn","3456":"Tempered Steel","3457":"Go With The Phlo"}},"59":{"name":"Melf","specs":{"3513":"Bonus Adaption","3514":"Extra Supplements","3515":"Absolute Righteousness"}},"75":{"name":"Hew Maan","specs":{"10653":"Did We Say Humans? We Meant...","10654":"Law Maan","10655":"Hello, Fellow Mercenaries!"}},"83":{"name":"Ellywick","specs":{"15231":"For The Fans","15232":"Faster Tempo","15233":"All That Sparkles"}},"91":{"name":"Widdle","specs":{"6909":"Strong and Steady","6910":"Mind and Body","6911":"Wisdom and Confidence"}},"97":{"name":"Tatyana","specs":{"7387":"Your Friends are My Friends","7388":"By My Side","7389":"Best Friend Forever"}},"99":{"name":"Dungeon Master","specs":{"7848":"Special Guest Star","7849":"Where Did He Go This Time?","7850":"Fear Not, Champions!","16144":"Special Guest Stars"}},"117":{"name":"Imoen","specs":{"9643":"Beast Slaying Arrows","9644":"Dragon Slaying Arrows","9645":"Monstrosity Slaying Arrows","9646":"Aberration Slaying Arrows"}},"125":{"name":"BBEG","specs":{"11544":"Powergaming","11545":"Min-Maxing","11546":"Rules Lawyering"}},"139":{"name":"Thellora","specs":{"12982":"Defender of the Meek","12983":"Vanguard of the Quick","12984":"Callessa's Blessed"}},"145":{"name":"Dynaheir","specs":{"13879":"Circle Magic","13880":"Iron Lord's Justice","13881":"Loyal Bodyguard"}},"148":{"name":"Diana","specs":{"14791":"Inspire: Acrobatic Assault","14792":"Inspire: Modest Might","14793":"Inspire: Fledgling Fury","14796":"Ensemble Cast","14797":"Spotlight Episode"}},"-1":{"name":"Others","specs":{"-1":"Shouldn't be leveled enough to get one."}}};
const formsData={"GT":{"name":"Grand Tour of the Sword Coast","cols":5,"slots":[{"x":240,"y":60},{"x":180,"y":30},{"x":180,"y":90},{"x":120,"y":0},{"x":120,"y":60},{"x":120,"y":120},{"x":60,"y":30},{"x":60,"y":90},{"x":0,"y":60}],"forms":{"BBEG":{"2":{"Q":[139,75,148,91,83,125,0,0,58],"specs":{"139":[],"75":[10653],"148":[14793,14796],"91":[6910],"83":[15233],"125":[11544],"58":[3455]},"M":[139,75,148,91,83,125,0,99,58]},"3":{"Q":[139,75,91,148,125,0,58,0,83],"specs":{"139":[],"75":[10653],"91":[6910],"148":[14793,14796],"125":[11544],"58":[3455],"83":[15233]},"M":[139,75,91,148,125,0,58,99,83]},"4":{"Q":[139,75,148,125,91,83,0,0,58],"specs":{"139":[],"75":[10653],"148":[14793,14796],"125":[11544],"91":[6910],"83":[15233],"58":[3455]},"M":[139,75,148,125,91,83,0,99,58]}}},"ignoreFeatSwap":1,"ignoreHybrid":1},"WL":{"name":"Wild Beyond the Witchlight","cols":4,"slots":[{"x":180,"y":30},{"x":180,"y":90},{"x":120,"y":0},{"x":120,"y":60},{"x":120,"y":120},{"x":60,"y":30},{"x":60,"y":90},{"x":0,"y":0},{"x":0,"y":60},{"x":0,"y":120}],"forms":{"dynaMinsc":{"2":{"Q":[75,139,148,145,91,7,0,0,58,83],"specs":{"75":[10655],"139":[],"148":[14793,14796],"145":[],"91":[6910],"7":[111],"58":[3455],"83":[15233]},"M":[75,139,148,145,91,7,0,99,58,83],"MH":[75,139,148,145,91,7,59,99,58,83]},"3":{"Q":[75,139,148,145,91,0,7,0,58,83],"specs":{"75":[10655],"139":[],"148":[14793,14796],"145":[],"91":[6910],"7":[111],"58":[3455],"83":[15233]},"M":[75,139,148,145,91,0,7,99,58,83],"MH":[75,139,148,145,91,59,7,99,58,83]},"4":{"Q":[75,139,148,91,145,0,0,7,58,83],"specs":{"75":[10655],"139":[],"148":[14793,14796],"91":[6910],"145":[],"7":[111],"58":[3455],"83":[15233]},"M":[75,139,148,91,145,99,0,7,58,83],"MH":[75,139,148,91,145,99,59,7,58,83]}},"MImoHeir":{"2":{"Q":[75,139,148,7,91,145,0,58,83,117],"specs":{"75":[10655],"139":[],"148":[14793,14796],"7":[111],"91":[6910],"145":[],"58":[3455],"83":[15233],"117":[9643]},"M":[75,139,148,7,91,145,99,58,83,117],"MH":[75,139,148,7,91,59,99,58,83,117]},"3":{"Q":[75,139,148,7,91,0,145,117,83,58],"specs":{"75":[10655],"139":[],"148":[14793,14796],"7":[111],"91":[6910],"145":[],"117":[9643],"83":[15233],"58":[3455]},"M":[75,139,148,7,91,99,145,117,83,58],"MH":[75,139,148,7,91,99,59,117,83,58]},"4":{"Q":[75,139,117,148,145,0,91,58,7,83],"specs":{"75":[10655],"139":[],"117":[9643],"148":[14793,14796],"145":[],"91":[6910],"58":[3455],"7":[111],"83":[15233]},"M":[75,139,117,148,145,99,91,58,7,83],"MH":[75,139,117,148,59,99,91,58,7,83]}},"BBEG":{"2":{"Q":[75,139,148,125,91,0,0,0,58,83],"specs":{"75":[10653],"139":[],"148":[14793,14796],"125":[11544],"91":[6910],"58":[3455],"83":[15233]},"M":[75,139,148,125,91,99,0,0,58,83],"MH":[75,139,148,125,91,99,0,59,58,83]},"3":{"Q":[75,139,91,148,0,125,0,0,58,83],"specs":{"75":[10653],"139":[],"91":[6910],"148":[14793,14796],"125":[11544],"58":[3455],"83":[15233]},"M":[75,139,91,148,99,125,0,0,58,83],"MH":[75,139,91,148,99,125,0,59,58,83]},"4":{"Q":[75,139,148,91,125,0,0,0,58,83],"specs":{"75":[10653],"139":[],"148":[14793,14796],"91":[6910],"125":[11544],"58":[3455],"83":[15233]},"M":[75,139,148,91,125,0,0,99,58,83],"MH":[75,139,148,91,125,0,99,59,58,83]}}}}};

/* ================================= *
 * ===== Select Box Population ===== *
 * ================================= */
 
async function populateFormCampaigns() {
	disableElements(true,true,true);
	let inner = `<option value="" selected>-</option>`;
	for (let formId of Object.keys(formsData)) {
		let form = formsData[formId];
		inner += `<option value="${formId}">${form.name}</option>`;
	}
	formCampaign.innerHTML = inner;
}

async function populateFormTypes() {
	let campaign = formCampaign.value;
	let inner = `<option value="" selected>-</option>`;
	if (campaign != "") {
		let form = formsData[campaign];
		let types = Object.keys(form.forms);
		types.sort(typeSort);
		for (let typeId of types) {
			let type = form.forms[typeId];
			let name;
			if (typeId == "BBEG")
				name = "BBEG";
			else if (typeId == "dynaMinsc")
				name = "Dynaheir and Minsc";
			else if (typeId == "MImoHeir")
				name = "Dynaheir Minsc and Imoen";
			else {
				console.log(`Error: Unknown formation type: ${JSON.stringify(type)}.`);
				formType.innerHTML = inner;
				return;
			}
			inner += `<option value="${typeId}">${name}</option>`;
		}
	}
	formType.innerHTML = inner;
}

async function populateFormWiddles() {
	let campaign = formCampaign.value;
	let type = formType.value;
	let inner = `<option value="" selected>-</option>`;
	if (campaign != "" && type != "")
		for (let numWiddleAdj of Object.keys(formsData[campaign].forms[type]))
			inner += `<option value="${numWiddleAdj}">${numWiddleAdj}</option>`;
	formWiddle.innerHTML = inner;
}

/* ============================== *
 * ===== Input Update Calls ===== *
 * ============================== */

async function formsUpdateCampaign() {
	populateFormTypes();
	populateFormWiddles();
	decideFormsShowStatus();
}

async function formsUpdateType() {
	populateFormWiddles();
	decideFormsShowStatus();
}

async function formsUpdateWiddle() {
	decideFormsShowStatus();
}

async function formsUpdateCheckboxes() {
	decideFormsShowStatus();
}

async function formsUpdateShow() {
	let campaign = formCampaign.value;
	let type = formType.value;
	let widdle = formWiddle.value;
	let featSwap = formFeatSwap.checked;
	let hybrid = formHybrid.checked;
	
	if (campaign == "" || type == "" || widdle == "")
		return;
	
	let f = formsData[campaign];
	let isGT = campaign == 'GT';
	if (featSwap && f.ignoreFeatSwap == 1)
		featSwap = false;
	if (hybrid && f.ignoreHybrid == 1)
		hybrid = false;
	
	let q = f.forms[type][widdle].Q;
	let w = hybrid ? [58,0,97,0,0,0,0,59,0,83] : [58,0,0,0,0,0,0,0,0,0];
	let e = [...q];
	if (!featSwap) {
		let index = e.indexOf(58);
		if (index != -1)
			e[index] = 0;
	}
	let mType = hybrid ? 'MH' : 'M';
	let m = f.forms[type][widdle][mType];
	
	let txt = ``;
	let currForms = {"Q (Fav: 1)":q,"W (Fav: 2)":w,"E (Fav: 3)":e,"M (Modron)":m};
	
	txt += `<h1>${f.name}</h1>`;
	txt += `<span style="display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:1fr">`;
	for (let name of Object.keys(currForms)) {
		let currForm = currForms[name];
		txt += `<span style="display:flex;flex-direction:column;align-items:center;padding:20px">`;
		txt += `<h2>${name}</h2>`;
		txt += createSVG(f.slots,f.cols,currForm);
		if (name == "M (Modron)") {
			txt += `</span>`;
			txt += `<span style="grid-column:span 2;display:flex;justify-content:center;padding:20px">`;
			txt += addSpecInfo(f.forms[type][widdle].specs,currForms);
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
	if (window.location.hash.substring(1).split("_")[0]==ft)
		setHash(ft);
	
	let campaign = formCampaign.value;
	let type = formType.value;
	let widdle = formWiddle.value;
	
	if (campaign == "" || type == "" || widdle == "")
		disableElements(true,true,true);
	else if (campaign == "GT")
		disableElements(false,true,true);
	else
		disableElements(false,false,false);
	formsUpdateShow();
}
 
function disableElements(show,featSwap,hybrid) {
	let grey = `color:#444`;
	let noCur = `;cursor:default;pointer-events:none`;
	// formFeatSwap
	formFeatSwap.disabled = featSwap;
	formFeatSwap.style = featSwap ? grey + noCur : ``;
	formFeatSwapLabel.style = featSwap ? grey : ``;
	// formHybrid
	formHybrid.disabled = hybrid;
	formHybrid.style = hybrid ? grey + noCur : ``;
	formHybridLabel.style = hybrid ? grey : ``;
}

/* ========================== *
 * ===== Misc Functions ===== *
 * ========================== */
 
function createSVG(slots,cols,ids) {
	let circleDiameter = 50;
	
	let maxX = 0;
	let maxY = 0;
	for (let slot of slots) {
		if (slot.x > maxX)
			maxX = slot.x;
		if (slot.y > maxY)
			maxY = slot.y;
	}
	let formWidth = maxX + circleDiameter;
	let formHeight = maxY + circleDiameter;
	
	let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${formWidth}" height="${formHeight}">`;
	for (let i=0; i<slots.length; i++) {
		let champ = championData[ids[i]];
		if (champ == undefined && ids[i] > 0)
			console.log(`Unknown champion id: ${ids[i]}`);
		svg += `<image x="${slots[i].x}" y="${slots[i].y}" width="${circleDiameter}" height="${circleDiameter}" href="https://emmotes.github.io/ic_servercalls/images/portraits/${ids[i]}.png"`;
		if (champ != undefined)
			svg += `><title>${champ.name}</title></image>`;
		else
			svg += ` />`;
	}
	svg += `</svg>`;
	return svg;
}

function addSpecInfo(specsData,ids) {
	txt = ``;
	txt += `<span style="display:flex;flex-direction:column;align-items:flex-start">`;
	txt += `<h3>Specialisations</h3>`;
	txt += `<span style="display:grid;grid-template-columns:repeat(2,auto);grid-template-rows:1fr;grid-gap:6px 12px">`;
	let addNoneMsg = false;
	let specTexts = [];
	for (let champId of Object.keys(specsData)) {
		let len = specsData[champId].length;
		if (len == 0)
			addNoneMsg = true;
		else
			specTexts.push(createSpecTxt(champId, specsData[champId]));
	}
	specTexts.sort();
	for (let specText of specTexts)
		txt += specText;
	if (addNoneMsg)
		txt += createSpecTxt();
	txt += `</span>`;
	txt += `</span>`;
	return txt;
}

function createSpecTxt(champId,specIds) {
	let specText = ``;
	specIds = specIds || [-1];
	let champData = championData[champId||-1];
	for (let i=0; i<specIds.length; i++) {
		if (i > 0)
			specText += ` + `;
		specText += champData.specs[specIds[i]];
	}
	return `<strong>${champData.name}:</strong><span>${specText}</span>`;
}

function typeSort(a,b) {
	let al = a.toLowerCase();
	let bl = b.toLowerCase();
	if (al==bl)
		return 0;
	return (al < bl) ? -1 : 1;
}