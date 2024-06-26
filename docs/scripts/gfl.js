const vg=1.8;
const ncf=[`Cursed Farmer`,`CF`,parseQTs(`CF`),3];
const ntt=[`Tall Tales`,`TT`,parseQTs(`TT`),1050];
const nll=[`Roots of Loomlurch`,`LL`,parseQTs(`LL`),1137];
const nrac=[`Resolve Amongst Chaos`,`RAC`,parseQTs(`RAC`),605];
const nvl=[`Vecna Lives!`,`VL!`,parseQTs(`VL!`),1163];
const fsa=`<br>This requires <a href="https://github.com/imp444/IC_Addons/tree/main/IC_BrivGemFarm_BrivFeatSwap_Extra" target="_blank">ImpEGamer's BrivFeatSwap</a> addon.`;
const fcsa=`<br>This can be faster with mouse clicks enabled.`;
const tt=`${ntt[0]} (${ntt[1]}) is in the Witchlight campaign.`;
const ll=`The ${nll[0]} (${nll[1]}) is in the Witchlight campaign.`;
const cf=`${ncf[0]} (${ncf[1]}) is in The Grand Tour of the Sword Coast campaign.`;
const rac=`${nrac[0]} (${nrac[1]}) is in the Descent into Avernus campaign.`;
const vl=`${nvl[0]} (${nvl[1]}) is in the Grand Tour of the Sword Coast campaign.`;
const bbb=`Don't forget to enable Vajra patron to benefit from the Brisk Benefactor Tier 3 Corellon local blessing.`;
const wft=` with Wasting Haste Feat`;
const sss=`Safer Shandie`;
const ssb=`<br>This route is designed to be safer for Shandie's Dash.`;

const gemFarmJson={
	unknown:{
		name:"Unknown",
		blurb:`You have a skip amount and jump chance that I haven't accounted for yet. I have no idea what route you need.`
	},
	cf:{
		name:ncf[0],
		sname:ncf[1],
		qts:ncf[2],
		adv:ncf[3],
		bf:1125899906842623n,
		blurb:`${cf} You won't want to be walking any areas as that will only slow you down.`
	},
	pure2LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:2,
		bf:1053332137310143n,
		blurb:`${ll}`,
		loop:true
	},
	pure3LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:3,
		bf:1090715500149758n,
		blurb:`${ll}`,
		loop:true
	},
	pure3VL:{
		name:nvl[0],
		sname:nvl[1],
		qts:nvl[2],
		adv:nvl[3],
		jump:3,
		bf:1090715500142542n,
		blurb:`${vl}`,
		loop:true
	},
	pre4TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:{
			min:3.25,
			max:4,
			minInc:true
		},
		bf:508470925670862n,
		blurb:`${tt}`
	},
	pure4TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:4,
		bf:544309226487279n,
		blurb:`${tt}`,
		loop:true
	},
	feat4TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		feat:4,
		jump:{
			min:4,
			max:6
		},
		bf:544309226487279n,
		blurb:`${tt} You'll need to equip Briv's Wasting Haste feat to return to pure 4j.`,
		loop:true
	},
	feat54TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:5,
		bf:498342527128532n,
		blurb:`${tt}${fsa}`,
		loop:true,
		fs:true
	},
	pure6LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:6,
		bf:873863567932216n,
		blurb:`${ll}`,
		loop:true
	},
	feat64TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:6,
		bf:800122939009243n,
		blurb:`${tt}${fsa}`,
		loop:true,
		fs:true
	},
	feat64RAC:{
		name:nrac[0],
		sname:nrac[1],
		qts:nrac[2],
		adv:nrac[3],
		jump:6,
		bf:948417617686362n,
		blurb:`${rac} This does not benefit from any quest reduction blessings or perks.${fsa}`,
		loop:true,
		fs:true
	},
	pure6TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:6,
		bf:1086144474247034n,
		blurb:`${tt}`,
		loop:true
	},
	pure7TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:7,
		bf:1108238796846077n,
		blurb:`${tt}`,
		loop:true
	},
	pure7TTS:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:7,
		bf:1055462239761401n,
		blurb:`${tt}${ssb}`,
		loop:true,
		special:sss
	},
	feat74TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:7,
		bf:380222613385436n,
		blurb:`${tt}${fsa}`,
		loop:true,
		fs:true
	},
	feat84TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:8,
		bf:57952963557919n,
		blurb:`${tt}${fsa}`,
		loop:true,
		fs:true
	},
	feat84TTS:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:8,
		bf:800143501327198n,
		blurb:`${tt}${fsa}${ssb}`,
		loop:true,
		fs:true,
		special:sss
	},
	pure8TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:8,
		bf:985128007367679n,
		blurb:`${tt}`,
		loop:true
	},
	mixed89TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:{
			min:8,
			max:9
		},
		bf:16989228054990n,
		blurb:`${tt}`
	},
	feat94TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:9,
		bf:35181131988031n,
		blurb:`${tt}${fsa}`,
		loop:true,
		fs:true
	},
	pure9TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:9,
		bf:17020252302587n,
		blurb:`${tt}`,
		loop:true
	},
	pure11TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:11,
		bf:853162999544159n,
		blurb:`${tt}`,
		loop:true
	}
};

