/* ================ *
 * ===== Data ===== *
 * ================ */
 
const forms = {
	"GT":{
		"name":"Grand Tour of the Sword Coast",
		"cols":5,
		"slots":[
			{"x":240,"y": 60},
			{"x":180,"y": 30},
			{"x":180,"y": 90},
			{"x":120,"y":  0},
			{"x":120,"y": 60},
			{"x":120,"y":120},
			{"x": 60,"y": 30},
			{"x": 60,"y": 90},
			{"x":  0,"y": 60}
		],
		"forms":{
			"BBEG":{
				"Q":[139,75,148,125,91,83,0,0,58],
				"M":[139,75,148,125,91,83,99,0,58],
				"specs":{
					"M":{
						"Thellora":"",
						"Hew Maan":"Did We Say Humans? We Meant...",
						"Diana":"Inspire: Fledgling Fury + Ensemble Cast",
						"BBEG":"Powergaming",
						"Widdle":"",
						"Ellywick":"All That Sparkles",
						"Dungeon Master":"Where Did He Go This Time?",
						"Briv":"Metalborn"
					}
				}
			}
		},
		"ignoreFeatSwap":1,
		"ignoreHybrid":1
	},
	"WL":{
		"name":"Wild Beyond the Witchlight",
		"cols":4,
		"slots":[
			{"x":180,"y": 30},
			{"x":180,"y": 90},
			{"x":120,"y":  0},
			{"x":120,"y": 60},
			{"x":120,"y":120},
			{"x": 60,"y": 30},
			{"x": 60,"y": 90},
			{"x":  0,"y":  0},
			{"x":  0,"y": 60},
			{"x":  0,"y":120}
		],
		"forms":{
			"BBEG":{
				"Q":[75,139,148,91,125,0,0,0,58,83],
				"M":[75,139,148,91,125,0,0,99,58,83],
				"WH":[58,0,97,0,0,0,0,59,0,83],
				"MH":[75,139,148,91,125,0,99,59,58,83],
				"specs":{
					"M":{
						"Hew Maan":"Did We Say Humans? We Meant...",
						"Thellora":"",
						"Diana":"Inspire: Fledgling Fury + Ensemble Cast",
						"Widdle":"",
						"BBEG":"Powergaming",
						"Dungeon Master":"Where Did He Go This Time?",
						"Briv":"Metalborn",
						"Ellywick":"All That Sparkles"
					},
					"MH":{
						"Hew Maan":"Did We Say Humans? We Meant...",
						"Thellora":"",
						"Diana":"Inspire: Fledgling Fury + Ensemble Cast",
						"Widdle":"",
						"BBEG":"Powergaming",
						"Dungeon Master":"Where Did He Go This Time?",
						"Melf":"Extra Supplements",
						"Briv":"Metalborn",
						"Ellywick":"All That Sparkles"
					}
				}
			},
			"dynaMinsc":{
				"Q":[75,139,148,91,145,0,0,58,7,83],
				"M":[75,139,148,91,145,99,0,58,7,83],
				"WH":[58,0,97,0,0,0,0,59,0,83],
				"MH":[75,139,148,91,145,99,59,58,7,83],
				"specs":{
					"M":{
						"Hew Maan":"Hello, Fellow Mercenaries!",
						"Thellora":"",
						"Diana":"Inspire: Fledgling Fury + Ensemble Cast",
						"Widdle":"",
						"Dynaheir":"",
						"Dungeon Master":"Where Did He Go This Time?",
						"Briv":"Metalborn",
						"Minsc":"Favored Enemy: Fey",
						"Ellywick":"All That Sparkles"
					},
					"MH":{
						"Hew Maan":"Hello, Fellow Mercenaries!",
						"Thellora":"",
						"Diana":"Inspire: Fledgling Fury + Ensemble Cast",
						"Widdle":"",
						"Dynaheir":"",
						"Dungeon Master":"Where Did He Go This Time?",
						"Melf":"Extra Supplements",
						"Briv":"Metalborn",
						"Minsc":"Favored Enemy: Fey",
						"Ellywick":"All That Sparkles"
					}
				}
			},
			"MImoHeir":{
				"Q":[75,139,117,148,145,0,91,58,7,83],
				"M":[75,139,117,148,145,99,91,58,7,83],
				"WH":[58,0,97,0,0,0,0,59,0,83],
				"MH":[75,139,117,148,59,99,91,58,7,83],
				"specs":{
					"M":{
						"Hew Maan":"Hello, Fellow Mercenaries!",
						"Thellora":"",
						"Imoen":"Beast Slaying Arrows",
						"Diana":"Inspire: Fledgling Fury + Ensemble Cast",
						"Dynaheir":"",
						"Dungeon Master":"Where Did He Go This Time?",
						"Widdle":"",
						"Briv":"Metalborn",
						"Minsc":"Favored Enemy: Fey",
						"Ellywick":"All That Sparkles"
					},
					"MH":{
						"Hew Maan":"Hello, Fellow Mercenaries!",
						"Thellora":"",
						"Imoen":"Beast Slaying Arrows",
						"Diana":"Inspire: Fledgling Fury + Ensemble Cast",
						"Dungeon Master":"Where Did He Go This Time?",
						"Melf":"Extra Supplements",
						"Widdle":"",
						"Briv":"Metalborn",
						"Minsc":"Favored Enemy: Fey",
						"Ellywick":"All That Sparkles"
					}
				}
			}
		}
	}
};
const champNamesById={
	  "7":"Minsc",
	 "58":"Briv",
	 "59":"Melf",
	 "75":"Hew Maan",
	 "83":"Ellywick",
	 "91":"Widdle",
	 "97":"Tatyana",
	 "99":"Dungeon Master",
	"117":"Imoen",
	"125":"BBEG",
	"139":"Thellora",
	"145":"Dynaheir",
	"148":"Diana"
}

