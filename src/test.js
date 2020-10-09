export const TEST_XML = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <movement-title>Wie Melodien zieht es mir (Page 1)</movement-title>
  <identification>
    <creator type="composer">Johannes Brahms</creator>
    <creator type="lyricist">Klaus Groth</creator>
    <rights>Copyright © 2002 MakeMusic, Inc.</rights>
    <encoding>
      <software>Finale v25 for Mac</software>
      <encoding-date>2017-12-12</encoding-date>
      <supports attribute="new-system" element="print" type="yes" value="yes"/>
      <supports attribute="new-page" element="print" type="yes" value="yes"/>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="stem" type="yes"/>
    </encoding>
  </identification>
  <defaults>
    <scaling>
      <millimeters>6.35</millimeters>
      <tenths>40</tenths>
    </scaling>
    <page-layout>
      <page-height>1760</page-height>
      <page-width>1360</page-width>
      <page-margins type="both">
        <left-margin>80</left-margin>
        <right-margin>80</right-margin>
        <top-margin>80</top-margin>
        <bottom-margin>80</bottom-margin>
      </page-margins>
    </page-layout>
    <system-layout>
      <system-margins>
        <left-margin>0</left-margin>
        <right-margin>0</right-margin>
      </system-margins>
      <system-distance>130</system-distance>
      <top-system-distance>70</top-system-distance>
    </system-layout>
    <staff-layout>
      <staff-distance>80</staff-distance>
    </staff-layout>
    <appearance>
      <line-width type="stem">0.8333</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="staff">1.25</line-width>
      <line-width type="light barline">1.875</line-width>
      <line-width type="heavy barline">5</line-width>
      <line-width type="leger">1.875</line-width>
      <line-width type="ending">0.8333</line-width>
      <line-width type="wedge">1.25</line-width>
      <line-width type="enclosure">1.25</line-width>
      <line-width type="tuplet bracket">0.8333</line-width>
      <note-size type="grace">60</note-size>
      <note-size type="cue">60</note-size>
      <distance type="hyphen">60</distance>
      <distance type="beam">8</distance>
    </appearance>
    <music-font font-family="Maestro,engraved" font-size="18"/>
    <word-font font-family="Times New Roman" font-size="9"/>
    <lyric-font font-family="Times New Roman" font-size="10"/>
  </defaults>
  <credit page="1">
    <credit-type>page number</credit-type>
    <credit-words default-x="80" default-y="1680" font-size="12" valign="top">2</credit-words>
  </credit>
  <credit page="1">
    <credit-type>rights</credit-type>
    <credit-words default-x="680" default-y="80" font-size="9" halign="center" valign="bottom">Copyright © 2002 MakeMusic, Inc.</credit-words>
  </credit>
  <credit page="1">
    <credit-type>title</credit-type>
    <credit-words default-x="680" default-y="1640" font-size="24" justify="center" valign="top">Wie Melodien zieht es mir</credit-words>
  </credit>
  <credit page="1">
    <credit-words default-x="680" default-y="1580" font-size="14" justify="center" valign="top">Op. 105, No. 1</credit-words>
  </credit>
  <credit page="1">
    <credit-type>lyricist</credit-type>
    <credit-words default-x="80" default-y="1500" font-size="10" valign="bottom">Klaus Groth</credit-words>
  </credit>
  <credit page="1">
    <credit-type>composer</credit-type>
    <credit-words default-x="1280" default-y="1500" font-size="10" halign="right" valign="bottom">Johannes Brahms</credit-words>
  </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Voice</part-name>
      <score-instrument id="P1-I1">
        <instrument-name>Voice</instrument-name>
        <instrument-sound>voice.vocals</instrument-sound>
        <solo/>
      </score-instrument>
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>53</midi-program>
        <volume>80</volume>
        <pan>0</pan>
      </midi-instrument>
    </score-part>
    <score-part id="P2">
      <part-name>Piano</part-name>
      <score-instrument id="P2-I2">
        <instrument-name>Acoustic Grand Piano</instrument-name>
        <instrument-sound>keyboard.piano</instrument-sound>
      </score-instrument>
      <midi-instrument id="P2-I2">
        <midi-channel>2</midi-channel>
        <midi-program>1</midi-program>
        <volume>80</volume>
        <pan>0</pan>
      </midi-instrument>
    </score-part>
  </part-list>
  <!--=========================================================-->
  <part id="P1">
    <measure number="1" width="340">
      <print page-number="2">
        <system-layout>
          <system-margins>
            <left-margin>120</left-margin>
            <right-margin>0</right-margin>
          </system-margins>
          <top-system-distance>230</top-system-distance>
        </system-layout>
        <measure-numbering>system</measure-numbering>
      </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>3</fifths>
          <mode>major</mode>
        </key>
        <time symbol="cut">
          <beats>2</beats>
          <beat-type>2</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <direction directive="yes" placement="above">
        <direction-type>
          <words default-y="15" font-size="10.5" font-weight="bold">Zart</words>
        </direction-type>
        <sound tempo="96"/>
      </direction>
      <note default-x="139">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note default-x="189">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-14">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>Wie</text>
        </lyric>
      </note>
      <note default-x="239">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-4">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>Me</text>
        </lyric>
      </note>
      <note default-x="289">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="11">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>middle</syllabic>
          <text>lo</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="2" width="220">
      <note default-x="18">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-45.5">down</stem>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>middle</syllabic>
          <text>di</text>
        </lyric>
      </note>
      <note default-x="68">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-50.5">down</stem>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="118">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-55.5">down</stem>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>en</text>
          <extend/>
        </lyric>
      </note>
      <note default-x="168">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="11">up</stem>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="3" width="217">
      <note default-x="18">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="6">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>zieht</text>
        </lyric>
      </note>
      <note default-x="116">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="1">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>es</text>
        </lyric>
      </note>
      <note default-x="166">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="11">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>mir</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="4" width="303">
      <note default-x="26">
        <pitch>
          <step>F</step>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <accidental>natural</accidental>
        <stem default-y="1">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>lei</text>
        </lyric>
      </note>
      <note default-x="132">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem default-y="6">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>se</text>
        </lyric>
      </note>
      <note default-x="175">
        <pitch>
          <step>F</step>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="1">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>durch</text>
        </lyric>
      </note>
      <note default-x="265">
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="6">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>den</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="5" width="371">
      <print new-system="yes">
        <system-layout>
          <system-distance>165</system-distance>
        </system-layout>
      </print>
      <note default-x="107">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="-4">up</stem>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>single</syllabic>
          <text>Sinn,</text>
        </lyric>
      </note>
      <note default-x="243">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note default-x="304">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-50.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>wie</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="6" width="315">
      <note default-x="18">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-55.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>Früh</text>
        </lyric>
      </note>
      <note default-x="124">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="1">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>middle</syllabic>
          <text>lings</text>
        </lyric>
      </note>
      <note default-x="168">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="6">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>middle</syllabic>
          <text>blu</text>
        </lyric>
      </note>
      <note default-x="274">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-4">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>men</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="7" width="230">
      <note default-x="18">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="-55.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>blüht</text>
        </lyric>
      </note>
      <note default-x="123">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="11">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>es</text>
        </lyric>
      </note>
      <note default-x="175">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-40.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>und</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="8" width="284">
      <note default-x="27">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <accidental>sharp</accidental>
        <stem default-y="-45.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>schwebt</text>
        </lyric>
      </note>
      <note default-x="120">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-50.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>wie</text>
        </lyric>
      </note>
      <note default-x="163">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-55.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>Duft</text>
        </lyric>
      </note>
      <note default-x="249">
        <pitch>
          <step>F</step>
          <alter>2</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>double-sharp</accidental>
        <stem default-y="1">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>da</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="9" width="296">
      <print new-system="yes">
        <system-layout>
          <system-distance>165</system-distance>
        </system-layout>
      </print>
      <note default-x="113">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="6">up</stem>
        <lyric default-y="-80" number="1" relative-x="3">
          <syllabic>end</syllabic>
          <text>hin,</text>
        </lyric>
      </note>
      <note default-x="210">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="10" width="202">
      <note default-x="16">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
      </note>
      <note default-x="118">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note default-x="159">
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem default-y="-55.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>und</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="11" width="251">
      <note default-x="39">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <accidental>sharp</accidental>
        <stem default-y="-45.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>schwebt</text>
        </lyric>
      </note>
      <note default-x="108">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-50.5">down</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>wie</text>
        </lyric>
      </note>
      <note default-x="151">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="11">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>single</syllabic>
          <text>Duft</text>
        </lyric>
      </note>
      <note default-x="221">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem default-y="-9">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>begin</syllabic>
          <text>da</text>
        </lyric>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="12" width="220">
      <note default-x="24">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="-4">up</stem>
        <lyric default-y="-80" number="1">
          <syllabic>end</syllabic>
          <text>hin.</text>
        </lyric>
      </note>
      <note default-x="120">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>half</type>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="13" width="231">
      <note>
        <rest measure="yes"/>
        <duration>8</duration>
        <voice>1</voice>
      </note>
    </measure>
  </part>
  <!--=========================================================-->
  <part id="P2">
    <measure number="1" width="340">
      <print>
        <staff-layout number="1">
          <staff-distance>100</staff-distance>
        </staff-layout>
        <staff-layout number="2">
          <staff-distance>60</staff-distance>
        </staff-layout>
        <measure-numbering>none</measure-numbering>
      </print>
      <attributes>
        <divisions>8</divisions>
        <key>
          <fifths>3</fifths>
          <mode>major</mode>
        </key>
        <time symbol="cut">
          <beats>2</beats>
          <beat-type>2</beat-type>
        </time>
        <staves>2</staves>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
        </clef>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
        </clef>
      </attributes>
      <direction placement="below">
        <direction-type>
          <dynamics default-y="-80" halign="left">
            <p/>
          </dynamics>
        </direction-type>
        <staff>1</staff>
        <sound dynamics="54"/>
      </direction>
      <note default-x="139">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <direction placement="below">
        <direction-type>
          <words default-y="-80" font-style="italic" relative-x="14">sempre dolce</words>
        </direction-type>
        <staff>1</staff>
      </direction>
      <note default-x="164">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-50">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur default-x="7" default-y="14" number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="189">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-48">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="214">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-45">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="239">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-55">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="264">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="289">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="36">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="313">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="30">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="139">
        <pitch>
          <step>A</step>
          <octave>1</octave>
        </pitch>
        <duration>16</duration>
        <voice>3</voice>
        <type>half</type>
        <stem default-y="1">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="139">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>16</duration>
        <voice>3</voice>
        <type>half</type>
        <stem>up</stem>
        <staff>2</staff>
      </note>
      <note default-x="239">
        <rest/>
        <duration>8</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
      <forward>
        <duration>8</duration>
        <voice>3</voice>
        <staff>2</staff>
      </forward>
    </measure>
    <!--=======================================================-->
    <measure number="2" width="220">
      <note default-x="18">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="43">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-35">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur default-x="7" default-y="20" number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="68">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-32">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="93">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-30">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="118">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-55">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="143">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="168">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="36">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="193">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="30">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>16</duration>
        <voice>3</voice>
        <type>half</type>
        <stem default-y="-19">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="119">
        <rest/>
        <duration>8</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
      <forward>
        <duration>8</duration>
        <voice>3</voice>
        <staff>2</staff>
      </forward>
    </measure>
    <!--=======================================================-->
    <measure number="3" width="217">
      <forward>
        <duration>32</duration>
        <voice>1</voice>
        <staff>1</staff>
      </forward>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="29">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="43">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="35">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="68">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="41">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur default-x="6" default-y="-37" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="92">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-61">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="92">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="116">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="29">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="141">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="35">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="166">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="41">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur default-x="6" default-y="-26" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="191">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-61">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="191">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="4" width="303">
      <forward>
        <duration>32</duration>
        <voice>1</voice>
        <staff>1</staff>
      </forward>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="26">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="29.5">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="62">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem default-y="35">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="90">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="39.5">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur default-x="8" default-y="-37" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="132">
        <pitch>
          <step>F</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="132">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>flat</accidental>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="175">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="29">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="204">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="34.5">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="237">
        <pitch>
          <step>F</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem default-y="41">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur default-x="6" default-y="-26" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="265">
        <pitch>
          <step>B</step>
          <alter>-1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-60.5">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="265">
        <chord/>
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="5" width="371">
      <print new-system="yes">
        <staff-layout number="2">
          <staff-distance>70</staff-distance>
        </staff-layout>
      </print>
      <forward>
        <duration>16</duration>
        <voice>1</voice>
        <staff>1</staff>
      </forward>
      <attributes>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note default-x="243">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="271">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-4">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="271">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="304">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="337">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="11">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="337">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="107">
        <pitch>
          <step>A</step>
          <octave>1</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="34">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="136">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="40">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="164">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="46">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
        <notations>
          <slur default-x="6" default-y="-35" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="194">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-66">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="194">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="243">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-35.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="271">
        <rest/>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="304">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="11">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="337">
        <rest/>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="6" width="315">
      <note default-x="18">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="52">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-19">up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
        </notations>
      </note>
      <note default-x="96">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="1">up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="96">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="168">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="202">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-19">up</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
        </notations>
      </note>
      <note default-x="247">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-4">up</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="247">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>12</duration>
        <voice>3</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-19">up</stem>
        <staff>2</staff>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="124">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="168">
        <pitch>
          <step>D</step>
          <octave>2</octave>
        </pitch>
        <duration>12</duration>
        <voice>3</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-19">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="274">
        <pitch>
          <step>D</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-55.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="7" width="230">
      <note default-x="18">
        <rest/>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="44">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-5">up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="70">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-5">up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="96">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-5">up</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="123">
        <rest/>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <staff>1</staff>
      </note>
      <note default-x="175">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-50.5">down</stem>
        <staff>1</staff>
        <notations>
          <slur number="2" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="175">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>2</octave>
        </pitch>
        <duration>16</duration>
        <voice>3</voice>
        <type>half</type>
        <stem default-y="-19">up</stem>
        <staff>2</staff>
      </note>
      <note default-x="123">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="35">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="149">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="33.5">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="175">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="32">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="201">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="30">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="8" width="284">
      <note default-x="27">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="-55.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="27">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="120">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-58">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="120">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="163">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="16">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="163">
        <chord/>
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="249">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem default-y="1">up</stem>
        <staff>1</staff>
        <notations>
          <slur number="2" type="stop"/>
        </notations>
      </note>
      <note default-x="249">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>2</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>double-sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="27">
        <pitch>
          <step>B</step>
          <octave>1</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="10">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="56">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="12">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="91">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem default-y="15">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur default-x="6" default-y="-36" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="120">
        <rest/>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="163">
        <rest/>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="191">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-65">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur default-x="6" default-y="-15" number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="220">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-60">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="249">
        <rest/>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="9" width="296">
      <print new-system="yes">
        <staff-layout number="2">
          <staff-distance>90</staff-distance>
        </staff-layout>
      </print>
      <note default-x="113">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="6">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="113">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="159">
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="-40.5">down</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="159">
        <chord/>
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="253">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem default-y="-45.5">down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
        </notations>
      </note>
      <note default-x="253">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="start"/>
        </notations>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="113">
        <pitch>
          <step>E</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="35">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="2" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="136">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="37">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="159">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="38.5">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="182">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="40">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="212">
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem default-y="-30.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="235">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="272">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-50.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur number="2" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="10" width="202">
      <note default-x="18">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="-45.5">down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="18">
        <chord/>
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>8</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <staff>1</staff>
        <notations>
          <tied type="stop"/>
        </notations>
      </note>
      <note default-x="63">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <stem default-y="-50.5">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="63">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="159">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem default-y="16">up</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="159">
        <chord/>
        <pitch>
          <step>B</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="18">
        <pitch>
          <step>E</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-85">down</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="25" bezier-y="74" default-x="6" default-y="-25" number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="41">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-83">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="63">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-81.5">down</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="86">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-80">down</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="118">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem default-y="-20.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="141">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem default-y="-40.5">down</stem>
        <staff>2</staff>
      </note>
      <note default-x="177">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="-50.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur bezier-x="-42" bezier-y="44" default-x="6" default-y="5" number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="11" width="251">
      <note default-x="39">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <accidental>natural</accidental>
        <stem default-y="-55.5">down</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="39">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="108">
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-58">down</stem>
        <staff>1</staff>
      </note>
      <note default-x="108">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <staff>1</staff>
      </note>
      <note default-x="151">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem default-y="11">up</stem>
        <staff>1</staff>
      </note>
      <note default-x="151">
        <chord/>
        <pitch>
          <step>A</step>
          <octave>4</octave>
        </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot/>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="221">
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-9">up</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="221">
        <chord/>
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="39">
        <pitch>
          <step>A</step>
          <octave>1</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="20">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="30" bezier-y="1" default-x="7" default-y="-82" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="62">
        <pitch>
          <step>A</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="22">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="85">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="23.5">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="108">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="25">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur bezier-x="-6" bezier-y="-30" default-x="7" default-y="-24" number="1" type="stop"/>
        </notations>
      </note>
      <note default-x="151">
        <rest/>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="175">
        <pitch>
          <step>B</step>
          <octave>1</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="20">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="24" bezier-y="-1" default-x="7" default-y="-77" number="1" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="198">
        <pitch>
          <step>B</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="23">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="221">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="25">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur bezier-x="-2" bezier-y="-25" default-x="6" default-y="-35" number="1" type="stop"/>
        </notations>
      </note>
    </measure>
    <!--=======================================================-->
    <measure number="12" width="220">
      <forward>
        <duration>16</duration>
        <voice>1</voice>
        <staff>1</staff>
      </forward>
      <forward>
        <duration>8</duration>
        <voice>1</voice>
        <staff>1</staff>
      </forward>
      <direction placement="below">
        <direction-type>
          <wedge default-y="-73" type="crescendo"/>
        </direction-type>
        <offset>-1</offset>
        <staff>1</staff>
      </direction>
      <note default-x="168">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <direction>
        <direction-type>
          <wedge spread="12" type="stop"/>
        </direction-type>
        <offset>2</offset>
        <staff>1</staff>
      </direction>
      <note default-x="191">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="6">up</stem>
        <staff>1</staff>
        <notations>
          <slur number="1" placement="above" type="start"/>
        </notations>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="24">
        <rest>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </rest>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <staff>1</staff>
      </note>
      <note default-x="47">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-75">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur bezier-x="19" bezier-y="45" default-x="6" default-y="-7" number="2" placement="above" type="start"/>
        </notations>
      </note>
      <note default-x="76">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem default-y="-72">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="98">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-70">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <note default-x="122">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-80">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="145">
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="-84">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="168">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="44.5">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="191">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>2</voice>
        <type>eighth</type>
        <stem default-y="40">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="24">
        <pitch>
          <step>E</step>
          <octave>2</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="25">up</stem>
        <staff>2</staff>
        <beam number="1">begin</beam>
        <notations>
          <slur number="3" placement="below" type="start"/>
        </notations>
      </note>
      <note default-x="47">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="27">up</stem>
        <staff>2</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="76">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <stem default-y="30">up</stem>
        <staff>2</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="3" type="stop"/>
        </notations>
      </note>
      <note default-x="98">
        <rest/>
        <duration>4</duration>
        <voice>3</voice>
        <type>eighth</type>
        <staff>2</staff>
      </note>
      <note default-x="122">
        <rest/>
        <duration>8</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
      <forward>
        <duration>8</duration>
        <voice>3</voice>
        <staff>2</staff>
      </forward>
    </measure>
    <!--=======================================================-->
    <measure number="13" width="231">
      <direction placement="below">
        <direction-type>
          <wedge default-y="-73" spread="12" type="diminuendo"/>
        </direction-type>
        <staff>1</staff>
      </direction>
      <note default-x="15">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-60">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="38">
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-61.5">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="61">
        <pitch>
          <step>B</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-63">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <direction>
        <direction-type>
          <wedge type="stop"/>
        </direction-type>
        <offset>1</offset>
        <staff>1</staff>
      </direction>
      <note default-x="84">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-65">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
      </note>
      <attributes>
        <clef number="1">
          <sign>F</sign>
          <line>4</line>
        </clef>
      </attributes>
      <note default-x="136">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-35">down</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="160">
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-36.5">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="183">
        <pitch>
          <step>B</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-38">down</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
      <note default-x="206">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem default-y="-40">down</stem>
        <staff>1</staff>
        <beam number="1">end</beam>
        <notations>
          <slur number="1" type="stop"/>
        </notations>
      </note>
      <backup>
        <duration>32</duration>
      </backup>
      <note default-x="15">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>8</duration>
        <voice>3</voice>
        <type>quarter</type>
        <stem default-y="-50.5">down</stem>
        <staff>2</staff>
        <notations>
          <slur bezier-x="-32" bezier-y="118" default-x="7" default-y="-5" number="2" type="stop"/>
        </notations>
      </note>
      <note default-x="61">
        <rest/>
        <duration>8</duration>
        <voice>3</voice>
        <type>quarter</type>
        <staff>2</staff>
      </note>
      <note default-x="134">
        <rest/>
        <duration>16</duration>
        <voice>3</voice>
        <type>half</type>
        <staff>2</staff>
      </note>
    </measure>
  </part>
  <!--=========================================================-->
</score-partwise>
`