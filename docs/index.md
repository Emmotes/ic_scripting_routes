# Idle Champions Briv Scripting Routes

{::nomarkdown}
<div class="tabs">
	<input onClick="setHash('gemTab')" type="radio" class="tabsRadio" name="routesTabs" id="gemTab" checked>
	<label for="gemTab" class="tabsLabel">Gem Farming</label>
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
			<span class="routesCol3">
				<label for="presets">Specific Jumps:</label>
			</span>
			<span class="routesCol4">
				<select name="presets" id="presets">
				<option value="1j">1j</option>
				<option value="2j">2j</option>
				<option value="3j">3j</option>
				<option value="4j" selected>4j</option>
				<option value="5j">5j</option>
				<option value="6j">6j</option>
				<option value="7j">7j</option>
				<option value="8j">8j</option>
				<option value="9j">9j</option>
				<option value="11j">11j</option>
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
	<input onClick="setHash('eventTab')" type="radio" class="tabsRadio" name="routesTabs" id="eventTab">
	<label for="eventTab" class="tabsLabel">Events</label>
	<div class="tabsContent">
		<span class="routesRow">
			<span class="routesDesc">
				<h3 id="eventInput">Select an event and then choose your jump value.</h3>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol1">
				<label for="eventChoices">Event:</label>
			</span>
			<span class="routesCol2">
				<select name="eventChoices" id="eventChoices">
				<option value="" selected disabled style="display:none;">&nbsp;</option>
				</select>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesCol1">
				<label for="eventPresets">Jump value:</label>
			</span>
			<span class="routesCol2">
				<select name="eventPresets" id="eventPresets">
				<option value="all" selected>All</option>
				<option value="1j">1j</option>
				<option value="2j">2j</option>
				<option value="3j">3j</option>
				<option value="4j">4j</option>
				<option value="5j">5j</option>
				<option value="6j">6j</option>
				<option value="7j">7j</option>
				<option value="8j">8j</option>
				<option value="9j">9j</option>
				<option value="10j">10j</option>
				<option value="11j">11j</option>
				</select>
			</span>
		</span>
		<span class="routesRow">
			<span class="routesDesc">
				&nbsp;
			</span>
		</span>
		<span class="routesWrapper" id="eventList">
			&nbsp;
		</span>
	</div>
</div>
{:/nomarkdown}