const badZones = {
	"TT":{
		"hit":[20],
		"arm":[30,35]
	},
	"LL":{
		"hit":[15,25,50],
		"arm":[]
	},
	"VL!":{
		"hit":[18,50],
		"arm":[25]
	},
	"RAC":{
		"hit":[10,20,23,30,45],
		"arm":[5,40]
	}
}

function parseRoute(route) {
	return addToDescRow(`<h3>`+parseName(route)+`</h3>${route.blurb}`+((route.loop||false)?addLoop(route.bf,(route.feat||false?route.feat:route.jump),route.fs||false):``))+addChecked(route.bf,true);
}

function parseName(route,s) {
	let e=``;
	if (route.jump!=undefined) {
		if (typeof(route.jump)=="number") {
			let p=``;
			if (route.fs!=undefined&&route.fs) p+=` / 4j Feat Swap`;
			if (route.special!=undefined&&route.special!="") p+=` ${route.special}`;
			e=` (100% ${route.jump}j${p})`;
		} else if (route.feat!=undefined) {
			e=` (100% ${route.feat}j ${wft})`;
		} else {
			e=` (Mixed ${route.jump.min}-${route.jump.max}j)`;
		}
	}
	return (s?route.sname:route.name)+e;
}

function parseQTs(name) {
	switch(name) {
		case `TT`: return [1,1,1,1,1,2,2,2,3,3,
						   1,1,1,1,1,1,0,0,0,0,
						   1,1,1,1,1,1,1,4,4,5,
						   1,1,6,6,6,1,1,0,0,0,
						   0,0,0,7,7,1,1,1,1,1];
		case `LL`: return [1,1,1,1,1,2,2,2,2,2,
						   2,2,2,2,2,3,3,3,3,3,
						   3,3,3,3,3,4,4,4,4,4,
						   4,4,4,4,4,5,5,5,5,5,
						   6,6,6,6,6,6,6,6,6,6];
		case `CF`: return [ 1, 1, 0, 0, 1, 1, 0, 2, 2, 3,
						    0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
						    0, 5, 5, 5, 5, 0, 0, 0, 0, 6,
						    0, 7, 7, 7, 7, 0, 0, 8, 8, 8,
						    0, 9,10,10,10,10,10,10,10,10];
		case `RAC`: return [0,0,0,1,1,0,0,0,0,0,
							2,2,0,2,2,2,2,2,2,2,
							2,2,2,2,2,0,3,3,3,3,
							0,2,2,2,2,2,2,2,2,2,
							2,2,2,2,2,0,0,0,0,0];
		case `VL!`: return [1,1,1,1,1,1,1,2,2,2,
							2,2,2,2,2,3,3,3,4,4,
							4,4,4,4,4,3,3,3,2,2,
							3,3,3,3,3,3,3,3,3,3,
							5,5,5,5,5,5,5,5,5,6];
		default: return [];
	}
}