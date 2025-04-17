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
				<label for="ilvl">Item Level:</label>
			</span>
			<span class="routesCol2">
				<input type="number" name="ilvl" id="ilvl" value="3626">
			</span>
			<span class="routesCol3" style="width:160px">
				<label for="presets">Presets:</label>
			</span>
			<span class="routesCol4">
				<select name="presets" id="presets">
				<option value="1j">1j</option>
				<option value="2j">2j</option>
				<option value="3j">3j</option>
				<option value="3.50005j">3-4j</option>
				<option value="4j" selected>4j</option>
				<option value="5j">5j</option>
				<option value="6j">6j</option>
				<option value="7j">7j</option>
				<option value="7.99997j">8–j (7.99997j)</option>
				<option value="8j">8j</option>
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
				<label for="rarity">Rarity:</label>
			</span>
			<span class="routesCol2">
				<select name="rarity" id="rarity">
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
				<label for="gilding">Gilding:</label>
			</span>
			<span class="routesCol2">
				<select name="gilding" id="gilding">
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
				<label for="stackz1Form">z1 Formation:</label>
			</span>
			<span class="routesCol2">
				<select name="stackz1Form" id="stackz1Form" style="min-width:60px">
				<option value="q" selected>Q</option>
				<option value="e">E</option>
				</select>
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
			<span class="routesCol5" id="stackThunderStepNote">
				&nbsp;
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
</div>
{:/nomarkdown}