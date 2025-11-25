# Idle Champions Briv Scripting Routes

{::nomarkdown}
<div class="tabs">
	<input onClick="setHash('gemTab')" type="radio" class="tabsRadio" name="routesTabs" id="gemTab" checked>
	<label for="gemTab" class="tabsLabel">Gem Farming Routes</label>
	<div class="tabsContent">
		<span class="routesRow">
			<span class="routesDesc">
				<h3 id="input">Please input your Briv's slot 4 item level as well as its rarity and gilding.</h3>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol1">
				<label for="ilvlInput">Item Level:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="ilvlInput" id="ilvlInput" value="3626">
			</span>
			<span class="routesCol3" style="width:160px">
				<label for="presetsInput">Presets:</label>
			</span>
			<span class="routesCol4">
				<select name="presetsInput" id="presetsInput">
					<option value="0.5j">0-1j</option>
					<option value="1j">1j</option>
					<option value="1.5j">1-2j</option>
					<option value="2j">2j</option>
					<option value="2.5j">2-3j</option>
					<option value="3j">3j</option>
					<option value="3.5j">3-4j</option>
					<option value="4j" selected>4j</option>
					<option value="5j">5j</option>
					<option value="6j">6j</option>
					<option value="7j">7j</option>
					<option value="7.99997j">8–j (7.99997j)</option>
					<option value="9j">9j</option>
					<option value="11j">11j</option>
					<option value="11.999998j">12–j (11.999998j)</option>
					<option value="14j">14j</option>
					<option value="15.99999988j">16–j (15.99999988j)</option>
				</select>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol1">
				<label for="rarityInput">Rarity:</label>
			</span>
			<span class="routesCol2">
				<select name="rarityInput" id="rarityInput">
					<option value="common">Common</option>
					<option value="uncommon">Uncommon</option>
					<option value="rare">Rare</option>
					<option value="epic" selected>Epic</option>
				</select>
			</span>
			<span style="flex-grow:1">
				<span class="routesCol5" style="display:flex;justify-content:center;padding-left:50px;">
					Presets will quickly set various common jumps.
				</span>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol1">
				<label for="gildingInput">Gilding:</label>
			</span>
			<span class="routesCol2">
				<select name="gildingInput" id="gildingInput">
					<option value="none">None</option>
					<option value="shiny">Shiny</option>
					<option value="golden" selected>Golden</option>
				</select>
			</span>
			<span class="routesCol5" id="shinyNote" style="display:none">
				Note: You can't get 100% on even numbered jumps with Shiny.
			</span>
		</span>
		<span class="routesWrapper" id="wrapper">
			&nbsp;
		</span>
	</div>
	<input onClick="setHash('stacksTab')" type="radio" class="tabsRadio" name="routesTabs" id="stacksTab">
	<label for="stacksTab" class="tabsLabel">Stacks Calculator</label>
	<div class="tabsContent">
		<span class="routesRow">
			<span class="routesDesc">
				<h3 id="eventInput">Fill out all the information below.</h3>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackRoute">Route:</label>
			</span>
			<span class="routesCol2">
				<select name="stackRoute" id="stackRoute">
					<option value="" selected disabled style="display:none;">&nbsp;</option>
				</select>
			</span>
		</span>
		<span class="routesRow hidden" id="stackMixediLvl">
			<span class="routesCol6">
				<label for="stackiLvl">Briv Slot 4 Item Level:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="stackiLvl" id="stackiLvl" value="">
			</span>
		</span>
		<span class="routesRow hidden" id="stackMixedRarity">
			<span class="routesCol6">
				<label for="stackRarity">Briv Slot 4 Rarity:</label>
			</span>
			<span class="routesCol2">
				<select name="stackRarity" id="stackRarity"></select>
			</span>
			<span class="routesCol4" id="stackRarityNote">
				&nbsp;
			</span>
		</span>
		<span class="routesRow hidden" id="stackMixedGilding">
			<span class="routesCol6">
				<label for="stackGilding">Briv Slot 4 Gilding:</label>
			</span>
			<span class="routesCol2">
				<select name="stackGilding" id="stackGilding"></select>
			</span>
			<span class="routesCol4" id="stackGildingNote">
				&nbsp;
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackReset">Modron Reset Zone:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="stackReset" id="stackReset" value="500" min="15">
			</span>
			<span class="routesCol4" id="stackResetNote">
				&nbsp;
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackFavour">Favour Exponent:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="stackFavour" id="stackFavour" value="100" min="0">
			</span>
			<span class="routesCol4" id="stackFavourNote">
				(Use 0 to disable Thellora)
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackStack">Stack Zone:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="stackStack" id="stackStack" value="490" min="1">
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackBrivZone">Min Zone to Reach Before Leveling Briv:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="stackBrivZone" id="stackBrivZone" value="2" min="1">
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackz1Form">z1 Formation (or Modron with RNGWR):</label>
			</span>
			<span class="routesCol2">
				<select name="stackz1Form" id="stackz1Form" style="min-width:60px;max-width:200px">
					<option value="q" selected>Q</option>
					<option value="e">E</option>
					<option value="4">Wasting Haste (4j)</option>
					<option value="9">Strategic Stride (9j)</option>
				</select>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackRNGWR">Using RNG Waiting Room:</label>
			</span>
			<span class="routesCol2" style="width:max-content">
				<input type="checkbox" name="stackRNGWR" id="stackRNGWR" checked>
			</span>
			<span class="routesCol4" style="width:fit-content">
				(EllyWaiting on Thellora's Landing Zone)
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackWithMetal">Stack With Metalborn:</label>
			</span>
			<span class="routesCol2">
				<input type="checkbox" name="stackWithMetal" id="stackWithMetal" checked>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackRuns">Number of Runs Per Stacking:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="stackRuns" id="stackRuns" value="1" min="1">
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="stackThunderStep">Briv's Thunder Step Feat:</label>
			</span>
			<span class="routesCol2" style="width:max-content">
				<input type="checkbox" name="stackThunderStep" id="stackThunderStep">
			</span>
		</span>
		<span class="routesRow">
			<span class="routesDesc">
				&nbsp;
			</span>
		</span>
		<span class="routesWrapper" id="stackResult">
			&nbsp;
		</span>
	</div>
	<input onClick="setHash('formsTab')" type="radio" class="tabsRadio" name="routesTabs" id="formsTab">
	<label for="formsTab" class="tabsLabel">Example Formations</label>
	<div class="tabsContent">
		<span class="routesRow">
			<span class="routesDesc">
				<h3 id="eventInput">Fill out all the information below.</h3>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="formCampaign">Campaign:</label>
			</span>
			<span class="routesCol2">
				<select name="formCampaign" id="formCampaign" style="min-width:250px">
					<option value="" selected>-</option>
				</select>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="formType">Quest Champions:</label>
			</span>
			<span class="routesCol2">
				<select name="formType" id="formType" style="min-width:250px">
					<option value="" selected>-</option>
				</select>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="formWiddle">Widdle Adjacencies:</label>
			</span>
			<span class="routesCol2">
				<select name="formWiddle" id="formWiddle" style="min-width:250px">
					<option value="" selected>-</option>
				</select>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="formTatyana" id="formTatyanaLabel">Tatyana in M:</label>
			</span>
			<span class="routesCol2" style="display:flex">
				<input type="checkbox" name="formTatyana" id="formTatyana">
				<span>(Can speed up EllyWait)</span>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="formBaldric" id="formBaldricLabel">Baldric:</label>
			</span>
			<span class="routesCol2">
				<input type="checkbox" name="formBaldric" id="formBaldric">
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="formFeatSwap" id="formFeatSwapLabel">Feat Swapping:</label>
			</span>
			<span class="routesCol2">
				<input type="checkbox" name="formFeatSwap" id="formFeatSwap">
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol6">
				<label for="formHybrid" id="formHybridLabel">Hybrid Stacking:</label>
			</span>
			<span class="routesCol2">
				<input type="checkbox" name="formHybrid" id="formHybrid">
			</span>
		</span>
		<span class="routesRow">
			&nbsp;
		</span>
		<span class="routesRow">
			<span style="padding:0 40px 0 20px;text-wrap-style:pretty">
				<p>The formations listed here are designed to be examples - nothing more. They aren't necessarily meant to be copied exactly - but are to be learned from and modified to fit your needs.</p>
				<p>The 'M (Modron)' formation is a separate 4th formation that is selected in the Modron Automation settings. It becomes the formation that is loaded on z1. All specialisations get saved to the Modron formation - and you don't need to save any to the others.</p>
				<p><em>Note: It is recommended to use as few Widdle adjacencies as possible. Just know that she might need more ilvls to maintain 1,000% total effect.</em></p>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesDesc" id="formResult" style="display:flex;flex-direction:column;text-wrap-style:balance">
				&nbsp;
			</span>
		</span>
		<span class="routesRow">
			&nbsp;
		</span>
	</div>
</div>
{:/nomarkdown}