/* ================================= *
 * ===== Select Box Population ===== *
 * ================================= */
 
async function populateFormCampaigns() {
	disableElements(true,true,true);
	let inner = `<option value="" selected>-</option>`;
	for (let formId of Object.keys(forms)) {
		let form = forms[formId];
		inner += `<option value="${formId}">${form.name}</option>`;
	}
	formCampaign.innerHTML = inner;
}

async function populateFormTypes() {
	let campaign = formCampaign.value;
	let inner = `<option value="" selected>-</option>`;
	if (campaign != "") {
		let form = forms[campaign];
		for (let typeId of Object.keys(form.forms)) {
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

/* ============================== *
 * ===== Input Update Calls ===== *
 * ============================== */

async function formsUpdateCampaign() {
	populateFormTypes();
	decideFormsShowStatus();
}

async function formsUpdateType() {
	decideFormsShowStatus();
}

async function formsUpdateCheckboxes() {
	decideFormsShowStatus();
}

async function formsUpdateShow() {
	let campaign = formCampaign.value;
	let type = formType.value;
	let featSwap = formFeatSwap.checked;
	let hybrid = formHybrid.checked;
	
	if (campaign == "" || type == "")
		return;
	
	let f = forms[campaign];
	let isGT = campaign == 'GT';
	if (featSwap && f.ignoreFeatSwap == 1)
		featSwap = false;
	if (hybrid && f.ignoreHybrid == 1)
		hybrid = false;
	
	let q = f.forms[type].Q;
	let w = hybrid ? f.forms[type].WH : [58,0,0,0,0,0,0,0,0];
	if (!isGT)
		w.push(0);
	let e = [...q];
	if (!featSwap) {
		let index = e.indexOf(58);
		if (index != -1)
			e[index] = 0;
	}
	let mType = hybrid ? 'MH' : 'M';
	let m = f.forms[type][mType];
	
	let txt = ``;
	let currForms = {"Q (Fav: 1)":q,"W (Fav: 2)":w,"E (Fav: 3)":e,"M (Modron)":m};
	
	txt += `<h1>${f.name}</h1>`;
	txt += `<p style="padding-left:10px">The 'M (Modron)' formation is a separate 4th formation that is selected in the Modron Automation settings. It becomes the formation that is loaded on z1. All specialisations get saved to the Modron formation - and you don't need to save any to the others.</p>`;
	txt += `<span style="display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:1fr">`;
	for (let name of Object.keys(currForms)) {
		let currForm = currForms[name];
		txt += `<span style="display:flex;flex-direction:column;align-items:center;padding:20px">`;
		txt += `<h2>${name}</h2>`;
		txt += createSVG(f.slots,f.cols,currForm);
		if (name == "M (Modron)") {
			txt += `</span>`;
			txt += `<span style="grid-column:span 2;display:flex;justify-content:center;padding:20px">`;
			txt += addSpecInfo(f.forms[type].specs[mType]);
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
	
	if (campaign == "" || type == "")
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
		let champName = champNamesById[ids[i]];
		if (champName == undefined && ids[i] > 0)
			console.log(`Unknown champion id: ${ids[i]}`);
		svg += `<image x="${slots[i].x}" y="${slots[i].y}" width="${circleDiameter}" height="${circleDiameter}" href="https://emmotes.github.io/ic_servercalls/images/portraits/${ids[i]}.png"`;
		if (champName != undefined)
			svg += `><title>${champName}</title></image>`;
		else
			svg += ` />`;
	}
	svg += `</svg>`;
	return svg;
}

function addSpecInfo(specs) {
	txt = ``;
	txt += `<span style="display:flex;flex-direction:column;align-items:flex-start">`;
	txt += `<h3>Specialisations</h3>`;
	txt += `<span style="display:grid;grid-template-columns:repeat(2,auto);grid-template-rows:1fr;grid-gap:6px 12px">`;
	let addNoneMsg = false;
	let names = Object.keys(specs);
	names.sort();
	for (let name of names)
		if (specs[name] != "")
			txt += createSpecTxt(name,specs[name]);
		else
			addNoneMsg = true;
	if (addNoneMsg)
		txt += createSpecTxt("Others","Shouldn't be leveled enough to get one.");
	txt += `</span>`;
	txt += `</span>`;
	return txt;
}

function createSpecTxt(name,spec) {
	return `<strong>${name}:</strong><span>${spec==""?"None":spec}</span>`;
}