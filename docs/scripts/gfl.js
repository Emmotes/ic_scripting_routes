const vg=1.004;
const ncf=[`Cursed Farmer`,`CF`,parseQTs(`CF`),3];
const ntt=[`Tall Tales`,`TT`,parseQTs(`TT`),1050];
const nll=[`Roots of Loomlurch`,`LL`,parseQTs(`LL`),1137];
const nrac=[`Resolve Amongst Chaos`,`RAC`,parseQTs(`RAC`),605];
const nvl=[`Vecna Lives!`,`VL!`,parseQTs(`VL!`),1163];
const fsa=`<br>This route requires <a href="https://github.com/imp444/IC_Addons/tree/main/IC_BrivGemFarm_BrivFeatSwap_Extra" target="_blank">ImpEGamer's BrivFeatSwap</a> addon.`;
const fsaaa=fsa.replace(`n.`, `n and the Accurate Acrobatics feat.`);
const tt=`${ntt[0]} (${ntt[1]}) is in the Witchlight campaign.`;
const ll=`The ${nll[0]} (${nll[1]}) is in the Witchlight campaign.`;
const cf=`${ncf[0]} (${ncf[1]}) is in The Grand Tour of the Sword Coast campaign.`;
const rac=`${nrac[0]} (${nrac[1]}) is in the Descent into Avernus campaign.`;
const vl=`${nvl[0]} (${nvl[1]}) is in the Grand Tour of the Sword Coast campaign.`;
const bbb=`Don't forget to enable Vajra patron to benefit from the Brisk Benefactor Tier 3 Corellon local blessing.`;
const whf=`Wasting Haste`;
const ssf=`Strategic Stride`;
const aaf=`Accurate Acrobatics`;
const w4jf=` with ${whf} Feat`;
const w9jf=` with ${ssf} Feat`;
const wplf=` with ${aaf} Feat`;
const sss=`Safer Shandie`;
const dyn=`<br>This route can optionally use Dynaheir and Minsc instead of BBEG as it always hits Humanoid or Fey enemies only.`;
const mimo=`<br>This route can optionally use Dynaheir, Minsc and Imoen instead of BBEG as it always hits Humanoid or Fey or Beast enemies only.`;
const place=`<br><strong><em>This is a placeholder route meant for testing purposes only.</em></strong>`;

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
	mixed01LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:{
			min:0,
			max:1
		},
		bf:1125899906842623n,
		blurb:`${ll}`
	},
	pure1LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:1,
		q:2,
		e:1,
		bf:985162414288895n,
		blurb:`${ll}`
	},
	mixed12LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:{
			min:1,
			max:2
		},
		bf:914793668012031n,
		blurb:`${ll}`
	},
	pure2LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:2,
		q:3,
		e:1,
		bf:1053332137310143n,
		blurb:`${ll}`,
		loop:true
	},
	mixed23LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:{
			min:2,
			max:3
		},
		bf:1020346787427327n,
		blurb:`${ll}`
	},
	pure3LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:3,
		q:4,
		e:1,
		bf:1090715500149758n,
		blurb:`${ll}`,
		loop:true,
		order:1
	},
	pure3VL:{
		name:nvl[0],
		sname:nvl[1],
		qts:nvl[2],
		adv:nvl[3],
		jump:3,
		q:4,
		e:1,
		bf:1090715500142542n,
		blurb:`${vl}`,
		loop:true,
		order:2
	},
	pre4TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:{
			min:3,
			max:4
		},
		bf:508470925670862n,
		blurb:`${tt}<br>Good for any jump between pure 3j and pure 4j.<br>(You can calculate stack amounts for this jump by using the 'TT (100% 4j)' route in the stacks calculator.)`
	},
	pure4TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:4,
		q:5,
		e:1,
		bf:544309226487279n,
		blurb:`${tt}${mimo}`,
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
		q:5,
		e:1,
		bf:544309226487279n,
		blurb:`${tt} You'll need to equip Briv's Wasting Haste feat to return to pure 4j.${mimo}`,
		loop:true
	},
	feat54TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:5,
		q:6,
		e:5,
		bf:498342527128532n,
		blurb:`${tt}${fsa}`,
		loop:true,
		fs:true,
		order:1
	},
	pure6LL:{
		name:nll[0],
		sname:nll[1],
		qts:nll[2],
		adv:nll[3],
		jump:6,
		q:7,
		e:1,
		bf:873863567932216n,
		blurb:`${ll}`,
		loop:true,
		order:3
	},
	feat64TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:6,
		q:7,
		e:5,
		bf:800122939009243n,
		blurb:`${tt}${fsa}`,
		loop:true,
		fs:true,
		order:1
	},
	feat64RAC:{
		name:nrac[0],
		sname:nrac[1],
		qts:nrac[2],
		adv:nrac[3],
		jump:6,
		q:7,
		e:5,
		bf:948417617686362n,
		blurb:`${rac} This does not benefit from any quest reduction blessings or perks.${fsa}`,
		loop:true,
		fs:true,
		order:4
	},
	pure6TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:6,
		q:7,
		e:1,
		bf:1086144474247034n,
		blurb:`${tt}${mimo}`,
		loop:true,
		order:2
	},
	pure7TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:7,
		q:8,
		e:1,
		bf:1108238796846077n,
		blurb:`${tt}${mimo}`,
		loop:true,
		order:2
	},
	feat74TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:7,
		q:8,
		e:5,
		bf:380222613385436n,
		blurb:`${tt}${fsa}${mimo}`,
		loop:true,
		fs:true,
		order:1
	},
	short87TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:8,
		disp:`0.0031% 7j 99.9969% 8j`,
		q:9,
		e:8,
		bf:878610951932870n,
		blurb:`${tt}${fsaaa}${crdn(8)}${mimo}`,
		loop:true,
		fs:true,
		feat:7,
		order:1
	},
	feat84TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:8,
		q:9,
		e:5,
		bf:57952963557919n,
		blurb:`${tt}${fsa}${dyn}`,
		loop:true,
		fs:true,
		order:2
	},
	pure8TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:8,
		q:9,
		e:1,
		bf:985128007367679n,
		blurb:`${tt}${mimo}`,
		loop:true,
		order:3
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
		blurb:`${tt}<br>This route is slower than anything pure 8j can offer so I suggest you equip the Accurate Acrobatics feat and run an 8j preset.`
	},
	feat94TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:9,
		q:10,
		e:5,
		bf:35181131988031n,
		blurb:`${tt}${fsa}${mimo}`,
		loop:true,
		fs:true,
		order:2
	},
	pure9TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:9,
		q:10,
		e:1,
		bf:17020252302587n,
		blurb:`${tt}${mimo}`,
		loop:true,
		order:1
	},
	pure11TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:11,
		q:12,
		e:1,
		bf:853162999544159n,
		blurb:`${tt}${dyn}`,
		loop:true
	},
	short1211TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:11.999998066406249,
		disp:`0.0002% 11j 99.9998% 12j`,
		q:13,
		e:12,
		bf:554220480505760n,
		blurb:`${tt}${fsaaa}${crdn(12)}${dyn}`,
		loop:true,
		fs:true,
		feat:11
	},
	pure14TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:14,
		q:15,
		e:1,
		bf:36326465504417n,
		blurb:`${tt}${mimo}`,
		loop:true,
		order:2
	},
	feat149TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:14,
		q:15,
		e:10,
		bf:1125899805626349n,
		blurb:`${tt}${fsa}${mimo}`,
		loop:true,
		order:1
	},
	short1615TT:{
		name:ntt[0],
		sname:ntt[1],
		qts:ntt[2],
		adv:ntt[3],
		jump:15.9999998791503906,
		disp:`0.000012% 15j 99.999988% 16j`,
		q:17,
		e:16,
		bf:360709071052808n,
		blurb:`${tt}${fsaaa}${crdn(16)}${dyn}`,
		loop:true,
		fs:true,
		feat:15
	}
};

