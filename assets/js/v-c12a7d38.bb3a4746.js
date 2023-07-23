"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75610],{520769:(e,o,t)=>{t.r(o),t.d(o,{data:()=>c});const c=JSON.parse('{"key":"v-c12a7d38","path":"/devices/easyCodeTouch_v1.html","title":"Onesti Products AS easyCodeTouch_v1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Onesti Products AS easyCodeTouch_v1 control via MQTT","description":"Integrate your Onesti Products AS easyCodeTouch_v1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Sound_volume (enum)","slug":"sound-volume-enum","link":"#sound-volume-enum","children":[]},{"level":3,"title":"Action_source_name (enum)","slug":"action-source-name-enum","link":"#action-source-name-enum","children":[]},{"level":3,"title":"Action_user (numeric)","slug":"action-user-numeric","link":"#action-user-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Auto_relock (binary)","slug":"auto-relock-binary","link":"#auto-relock-binary","children":[]},{"level":3,"title":"Pin_code (composite)","slug":"pin-code-composite","link":"#pin-code-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1690098175000},"filePathRelative":"devices/easyCodeTouch_v1.md"}')},116423:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p});var c=t(166252);const d=(0,c._)("h1",{id:"onesti-products-as-easycodetouch-v1",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#onesti-products-as-easycodetouch-v1","aria-hidden":"true"},"#"),(0,c.Uk)(" Onesti Products AS easyCodeTouch_v1")],-1),i=(0,c._)("thead",null,[(0,c._)("tr",null,[(0,c._)("th"),(0,c._)("th")])],-1),a=(0,c._)("tr",null,[(0,c._)("td",null,"Model"),(0,c._)("td",null,"easyCodeTouch_v1")],-1),n=(0,c._)("td",null,"Vendor",-1),u=(0,c._)("tr",null,[(0,c._)("td",null,"Description"),(0,c._)("td",null,"Zigbee module for EasyAccess code touch series")],-1),l=(0,c._)("tr",null,[(0,c._)("td",null,"Exposes"),(0,c._)("td",null,"lock (state, lock_state), battery, sound_volume, action_source_name, action_user, action, auto_relock, pin_code, linkquality")],-1),s=(0,c._)("tr",null,[(0,c._)("td",null,"Picture"),(0,c._)("td",null,[(0,c._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/easyCodeTouch_v1.jpg",alt:"Onesti Products AS easyCodeTouch_v1"})])],-1),r=(0,c.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum" aria-hidden="true">#</a> Sound_volume (enum)</h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="action-source-name-enum" tabindex="-1"><a class="header-anchor" href="#action-source-name-enum" aria-hidden="true">#</a> Action_source_name (enum)</h3><p>Source of the triggered action on the lock. Value can be found in the published state on the <code>action_source_name</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>keypad</code>, <code>rfid</code>, <code>manual</code>, <code>rf</code>.</p><h3 id="action-user-numeric" tabindex="-1"><a class="header-anchor" href="#action-user-numeric" aria-hidden="true">#</a> Action_user (numeric)</h3><p>ID of user that triggered the action on the lock. Value can be found in the published state on the <code>action_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>keypad_lock</code>, <code>keypad_unlock</code>, <code>keypad_unlock</code>, <code>manual_lock</code>, <code>manual_unlock</code>, <code>key_lock</code>, <code>key_unlock</code>, <code>fingerprint_lock</code>, <code>fingerprint_unlock</code>, <code>rfid_lock</code>, <code>rfid_unlock</code>, <code>lock</code>, <code>zigbee_unlock</code>.</p><h3 id="auto-relock-binary" tabindex="-1"><a class="header-anchor" href="#auto-relock-binary" aria-hidden="true">#</a> Auto_relock (binary)</h3><p>Auto relock after 7 seconds.. Value can be found in the published state on the <code>auto_relock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_relock&quot;: NEW_VALUE}</code>. If value equals <code>true</code> auto_relock is ON, if <code>false</code> OFF.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite" aria-hidden="true">#</a> Pin_code (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pin_code&quot;: &quot;&quot;}</code>.</p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),h={},p=(0,t(983744).Z)(h,[["render",function(e,o){const t=(0,c.up)("RouterLink");return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.kq)(" !!!! "),(0,c.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,c.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,c.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,c.kq)(" !!!! "),d,(0,c._)("table",null,[i,(0,c._)("tbody",null,[a,(0,c._)("tr",null,[n,(0,c._)("td",null,[(0,c.Wm)(t,{to:"/supported-devices/#v=Onesti%20Products%20AS"},{default:(0,c.w5)((()=>[(0,c.Uk)("Onesti Products AS")])),_:1})])]),u,l,s])]),(0,c.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,c.kq)(" Notes END: Do not edit below this line "),r])}]])}}]);