const enemyTypes = ["aberration","beast","celestial","construct","dragon","elemental","fey","fiend","giant","humanoid","monstrosity","ooze","plant","undead"]

function parseRoute(route) {
	return addToDescRow(`<h3>`+parseName(route)+`</h3>${route.blurb}`+((route.loop||false)?addLoop(route.bf,route.q,route.e):``))+addChecked(route.bf,true);
}

function parseName(route,s) {
	let e=``;
	if (route.jump!=undefined) {
		if (typeof(route.jump)=="number") {
			let p=``;
			if (route.e!=undefined&&route.e>1)
				p+=` / ${route.e-1}j Feat Swap`;
			else if (route.fs!=undefined&&route.fs)
				p+=` / 4j Feat Swap`;
			if (route.special!=undefined&&route.special!="")
				p+=` ${route.special}`;
			if (route.disp!=undefined)
				e=` (${route.disp}${p})`;
			else if (Math.round(route.jump)!=route.jump) {
				let cj=route.jump-Math.floor(route.jump);
				e=` (100% ${route.q-1}j${p})`;
			} else
				e=` (100% ${route.jump}j${p})`;
		} else if (route.feat!=undefined&&(route.fs==undefined||!route.fs)) {
			e=` (100% ${route.feat}j`;
			switch (route.feat) {
				case 4: e+=w4jf; break;
				case 9: e+=w9jf; break;
				default: e+=wplf;
			}
			e+=`)`;
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

function crdn(jump) {
	// Note for round down feat.
	return `<br>This route requires you to be as close to ${jump}j as possible without actually reaching ${jump}j. You can't make use of the Accurate Acrobatics feat if you do reach ${jump}j.`
}